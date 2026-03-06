'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestMetaPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTestEvent = async () => {
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      // Facebook Pixel 쿠키 가져오기
      const fbp = document.cookie.split('; ').find(row => row.startsWith('_fbp='))?.split('=')[1];
      const fbc = document.cookie.split('; ').find(row => row.startsWith('_fbc='))?.split('=')[1];

      console.log('📤 Meta Conversion Event 테스트 전송...');
      console.log('Facebook Pixel Cookies:', { fbp, fbc });

      const response = await fetch('/api/meta-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'TEST20295',
          phone: '01012345678',
          email: 'test@example.com',
          externalId: 'test-' + Date.now(),
          fbp: fbp,
          fbc: fbc,
          eventSourceUrl: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Meta Conversion Event 전송 성공:', data);
        setResult(data);
      } else {
        console.error('❌ Meta Conversion Event 전송 실패:', data);
        setError(data.message || 'Unknown error');
      }
    } catch (err) {
      console.error('❌ 예외 발생:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Meta Conversion API 테스트</h1>

        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="font-semibold text-blue-900 mb-2">테스트 정보</h2>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• 이름: <code className="bg-blue-100 px-2 py-0.5 rounded">TEST20295</code></li>
            <li>• 전화번호: <code className="bg-blue-100 px-2 py-0.5 rounded">01012345678</code></li>
            <li>• 이메일: <code className="bg-blue-100 px-2 py-0.5 rounded">test@example.com</code></li>
            <li>• 이벤트 타입: <code className="bg-blue-100 px-2 py-0.5 rounded">Lead</code></li>
          </ul>
        </div>

        <button
          onClick={handleTestEvent}
          disabled={loading}
          className={`w-full px-6 py-4 rounded-lg font-semibold text-white transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? '전송 중...' : '🚀 Meta Conversion Event 전송'}
        </button>

        {/* Success Result */}
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              전송 성공!
            </h3>
            <pre className="text-xs text-green-800 overflow-auto bg-green-100 p-3 rounded">
              {JSON.stringify(result, null, 2)}
            </pre>
            <p className="mt-3 text-sm text-green-700">
              ✅ Meta Events Manager에서 확인해보세요:
              <br />
              <a
                href="https://business.facebook.com/events_manager2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://business.facebook.com/events_manager2
              </a>
            </p>
          </div>
        )}

        {/* Error Result */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              전송 실패
            </h3>
            <pre className="text-xs text-red-800 overflow-auto bg-red-100 p-3 rounded">
              {error}
            </pre>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">확인 방법</h3>
          <ol className="text-sm text-gray-700 space-y-2">
            <li>1. 위 버튼을 클릭하여 테스트 이벤트 전송</li>
            <li>2. 브라우저 개발자 도구(F12) → Console 탭에서 로그 확인</li>
            <li>
              3. Meta Events Manager에서 실시간 이벤트 확인
              <ul className="ml-4 mt-1 space-y-1">
                <li>• Test Events 탭으로 이동</li>
                <li>• &apos;Lead&apos; 이벤트가 수신되었는지 확인</li>
                <li>• 이벤트 세부정보에서 TEST20295 확인</li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Back to Home */}
        <div className="mt-6">
          <Link
            href="/"
            className="block text-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
