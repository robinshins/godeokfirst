'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Employee {
  id: string;
  name: string;
  email: string;
  is_active: boolean;
}

interface MatchedFile {
  file: File;
  fileName: string;
  employeeName: string;
  employeeEmail: string;
  employeeId: string;
  matched: boolean;
  sent: boolean;
  sending: boolean;
  error?: string;
}

export default function SalarySlipPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [matchedFiles, setMatchedFiles] = useState<MatchedFile[]>([]);
  const [isSendingAll, setIsSendingAll] = useState(false);

  // 직원 편집 모달
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeEmail, setNewEmployeeEmail] = useState('');
  const [saving, setSaving] = useState(false);

  // Supabase에서 직원 목록 로드
  const fetchEmployees = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('is_active', true)
      .order('name');

    if (error) {
      console.error('직원 목록 로드 실패:', error);
    } else {
      setEmployees(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmployees();
    }
  }, [isAuthenticated]);

  // 로그인 처리
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Medis2019') {
      setIsAuthenticated(true);
      setAuthError('');
      setPassword('');
    } else {
      setAuthError('비밀번호가 올바르지 않습니다.');
    }
  };

  // 파일명에서 이름 추출 (예: "2025년 8월 임금명세서(김유진).pdf" -> "김유진")
  const extractNameFromFileName = (fileName: string): string | null => {
    const match = fileName.match(/\(([^)]+)\)/);
    return match ? match[1] : null;
  };

  // 파일 업로드 처리
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newMatchedFiles: MatchedFile[] = [];

    Array.from(files).forEach((file) => {
      const extractedName = extractNameFromFileName(file.name);
      // contains 방식으로 매칭 (파일명에 직원 이름이 포함되어 있으면 매칭)
      // 한글 유니코드 정규화 (NFC) - macOS는 NFD를 사용하므로 NFC로 통일
      const normalizedFileName = file.name.normalize('NFC');
      const matchedEmployee = employees.find(emp => {
        const normalizedEmpName = emp.name.normalize('NFC');
        return normalizedFileName.includes(normalizedEmpName);
      });

      newMatchedFiles.push({
        file,
        fileName: file.name,
        employeeName: matchedEmployee?.name || extractedName || '매칭 실패',
        employeeEmail: matchedEmployee?.email || '',
        employeeId: matchedEmployee?.id || '',
        matched: !!matchedEmployee,
        sent: false,
        sending: false,
      });
    });

    setMatchedFiles(newMatchedFiles);
  };

  // 개별 이메일 전송
  const sendEmail = async (index: number) => {
    const item = matchedFiles[index];
    if (!item.matched || !item.employeeEmail) {
      alert('매칭된 직원 정보가 없습니다.');
      return;
    }

    setMatchedFiles(prev => prev.map((f, i) =>
      i === index ? { ...f, sending: true, error: undefined } : f
    ));

    try {
      const formData = new FormData();
      formData.append('file', item.file);
      formData.append('email', item.employeeEmail);
      formData.append('employeeName', item.employeeName);
      formData.append('fileName', item.fileName);

      const response = await fetch('/api/send-salary-email', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMatchedFiles(prev => prev.map((f, i) =>
          i === index ? { ...f, sent: true, sending: false } : f
        ));
      } else {
        setMatchedFiles(prev => prev.map((f, i) =>
          i === index ? { ...f, sending: false, error: result.error || '전송 실패' } : f
        ));
      }
    } catch {
      setMatchedFiles(prev => prev.map((f, i) =>
        i === index ? { ...f, sending: false, error: '네트워크 오류' } : f
      ));
    }
  };

  // 일괄 전송
  const sendAllEmails = async () => {
    const toSend = matchedFiles.filter(f => f.matched && !f.sent);
    if (toSend.length === 0) {
      alert('전송할 파일이 없습니다.');
      return;
    }

    if (!confirm(`${toSend.length}개의 급여명세서를 일괄 전송하시겠습니까?`)) {
      return;
    }

    setIsSendingAll(true);

    for (let i = 0; i < matchedFiles.length; i++) {
      if (matchedFiles[i].matched && !matchedFiles[i].sent) {
        await sendEmail(i);
        // 약간의 딜레이를 두어 서버 부하 방지
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    setIsSendingAll(false);
    alert('일괄 전송이 완료되었습니다.');
  };

  // 직원 추가
  const addEmployee = async () => {
    if (!newEmployeeName || !newEmployeeEmail) {
      alert('이름과 이메일을 모두 입력해주세요.');
      return;
    }

    setSaving(true);
    const { error } = await supabase
      .from('employees')
      .insert({ name: newEmployeeName, email: newEmployeeEmail });

    if (error) {
      alert('직원 추가 실패: ' + error.message);
    } else {
      await fetchEmployees();
      setNewEmployeeName('');
      setNewEmployeeEmail('');
      setShowEmployeeModal(false);
    }
    setSaving(false);
  };

  // 직원 수정
  const updateEmployee = async () => {
    if (!editingEmployee || !newEmployeeName || !newEmployeeEmail) {
      alert('이름과 이메일을 모두 입력해주세요.');
      return;
    }

    setSaving(true);
    const { error } = await supabase
      .from('employees')
      .update({
        name: newEmployeeName,
        email: newEmployeeEmail,
        updated_at: new Date().toISOString()
      })
      .eq('id', editingEmployee.id);

    if (error) {
      alert('직원 수정 실패: ' + error.message);
    } else {
      await fetchEmployees();
      setEditingEmployee(null);
      setNewEmployeeName('');
      setNewEmployeeEmail('');
      setShowEmployeeModal(false);
    }
    setSaving(false);
  };

  // 직원 삭제 (soft delete)
  const deleteEmployee = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    const { error } = await supabase
      .from('employees')
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      alert('직원 삭제 실패: ' + error.message);
    } else {
      await fetchEmployees();
    }
  };

  // 편집 모달 열기
  const openEditModal = (employee: Employee) => {
    setEditingEmployee(employee);
    setNewEmployeeName(employee.name);
    setNewEmployeeEmail(employee.email);
    setShowEmployeeModal(true);
  };

  // 추가 모달 열기
  const openAddModal = () => {
    setEditingEmployee(null);
    setNewEmployeeName('');
    setNewEmployeeEmail('');
    setShowEmployeeModal(true);
  };

  // 파일 목록 초기화
  const clearFiles = () => {
    setMatchedFiles([]);
    const input = document.getElementById('file-upload') as HTMLInputElement;
    if (input) input.value = '';
  };

  // 인증 화면
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">급여명세서 발송</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="비밀번호를 입력하세요"
                autoFocus
              />
              {authError && (
                <p className="mt-2 text-sm text-red-600">{authError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">📧 급여명세서 발송</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 직원 관리 섹션 */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">👥 직원 목록</h2>
            <button
              onClick={openAddModal}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              + 직원 추가
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8 text-gray-500">로딩 중...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">이메일</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">관리</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{emp.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{emp.email}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => openEditModal(emp)}
                          className="text-blue-600 hover:text-blue-800 text-sm mr-3"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => deleteEmployee(emp.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 파일 업로드 섹션 */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">📁 파일 업로드</h2>
          <p className="text-sm text-gray-600 mb-4">
            파일명에 직원 이름이 포함되어 있으면 자동 매칭됩니다. (예: <code className="bg-gray-100 px-2 py-1 rounded">2025년 8월 임금명세서(홍길동).pdf</code>)
          </p>

          <div className="flex gap-4 items-center">
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              multiple
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {matchedFiles.length > 0 && (
              <button
                onClick={clearFiles}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm whitespace-nowrap"
              >
                초기화
              </button>
            )}
          </div>
        </div>

        {/* 매칭 결과 및 전송 섹션 */}
        {matchedFiles.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">📋 전송 목록</h2>
              <button
                onClick={sendAllEmails}
                disabled={isSendingAll || matchedFiles.every(f => f.sent || !f.matched)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSendingAll ? '전송 중...' : '🚀 일괄 전송'}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">이메일</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">파일명</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">전송</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {matchedFiles.map((item, index) => (
                    <tr key={index} className={`hover:bg-gray-50 ${!item.matched ? 'bg-red-50' : item.sent ? 'bg-green-50' : ''}`}>
                      <td className="px-4 py-3">
                        {item.sent ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            ✅ 전송완료
                          </span>
                        ) : item.sending ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            ⏳ 전송중
                          </span>
                        ) : item.error ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800" title={item.error}>
                            ❌ 실패
                          </span>
                        ) : item.matched ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            ⏸️ 대기중
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            ⚠️ 매칭실패
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.employeeName}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.employeeEmail || '-'}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate" title={item.fileName}>
                        {item.fileName}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {item.matched && !item.sent && (
                          <button
                            onClick={() => sendEmail(index)}
                            disabled={item.sending || isSendingAll}
                            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {item.sending ? '전송중...' : '전송'}
                          </button>
                        )}
                        {item.sent && (
                          <span className="text-green-600 text-sm">완료</span>
                        )}
                        {!item.matched && (
                          <span className="text-red-600 text-sm">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 요약 정보 */}
            <div className="mt-4 flex gap-4 text-sm">
              <span className="text-gray-600">
                전체: <strong>{matchedFiles.length}</strong>개
              </span>
              <span className="text-green-600">
                매칭됨: <strong>{matchedFiles.filter(f => f.matched).length}</strong>개
              </span>
              <span className="text-red-600">
                매칭실패: <strong>{matchedFiles.filter(f => !f.matched).length}</strong>개
              </span>
              <span className="text-blue-600">
                전송완료: <strong>{matchedFiles.filter(f => f.sent).length}</strong>개
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 직원 추가/수정 모달 */}
      {showEmployeeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {editingEmployee ? '직원 수정' : '직원 추가'}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                <input
                  type="text"
                  value={newEmployeeName}
                  onChange={(e) => setNewEmployeeName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input
                  type="email"
                  value={newEmployeeEmail}
                  onChange={(e) => setNewEmployeeEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="이메일을 입력하세요"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowEmployeeModal(false)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                disabled={saving}
              >
                취소
              </button>
              <button
                onClick={editingEmployee ? updateEmployee : addEmployee}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={saving}
              >
                {saving ? '저장 중...' : editingEmployee ? '수정' : '추가'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
