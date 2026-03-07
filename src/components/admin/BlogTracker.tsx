'use client';

import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  blogId: string; // 네이버 블로그 ID (예: gdfst111)
}

interface ExposedPost {
  url: string;
  title: string;
  area?: string; // VIEW, 웹, 블로그, 인플루언서 등
}

interface KeywordResult {
  keyword: string;
  blogResults: {
    blogId: string;
    isFirstPage: boolean;
    exposedPosts?: ExposedPost[];
  }[];
}

interface DailyResult {
  date: string;
  checkedAt: string;
  results: KeywordResult[];
}

interface BlogConfig {
  id: string;
  blogs: BlogPost[];
  keywords: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const DEFAULT_KEYWORDS = [
  '고덕동임플란트', '고덕동라미네이트', '고덕동전체임플란트', '고덕동보철치료', '고덕동충치',
  '고덕동신경치료', '고덕동잇몸치료', '고덕동매복사랑니', '고덕동사랑니발치', '고덕동매복사랑니발치', '고덕동치과',
  '평택임플란트', '평택라미네이트', '평택전체임플란트', '평택보철치료', '평택충치',
  '평택신경치료', '평택잇몸치료', '평택매복사랑니', '평택사랑니발치', '평택매복사랑니발치', '평택치과',
  '고덕국제신도시임플란트', '고덕국제신도시치과', '동삭동임플란트', '동삭동치과',
  '안중읍임플란트', '안중읍치과', '세교동임플란트', '세교동치과',
];

export default function BlogTracker() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [keywords, setKeywords] = useState<string[]>(DEFAULT_KEYWORDS);
  const [newBlogId, setNewBlogId] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [historyData, setHistoryData] = useState<DailyResult[]>([]);
  const [config, setConfig] = useState<BlogConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchProgress, setSearchProgress] = useState({ current: 0, total: 0 });
  const [showBlogManager, setShowBlogManager] = useState(false);
  const [showKeywordManager, setShowKeywordManager] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null); // null = 전체
  const [exposureFilter, setExposureFilter] = useState<'all' | 'exposed' | 'not-exposed'>('all');

  // 팝업 상태
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState<{
    keyword: string;
    blogId: string;
    date: string;
    exposedPosts: ExposedPost[];
  } | null>(null);

  // 월 선택
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  // 초기 데이터 로드
  useEffect(() => {
    loadConfig();
  }, []);

  // 월 변경 시 결과 로드
  useEffect(() => {
    if (config?.id) {
      loadResults();
    }
  }, [config?.id, currentYear, currentMonth]);

  const loadConfig = async () => {
    try {
      const res = await fetch('/api/blog-tracking/config');
      const data = await res.json();
      if (data.config) {
        setConfig(data.config);
        setBlogs(data.config.blogs || []);
        setKeywords(data.config.keywords || DEFAULT_KEYWORDS);
      }
    } catch (error) {
      console.error('설정 로드 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadResults = async () => {
    if (!config?.id) return;
    try {
      const res = await fetch(
        `/api/blog-tracking/results?configId=${config.id}&year=${currentYear}&month=${currentMonth + 1}`
      );
      const data = await res.json();
      setHistoryData(data.historyData || []);
    } catch (error) {
      console.error('결과 로드 오류:', error);
    }
  };

  const saveConfig = async () => {
    if (blogs.length === 0 || keywords.length === 0) {
      alert('블로그와 키워드를 입력해주세요.');
      return null;
    }

    setIsSaving(true);
    try {
      const res = await fetch('/api/blog-tracking/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blogs,
          keywords,
          configId: config?.id,
        }),
      });
      const data = await res.json();
      if (data.config) {
        setConfig(data.config);
        alert('설정이 저장되었습니다.');
        return data.config;
      }
    } catch (error) {
      console.error('설정 저장 오류:', error);
      alert('설정 저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
    return null;
  };

  const addBlog = () => {
    const trimmedId = newBlogId.trim();
    if (!trimmedId) {
      alert('블로그 ID를 입력해주세요.');
      return;
    }

    // 영문, 숫자, 언더스코어만 허용
    if (!/^[a-zA-Z0-9_]+$/.test(trimmedId)) {
      alert('블로그 ID는 영문, 숫자, 언더스코어만 가능합니다.');
      return;
    }

    // 중복 체크
    if (blogs.some(b => b.blogId === trimmedId)) {
      alert('이미 등록된 블로그 ID입니다.');
      return;
    }

    const newBlog: BlogPost = {
      id: Date.now().toString(),
      blogId: trimmedId,
    };

    setBlogs([...blogs, newBlog]);
    setNewBlogId('');
  };

  const removeBlog = (id: string) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  const addKeyword = () => {
    const trimmed = newKeyword.trim();
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords([...keywords, trimmed]);
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };


  // 수동 검색 실행 (병렬 처리)
  const handleSearch = async () => {
    if (blogs.length === 0) {
      alert('블로그를 먼저 등록해주세요.');
      return;
    }
    if (keywords.length === 0) {
      alert('키워드를 먼저 등록해주세요.');
      return;
    }

    // 설정 저장 먼저
    const savedConfig = await saveConfig();
    if (!savedConfig) return;

    setIsSearching(true);
    const total = keywords.length * blogs.length;
    setSearchProgress({ current: 0, total });

    const now = new Date();
    const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstDate.toISOString().split('T')[0];
    const checkedAt = now.toISOString();

    let progressCount = 0;

    // 키워드별 검색 함수
    const searchKeyword = async (keyword: string): Promise<KeywordResult> => {
      const blogResults: { blogId: string; isFirstPage: boolean; exposedPosts: ExposedPost[] }[] = [];

      for (const blog of blogs) {
        try {
          const response = await fetch('/api/blog-check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keyword, blogId: blog.blogId }),
          });
          const data = await response.json();
          blogResults.push({
            blogId: blog.id,
            isFirstPage: data.isFirstPage,
            exposedPosts: data.exposedPosts || [],
          });
        } catch {
          blogResults.push({
            blogId: blog.id,
            isFirstPage: false,
            exposedPosts: [],
          });
        }

        progressCount++;
        setSearchProgress({ current: progressCount, total });

        // Rate limiting per request
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      return { keyword, blogResults };
    };

    // 5개씩 병렬 처리
    const BATCH_SIZE = 5;
    const results: KeywordResult[] = [];

    for (let i = 0; i < keywords.length; i += BATCH_SIZE) {
      const batch = keywords.slice(i, i + BATCH_SIZE);
      const batchResults = await Promise.all(batch.map(searchKeyword));
      results.push(...batchResults);

      // 배치 간 딜레이 (네이버 차단 방지)
      if (i + BATCH_SIZE < keywords.length) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    // 결과 저장
    try {
      await fetch('/api/blog-tracking/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          configId: savedConfig.id,
          date: dateStr,
          checkedAt,
          results,
        }),
      });
      await loadResults();
      alert('검색 완료!');
    } catch (error) {
      console.error('결과 저장 오류:', error);
      alert('결과 저장에 실패했습니다.');
    }

    setIsSearching(false);
  };

  // 해당 월의 날짜들 생성
  const getMonthDates = () => {
    const dates: string[] = [];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      dates.push(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`);
    }
    return dates;
  };

  const monthDates = getMonthDates();

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 특정 날짜, 키워드, 블로그의 결과 가져오기
  const getResult = (date: string, keyword: string, blogId: string) => {
    const dayData = historyData.find(d => d.date === date);
    if (!dayData) return null;

    const keywordResult = dayData.results.find(r => r.keyword === keyword);
    if (!keywordResult) return null;

    return keywordResult.blogResults.find(br => br.blogId === blogId);
  };


  // 오늘 날짜 (KST)
  const getTodayStr = () => {
    const now = new Date();
    const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    return kst.toISOString().split('T')[0];
  };

  // 오늘 통계 계산
  const getTodayStats = () => {
    const todayStr = getTodayStr();
    const todayData = historyData.find(d => d.date === todayStr);

    if (!todayData || !selectedBlogId) {
      // 전체 블로그 통계
      let exposed = 0;
      let notExposed = 0;

      if (todayData) {
        for (const keywordResult of todayData.results) {
          const targetBlogs = selectedBlogId
            ? blogs.filter(b => b.id === selectedBlogId)
            : blogs;

          for (const blog of targetBlogs) {
            const blogResult = keywordResult.blogResults.find(br => br.blogId === blog.id);
            if (blogResult?.isFirstPage) {
              exposed++;
            } else if (blogResult) {
              notExposed++;
            }
          }
        }
      }

      return { exposed, notExposed, total: exposed + notExposed };
    }

    // 선택된 블로그 통계
    let exposed = 0;
    let notExposed = 0;

    for (const keywordResult of todayData.results) {
      const blogResult = keywordResult.blogResults.find(br => br.blogId === selectedBlogId);
      if (blogResult?.isFirstPage) {
        exposed++;
      } else if (blogResult) {
        notExposed++;
      }
    }

    return { exposed, notExposed, total: exposed + notExposed };
  };

  // 오늘 기준 노출 여부 확인 (필터용)
  const isExposedToday = (keyword: string, blogId: string): boolean | null => {
    const todayStr = getTodayStr();
    const result = getResult(todayStr, keyword, blogId);
    if (!result) return null;
    return result.isFirstPage;
  };

  // 팝업 열기
  const openPopup = (keyword: string, blogId: string, date: string, exposedPosts: ExposedPost[]) => {
    setPopupData({ keyword, blogId, date, exposedPosts });
    setShowPopup(true);
  };

  // 결과 렌더링 - 1페이지 노출 여부만 O/X로 표시
  const renderResult = (date: string, keyword: string, blogId: string) => {
    const result = getResult(date, keyword, blogId);
    if (!result) return <span className="text-gray-300">-</span>;

    // 1페이지 노출이면 O, 아니면 X
    if (result.isFirstPage) {
      const exposedPosts = result.exposedPosts || [];
      return (
        <button
          onClick={() => openPopup(keyword, blogId, date, exposedPosts)}
          className="text-blue-600 font-bold hover:bg-blue-100 rounded px-1 cursor-pointer"
          title={`${exposedPosts.length}개 글 노출`}
        >
          O
        </button>
      );
    }
    return <span className="text-gray-400 font-bold">X</span>;
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
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">네이버 블로그 노출 추적</h2>
        <p className="text-sm text-gray-500 mb-3">
          네이버 검색 결과에서 블로그 글의 노출 여부를 추적합니다.
        </p>
        {/* 오늘 통계 */}
        {(() => {
          const stats = getTodayStats();
          return stats.total > 0 ? (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-500 mb-2">📊 오늘 기준 ({getTodayStr()})</div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.exposed}</div>
                  <div className="text-xs text-gray-500">노출</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400">{stats.notExposed}</div>
                  <div className="text-xs text-gray-500">미노출</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-700">
                    {stats.total > 0 ? Math.round((stats.exposed / stats.total) * 100) : 0}%
                  </div>
                  <div className="text-xs text-gray-500">노출률</div>
                </div>
              </div>
            </div>
          ) : null;
        })()}

        <div className="flex flex-wrap gap-3 text-xs mb-4">
          <span className="flex items-center gap-1">
            <span className="text-blue-600 font-bold">O</span>
            1페이지 노출
          </span>
          <span className="flex items-center gap-1">
            <span className="text-gray-400 font-bold">X</span>
            미노출
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setShowBlogManager(!showBlogManager)}
            className="px-4 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50"
          >
            블로그 관리 ({blogs.length})
          </button>
          <button
            onClick={() => setShowKeywordManager(!showKeywordManager)}
            className="px-4 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50"
          >
            키워드 관리 ({keywords.length})
          </button>
          <button
            onClick={handleSearch}
            disabled={isSearching || blogs.length === 0}
            className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isSearching ? '검색 중...' : '전체 검색'}
          </button>
        </div>

        {/* 검색 진행 상태 */}
        {isSearching && (
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>검색 진행률: {searchProgress.current} / {searchProgress.total}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${searchProgress.total > 0 ? (searchProgress.current / searchProgress.total) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Blog Manager */}
      {showBlogManager && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-2">블로그 관리 ({blogs.length}개)</h3>
          <p className="text-xs text-gray-500 mb-4">
            네이버 블로그 ID만 입력 (예: gdfst111)
          </p>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newBlogId}
              onChange={(e) => setNewBlogId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addBlog()}
              placeholder="블로그 ID (예: gdfst111)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <button
              onClick={addBlog}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap"
            >
              추가
            </button>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg"
              >
                <a
                  href={`https://blog.naver.com/${blog.blogId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  @{blog.blogId}
                </a>
                <button
                  onClick={() => removeBlog(blog.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={saveConfig}
            disabled={isSaving}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {isSaving ? '저장 중...' : '설정 저장'}
          </button>
        </div>
      )}

      {/* Keyword Manager */}
      {showKeywordManager && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">키워드 관리 ({keywords.length}개)</h3>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addKeyword()}
              placeholder="키워드 입력"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <button
              onClick={addKeyword}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              추가
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {keyword}
                <button
                  onClick={() => removeKeyword(keyword)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          <button
            onClick={saveConfig}
            disabled={isSaving}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {isSaving ? '저장 중...' : '설정 저장'}
          </button>
        </div>
      )}

      {/* Results Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={goToPrevMonth}
              className="px-3 py-1 rounded hover:bg-gray-100"
            >
              ◀
            </button>
            <h3 className="font-bold">
              {currentYear}년 {currentMonth + 1}월
            </h3>
            <button
              onClick={goToNextMonth}
              className="px-3 py-1 rounded hover:bg-gray-100"
            >
              ▶
            </button>
          </div>

          {/* 블로그 선택 */}
          {blogs.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => setSelectedBlogId(null)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedBlogId === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                전체
              </button>
              {blogs.map((blog) => (
                <button
                  key={blog.id}
                  onClick={() => setSelectedBlogId(blog.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedBlogId === blog.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  @{blog.blogId}
                </button>
              ))}
            </div>
          )}

          {/* 오늘 기준 필터 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500">오늘 기준 필터:</span>
            <button
              onClick={() => setExposureFilter('all')}
              className={`px-2 py-0.5 rounded text-xs ${
                exposureFilter === 'all'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setExposureFilter('exposed')}
              className={`px-2 py-0.5 rounded text-xs ${
                exposureFilter === 'exposed'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              노출
            </button>
            <button
              onClick={() => setExposureFilter('not-exposed')}
              className={`px-2 py-0.5 rounded text-xs ${
                exposureFilter === 'not-exposed'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              미노출
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="sticky left-0 bg-gray-50 px-4 py-2 text-left font-medium text-gray-700 z-10">
                  키워드 / 블로그
                </th>
                {monthDates.map((date) => (
                  <th key={date} className="px-2 py-2 text-center font-medium text-gray-700 min-w-[40px]">
                    {parseInt(date.split('-')[2])}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {keywords.length > 0 && blogs.length > 0 ? (
                keywords.map((keyword) => {
                  // 선택된 블로그만 필터링
                  const filteredBlogs = selectedBlogId
                    ? blogs.filter(b => b.id === selectedBlogId)
                    : blogs;

                  // 노출 필터 적용
                  const exposureFilteredBlogs = filteredBlogs.filter((blog) => {
                    if (exposureFilter === 'all') return true;
                    const exposed = isExposedToday(keyword, blog.id);
                    if (exposed === null) return false; // 데이터 없으면 필터에서 제외
                    return exposureFilter === 'exposed' ? exposed : !exposed;
                  });

                  if (exposureFilteredBlogs.length === 0) return null;

                  return exposureFilteredBlogs.map((blog, blogIndex) => (
                    <tr key={`${keyword}-${blog.id}`}>
                      <td className="sticky left-0 bg-white px-4 py-2 z-10">
                        <div className="flex flex-col">
                          {blogIndex === 0 && (
                            <span className="font-medium text-gray-900">{keyword}</span>
                          )}
                          {!selectedBlogId && (
                            <span className="text-xs text-gray-500">
                              @{blog.blogId}
                            </span>
                          )}
                        </div>
                      </td>
                      {monthDates.map((date) => (
                        <td key={date} className="px-2 py-2 text-center">
                          {renderResult(date, keyword, blog.id)}
                        </td>
                      ))}
                    </tr>
                  ));
                })
              ) : (
                <tr>
                  <td colSpan={monthDates.length + 1} className="px-4 py-12 text-center text-gray-400">
                    {blogs.length === 0
                      ? '블로그를 추가해주세요'
                      : keywords.length === 0
                        ? '키워드를 추가해주세요'
                        : '아직 노출 데이터가 없습니다'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 노출된 글 팝업 */}
      {showPopup && popupData && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">노출된 글 목록</h3>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                <span className="font-medium">{popupData.keyword}</span>
                <span className="mx-2">•</span>
                <span>{popupData.date}</span>
              </div>
            </div>
            <div className="p-4 overflow-y-auto max-h-[60vh]">
              {popupData.exposedPosts.length > 0 ? (
                <div className="space-y-3">
                  {popupData.exposedPosts.map((post, index) => (
                    <a
                      key={index}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {post.area && (
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            post.area === 'VIEW' ? 'bg-green-100 text-green-700' :
                            post.area === '웹' ? 'bg-blue-100 text-blue-700' :
                            post.area === '인플루언서' ? 'bg-purple-100 text-purple-700' :
                            post.area === '블로그' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {post.area}
                          </span>
                        )}
                        <span className="font-medium text-gray-900">
                          {post.title || '제목 없음'}
                        </span>
                      </div>
                      <div className="text-xs text-blue-600 truncate">
                        {post.url}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">
                  노출된 글 정보가 없습니다.
                  <br />
                  <span className="text-xs">(새로 검색하면 정보가 저장됩니다)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
