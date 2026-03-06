'use client';

import { useState, useEffect, useCallback } from 'react';

interface KeywordResult {
  keyword: string;
  found: boolean;
  position?: number;
  positionWithoutAd?: number;  // 광고 제외 순위
  isAd?: boolean;
  isFirstPage?: boolean;        // 1페이지 노출 여부 (상위 8개)
  hasUnnecessaryAd?: boolean;   // 불필요한 광고 (오가닉 1페이지인데 광고도 있음)
  isFirstPageByAd?: boolean;    // 광고로 1페이지 (오가닉은 1페이지 아님)
  hasPlaceSection: boolean;
  totalPlaces?: number;
  error?: string;
}

interface DailyResult {
  date: string;
  checkedAt: string;
  results: KeywordResult[];
}

interface Config {
  id: string;
  target_url: string;
  keywords: string[];
}

// 현재 월의 모든 날짜 생성 (1일 ~ 말일)
const getMonthDates = (year: number, month: number): string[] => {
  const dates: string[] = [];
  const lastDay = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= lastDay; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    dates.push(dateStr);
  }
  return dates;
};

interface ValidationState {
  isValidating: boolean;
  progress: number;
  total: number;
  currentKeyword: string;
}

// 키워드 유효성 상태: valid (플레이스 영역 있음), invalid (없음), pending (검증 전)
type KeywordValidationStatus = 'valid' | 'invalid' | 'pending';

const DEFAULT_KEYWORDS = [
  '고덕동임플란트', '고덕동라미네이트', '고덕동전체임플란트', '고덕동보철치료', '고덕동충치',
  '고덕동신경치료', '고덕동잇몸치료', '고덕동매복사랑니', '고덕동사랑니발치', '고덕동매복사랑니발치', '고덕동치과',
  '평택임플란트', '평택라미네이트', '평택전체임플란트', '평택보철치료', '평택충치',
  '평택신경치료', '평택잇몸치료', '평택매복사랑니', '평택사랑니발치', '평택매복사랑니발치', '평택치과',
  '고덕국제신도시임플란트', '고덕국제신도시라미네이트', '고덕국제신도시전체임플란트', '고덕국제신도시치과',
  '동삭동임플란트', '동삭동치과', '청북읍임플란트', '청북읍치과',
  '안중읍임플란트', '안중읍치과', '세교동임플란트', '세교동치과',
];

const DEFAULT_TARGET_URL = 'map.naver.com/p/search/고덕동치과/place/1201116357';

export default function RankTracker() {
  const [config, setConfig] = useState<Config | null>(null);
  const [targetUrl, setTargetUrl] = useState(DEFAULT_TARGET_URL);
  const [keywords, setKeywords] = useState<string[]>(DEFAULT_KEYWORDS);
  const [newKeyword, setNewKeyword] = useState('');
  const [historyData, setHistoryData] = useState<DailyResult[]>([]);
  const [showKeywordManager, setShowKeywordManager] = useState(false);
  const [showInvalidKeywords, setShowInvalidKeywords] = useState(false);
  const [showInactiveKeywords, setShowInactiveKeywords] = useState(false);
  const [inactiveKeywords, setInactiveKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // 키워드 유효성 검사 상태
  const [keywordValidation, setKeywordValidation] = useState<Record<string, KeywordValidationStatus>>({});
  const [validationState, setValidationState] = useState<ValidationState>({
    isValidating: false,
    progress: 0,
    total: 0,
    currentKeyword: '',
  });

  // 현재 월 정보
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed
  const monthDates = getMonthDates(currentYear, currentMonth);

  // 설정 및 데이터 로드
  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);

      // 설정 로드
      const configRes = await fetch('/api/rank-tracking/config');
      const configData = await configRes.json();

      if (configData.config) {
        setConfig(configData.config);
        setTargetUrl(configData.config.target_url);
        setKeywords(configData.config.keywords);

        // 기존 저장된 키워드는 이미 검증된 것으로 간주
        const initialValidation: Record<string, KeywordValidationStatus> = {};
        configData.config.keywords.forEach((k: string) => {
          initialValidation[k] = 'valid';
        });
        setKeywordValidation(initialValidation);

        // 현재 월 데이터만 로드 (1일부터)
        const today = new Date();
        const resultsRes = await fetch(
          `/api/rank-tracking/results?configId=${configData.config.id}&year=${today.getFullYear()}&month=${today.getMonth() + 1}`
        );
        const resultsData = await resultsRes.json();
        if (resultsData.historyData) {
          setHistoryData(resultsData.historyData);

          // 비활성 키워드 추출 (DB에는 있지만 현재 config에는 없는 키워드)
          const allKeywordsInResults = new Set<string>();
          resultsData.historyData.forEach((day: DailyResult) => {
            day.results.forEach((r: KeywordResult) => {
              allKeywordsInResults.add(r.keyword);
            });
          });

          const configKeywordsSet = new Set(configData.config.keywords);
          const inactive = Array.from(allKeywordsInResults).filter(
            k => !configKeywordsSet.has(k)
          );
          setInactiveKeywords(inactive);
        }
      }
    } catch (error) {
      console.error('데이터 로드 오류:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // 단일 키워드 유효성 검사
  const validateKeyword = async (keyword: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/keyword-validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword }),
      });
      const data = await res.json();
      return data.hasPlaceSection === true;
    } catch {
      return false;
    }
  };

  // 설정 저장 (저장된 config 반환)
  const saveConfig = async (): Promise<Config | null> => {
    // 이미 invalid인 키워드가 있으면 저장 차단
    const currentInvalid = keywords.filter(k => keywordValidation[k] === 'invalid');
    if (currentInvalid.length > 0) {
      alert(`유효하지 않은 키워드가 있습니다: ${currentInvalid.join(', ')}\n해당 키워드를 제거한 후 다시 저장해주세요.`);
      return null;
    }

    // 아직 검증되지 않은 키워드만 검증 (valid가 아닌 것들)
    const unvalidatedKeywords = keywords.filter(k => keywordValidation[k] !== 'valid');

    if (unvalidatedKeywords.length > 0) {
      setValidationState({
        isValidating: true,
        progress: 0,
        total: unvalidatedKeywords.length,
        currentKeyword: '',
      });

      const newValidation = { ...keywordValidation };
      const invalidKeywords: string[] = [];

      for (let i = 0; i < unvalidatedKeywords.length; i++) {
        const keyword = unvalidatedKeywords[i];
        setValidationState(prev => ({
          ...prev,
          progress: i + 1,
          currentKeyword: keyword,
        }));

        const isValid = await validateKeyword(keyword);
        newValidation[keyword] = isValid ? 'valid' : 'invalid';

        if (!isValid) {
          invalidKeywords.push(keyword);
        }

        // 잠깐 대기 (네이버 요청 제한 회피)
        if (i < unvalidatedKeywords.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }

      setKeywordValidation(newValidation);
      setValidationState({
        isValidating: false,
        progress: 0,
        total: 0,
        currentKeyword: '',
      });

      // 유효하지 않은 키워드가 있으면 저장 중단
      if (invalidKeywords.length > 0) {
        alert(`다음 키워드는 플레이스 영역이 없어 저장할 수 없습니다:\n${invalidKeywords.join(', ')}\n\n해당 키워드를 제거한 후 다시 저장해주세요.`);
        return null;
      }
    }

    // 모든 키워드가 유효하면 저장 진행
    try {
      setIsSaving(true);
      const res = await fetch('/api/rank-tracking/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetUrl,
          keywords,
          configId: config?.id,
        }),
      });
      const data = await res.json();
      if (data.config) {
        setConfig(data.config);
        return data.config;
      }
      return null;
    } catch (error) {
      console.error('설정 저장 오류:', error);
      return null;
    } finally {
      setIsSaving(false);
    }
  };

  const formatDay = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.getDate();
  };

  const formatMonthTitle = () => {
    return `${currentYear}년 ${currentMonth + 1}월`;
  };

  const addKeyword = () => {
    const trimmed = newKeyword.trim();
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords([...keywords, trimmed]);
      // 새 키워드는 pending 상태로 추가 (저장 시 검증됨)
      setKeywordValidation(prev => ({ ...prev, [trimmed]: 'pending' }));
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
    // 유효성 상태에서도 제거
    setKeywordValidation(prev => {
      const newValidation = { ...prev };
      delete newValidation[keyword];
      return newValidation;
    });
  };

  const resetToDefault = () => {
    setKeywords(DEFAULT_KEYWORDS);
    setTargetUrl(DEFAULT_TARGET_URL);
    // 기본 키워드들은 pending으로 초기화 (다시 검증 필요)
    const resetValidation: Record<string, KeywordValidationStatus> = {};
    DEFAULT_KEYWORDS.forEach(k => {
      resetValidation[k] = 'pending';
    });
    setKeywordValidation(resetValidation);
  };

  // 키워드별 날짜별 순위 맵 생성 (활성 + 비활성 키워드 모두)
  const allKeywordsForMap = [...keywords, ...inactiveKeywords];
  const keywordRankMap: Record<string, Record<string, KeywordResult | undefined>> = {};
  allKeywordsForMap.forEach(keyword => {
    keywordRankMap[keyword] = {};
    historyData.forEach(day => {
      const result = day.results.find(r => r.keyword === keyword);
      keywordRankMap[keyword][day.date] = result;
    });
  });

  // 비유효 키워드 (플레이스 영역 없음 - 가장 최근 데이터 기준)
  const latestData = historyData.length > 0
    ? historyData.reduce((latest, current) =>
        current.date > latest.date ? current : latest
      , historyData[0])
    : null;
  const invalidKeywords = latestData
    ? keywords.filter(k => {
        const result = latestData.results.find(r => r.keyword === k);
        return result && !result.hasPlaceSection;
      })
    : [];
  const validKeywords = keywords.filter(k => !invalidKeywords.includes(k));

  // 통계 (최신 데이터 기준)
  const latestValidResults = latestData?.results.filter(r => r.hasPlaceSection) || [];
  const foundCount = latestValidResults.filter(r => r.found).length;
  const notFoundCount = latestValidResults.filter(r => !r.found && !r.error).length;
  const firstPageCount = latestValidResults.filter(r => r.isFirstPage).length;
  const firstPageByAdCount = latestValidResults.filter(r => r.isFirstPageByAd).length;
  const unnecessaryAdCount = latestValidResults.filter(r => r.hasUnnecessaryAd).length;
  const avgPosition = latestValidResults.filter(r => r.found && r.positionWithoutAd)
    .reduce((acc, r, _, arr) => acc + (r.positionWithoutAd || 0) / arr.length, 0);

  // 순위 표시 셀 렌더링
  // 색상: 1페이지(1-8위) = 초록~파랑, 그 외 = 회색
  // 불필요 광고: 주황 테두리
  const renderRankCell = (result: KeywordResult | undefined) => {
    if (!result) {
      return <span className="text-gray-300">-</span>;
    }
    if (!result.hasPlaceSection) {
      return <span className="text-gray-300 text-xs">N/A</span>;
    }
    if (result.error) {
      return <span className="text-red-400 text-xs">ERR</span>;
    }
    if (!result.found) {
      return <span className="text-red-400 font-medium">X</span>;
    }

    // 광고 제외 순위 사용
    const rank = result.positionWithoutAd ?? result.position;

    if (rank) {
      // 색상: 1페이지 여부로만 구분
      const bgColor = result.isFirstPage
        ? 'bg-blue-500 text-white'  // 1페이지
        : 'bg-gray-300 text-gray-700'; // 1페이지 밖

      // 테두리 표시: 불필요 광고(주황), 광고로 1페이지(보라)
      let borderClass = '';
      if (result.hasUnnecessaryAd) {
        borderClass = 'ring-2 ring-orange-400';
      } else if (result.isFirstPageByAd) {
        borderClass = 'ring-2 ring-purple-400';
      }

      return (
        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${bgColor} ${borderClass}`}>
          {rank}
        </span>
      );
    }
    return <span className="text-gray-300">-</span>;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">데이터 로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Target URL Input */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">네이버 지도 순위 추적</h2>
        <p className="text-sm text-gray-500 mb-3">
          네이버 지도 검색 결과에서 광고 제외 순위를 추적합니다. 상위 8개가 1페이지 노출입니다.
        </p>
        <div className="flex flex-wrap gap-3 text-xs mb-4">
          <span className="flex items-center gap-1">
            <span className="w-5 h-5 rounded-full bg-blue-500"></span>
            1페이지
          </span>
          <span className="flex items-center gap-1">
            <span className="w-5 h-5 rounded-full bg-gray-300"></span>
            1페이지 밖
          </span>
          <span className="flex items-center gap-1">
            <span className="w-5 h-5 rounded-full bg-blue-500 ring-2 ring-orange-400"></span>
            불필요 광고
          </span>
          <span className="flex items-center gap-1">
            <span className="w-5 h-5 rounded-full bg-blue-500 ring-2 ring-purple-400"></span>
            광고로 1페이지
          </span>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setShowKeywordManager(!showKeywordManager)}
            className="px-4 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50"
          >
            키워드 관리
          </button>

        </div>
      </div>

      {/* Keyword Manager */}
      {showKeywordManager && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">
              키워드 관리 ({keywords.length}개)
              {keywords.filter(k => keywordValidation[k] === 'invalid').length > 0 && (
                <span className="ml-2 text-sm text-red-500 font-normal">
                  (유효하지 않음: {keywords.filter(k => keywordValidation[k] === 'invalid').length}개)
                </span>
              )}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={resetToDefault}
                disabled={validationState.isValidating}
                className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
              >
                기본값으로 초기화
              </button>
              <button
                onClick={saveConfig}
                disabled={isSaving || validationState.isValidating}
                className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
              >
                {validationState.isValidating
                  ? `검증 중... (${validationState.progress}/${validationState.total})`
                  : isSaving
                    ? '저장 중...'
                    : '설정 저장'}
              </button>
            </div>
          </div>

          {/* Validation Progress Bar */}
          {validationState.isValidating && (
            <div className="mb-4 space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(validationState.progress / validationState.total) * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 text-center">
                검증 중: {validationState.currentKeyword}
              </p>
            </div>
          )}

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addKeyword()}
              placeholder="새 키워드 추가"
              disabled={validationState.isValidating}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
            />
            <button
              onClick={addKeyword}
              disabled={validationState.isValidating}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
            >
              추가
            </button>
          </div>

          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {keywords.map((keyword) => {
              const status = keywordValidation[keyword] || 'pending';
              const bgColor = status === 'invalid'
                ? 'bg-red-100 text-red-700 border border-red-300'
                : status === 'pending'
                  ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                  : 'bg-gray-100 text-gray-700';

              return (
                <span
                  key={keyword}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${bgColor}`}
                >
                  {status === 'invalid' && <span className="text-red-500">⚠</span>}
                  {status === 'pending' && <span className="text-yellow-500">?</span>}
                  {keyword}
                  <button
                    onClick={() => removeKeyword(keyword)}
                    disabled={validationState.isValidating}
                    className="text-gray-500 hover:text-red-500 disabled:text-gray-300"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>

          {/* 유효성 상태 안내 */}
          <div className="mt-4 text-xs text-gray-500">
            <p>• 저장 시 새 키워드의 플레이스 영역 유효성을 검사합니다</p>
            <p>• <span className="text-red-500">⚠ 빨간색</span>: 플레이스 영역 없음 (제거 필요)</p>
            <p>• <span className="text-yellow-500">?</span>: 아직 검증되지 않음 (저장 시 검증)</p>
          </div>
        </div>
      )}

      {/* Statistics Summary */}
      <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
        <div className="bg-white rounded-lg shadow p-3 text-center">
          <div className="text-2xl font-bold text-green-600">{latestData ? foundCount : '-'}</div>
          <div className="text-xs text-gray-600">노출</div>
        </div>
        <div className="bg-white rounded-lg shadow p-3 text-center">
          <div className="text-2xl font-bold text-red-600">{latestData ? notFoundCount : '-'}</div>
          <div className="text-xs text-gray-600">미노출</div>
        </div>
        <div className="bg-white rounded-lg shadow p-3 text-center">
          <div className="text-2xl font-bold text-blue-600">{latestData ? firstPageCount : '-'}</div>
          <div className="text-xs text-gray-600">1페이지</div>
        </div>
        <div className="bg-white rounded-lg shadow p-3 text-center">
          <div className="text-2xl font-bold text-orange-600">
            {latestData ? (avgPosition ? avgPosition.toFixed(1) : '-') : '-'}
          </div>
          <div className="text-xs text-gray-600">평균순위</div>
        </div>
        <div className="bg-white rounded-lg shadow p-3 text-center">
          <div className="text-2xl font-bold text-emerald-600">
            {latestData && latestValidResults.length > 0
              ? `${Math.round((firstPageCount / latestValidResults.length) * 100)}%`
              : '-'}
          </div>
          <div className="text-xs text-gray-600">1P 비율</div>
        </div>
        <div className="bg-white rounded-lg shadow p-3 text-center">
          <div className="text-2xl font-bold text-purple-600">{latestData ? firstPageByAdCount : '-'}</div>
          <div className="text-xs text-gray-600">광고로1P</div>
        </div>
        <div className="bg-white rounded-lg shadow p-3 text-center">
          <div className="text-2xl font-bold text-amber-600">{latestData ? unnecessaryAdCount : '-'}</div>
          <div className="text-xs text-gray-600">불필요광고</div>
        </div>
      </div>

      {/* Keyword x Date Matrix Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-3 border-b bg-gray-50 flex justify-between items-center">
          <h3 className="font-bold text-gray-800">
            {formatMonthTitle()} 순위 현황 <span className="text-sm font-normal text-gray-500">(광고 제외)</span>
          </h3>
          {latestData && (
            <span className="text-sm text-gray-500">
              마지막 검색: {latestData.date}
            </span>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 min-w-[160px] z-10">
                  키워드
                </th>
                {monthDates.map(date => (
                  <th
                    key={date}
                    className={`px-1 py-3 text-center text-xs font-medium min-w-[40px] ${
                      date === new Date().toISOString().split('T')[0]
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-500'
                    }`}
                  >
                    {formatDay(date)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {validKeywords.length > 0 ? (
                validKeywords.map((keyword) => (
                  <tr key={keyword} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm font-medium text-gray-900 sticky left-0 bg-white z-10 whitespace-nowrap">
                      {keyword}
                    </td>
                    {monthDates.map(date => (
                      <td
                        key={date}
                        className={`px-1 py-2 text-center ${
                          date === new Date().toISOString().split('T')[0]
                            ? 'bg-blue-50'
                            : ''
                        }`}
                      >
                        {renderRankCell(keywordRankMap[keyword]?.[date])}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={monthDates.length + 1} className="px-4 py-12 text-center text-gray-400">
                    아직 순위 데이터가 없습니다
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invalid Keywords Section */}
      {invalidKeywords.length > 0 && (
        <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
          <button
            onClick={() => setShowInvalidKeywords(!showInvalidKeywords)}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-400">⚠️</span>
              <span className="font-medium text-gray-600">
                비유효 키워드 (플레이스 영역 없음)
              </span>
              <span className="text-sm text-gray-400">
                {invalidKeywords.length}개
              </span>
            </div>
            <span className="text-gray-400">
              {showInvalidKeywords ? '▲' : '▼'}
            </span>
          </button>
          {showInvalidKeywords && (
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {invalidKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-500">
                이 키워드들은 네이버 지도 검색 결과에 플레이스 영역이 표시되지 않아 순위 추적이 불가능합니다.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Inactive Keywords Section (삭제된 키워드 히스토리) */}
      {inactiveKeywords.length > 0 && (
        <div className="bg-amber-50 rounded-lg shadow overflow-hidden">
          <button
            onClick={() => setShowInactiveKeywords(!showInactiveKeywords)}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-amber-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-500">📁</span>
              <span className="font-medium text-amber-700">
                비활성 키워드 (삭제된 키워드)
              </span>
              <span className="text-sm text-amber-500">
                {inactiveKeywords.length}개
              </span>
            </div>
            <span className="text-amber-500">
              {showInactiveKeywords ? '▲' : '▼'}
            </span>
          </button>
          {showInactiveKeywords && (
            <div className="border-t border-amber-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-amber-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-amber-700 sticky left-0 bg-amber-100 min-w-[160px] z-10">
                        키워드
                      </th>
                      {monthDates.map(date => (
                        <th key={date} className="px-1 py-2 text-center text-xs font-medium text-amber-600 min-w-[40px]">
                          {formatDay(date)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    {inactiveKeywords.map((keyword) => (
                      <tr key={keyword} className="hover:bg-amber-50">
                        <td className="px-4 py-2 text-sm font-medium text-amber-800 sticky left-0 bg-amber-50 z-10 whitespace-nowrap">
                          {keyword}
                        </td>
                        {monthDates.map(date => (
                          <td key={date} className="px-1 py-2 text-center">
                            {renderRankCell(keywordRankMap[keyword]?.[date])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="px-4 py-3 text-xs text-amber-600 border-t border-amber-200">
                키워드 목록에서 삭제되었지만 과거 데이터가 남아있는 키워드입니다.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
