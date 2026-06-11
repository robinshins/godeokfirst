import Link from 'next/link';

/**
 * 본문과 시각적으로 분리된 "감수 의료기관 안내" 블록.
 * 의료법 상 의료기관 기본정보(자격·학위·주소·진료시간·진료과목)는 표기 가능.
 * - 단정/최상급 표현 없음
 * - 효과 보장 표현 없음
 * - 정확한 자격·기관명·주소만 사실 기반 표기
 */
export default function ClinicProfile() {
  return (
    <aside
      className="mt-10 border-t-2 border-gray-200 pt-8"
      aria-label="작성 의료기관·의료인 안내"
    >
      <p className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
        본 콘텐츠를 작성한 의료기관·의료인 안내
      </p>

      <section className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-gray-100">
          <h3 className="text-[17px] font-bold text-gray-900">
            고덕퍼스트치과의원
          </h3>
          <p className="text-[12px] text-[#4F5971] mt-1 leading-relaxed">
            경기 평택시 고덕로 250 에듀스카이 4층 401·402호
          </p>
        </div>

        {/* Doctor credentials — facts only */}
        <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/60">
          <p className="text-[10px] font-semibold text-[#008095] tracking-wider uppercase mb-2">
            대표원장 · 이동현
          </p>
          <ul className="space-y-1.5 text-[12.5px] text-gray-700 leading-relaxed">
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>보건복지부 인증 통합치의학과 전문의</span>
            </li>
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>조선대학교 치과병원 외래교수</span>
            </li>
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>치의학 석사</span>
            </li>
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>서울대학교 치의학대학원 고급치의학과정 수료</span>
            </li>
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>서울대학교 치의학대학원 임플란트 치의학 우수상 수료</span>
            </li>
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>오스템·포인트·덴티스 임플란트 연구자문위원</span>
            </li>
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>Pennsylvania Univ. 근관치료과정 수료</span>
            </li>
            <li className="flex gap-1.5">
              <span className="text-gray-400">•</span>
              <span>대한통합치의학 학회 정회원</span>
            </li>
          </ul>
        </div>

        {/* Facilities — equipment facts */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-[10px] font-semibold text-[#008095] tracking-wider uppercase mb-2">
            운영 장비 · 시설
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              '3D CT',
              '디지털 구강 스캐너',
              '디지털 가이드 수술 시스템',
              'OSSTEM 유닛 진료실',
              '별도 수술실',
              '무통마취 · 가글마취',
            ].map((f) => (
              <span
                key={f}
                className="inline-block rounded-full bg-gray-100 text-gray-700 text-[11px] px-2.5 py-1"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Treatments covered */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-[10px] font-semibold text-[#008095] tracking-wider uppercase mb-2">
            진료 분야
          </p>
          <p className="text-[12.5px] text-gray-700 leading-relaxed">
            임플란트 · 틀니 / 전체 임플란트 · 크라운 / 보철 · 충치 / 신경치료 ·
            사랑니 발치 · 잇몸 치료 / 스케일링 · 치아 미백 · 턱관절 치료
          </p>
        </div>

        {/* Hours + contact */}
        <div className="px-5 py-4">
          <p className="text-[10px] font-semibold text-[#008095] tracking-wider uppercase mb-2">
            진료시간 · 연락
          </p>
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12.5px] text-gray-700">
            <span className="text-gray-500">월 · 목</span>
            <span>10:00 – 21:00 (야간진료)</span>
            <span className="text-gray-500">화 · 수 · 금</span>
            <span>10:00 – 19:00</span>
            <span className="text-gray-500">토요일</span>
            <span>09:30 – 14:00 (점심 없음)</span>
            <span className="text-gray-500">점심시간</span>
            <span>13:00 – 14:00 (월~금)</span>
            <span className="text-gray-500">휴진</span>
            <span>일요일 · 공휴일</span>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/consultation"
              className="block w-full rounded-lg bg-[#008095] text-white text-[13px] font-semibold py-3 text-center hover:bg-[#006B7A] transition-colors"
            >
              AI 상담으로 예상 견적 먼저 확인
            </Link>
            <a
              href="https://naver.me/GSD1OqoS"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg border border-[#03C75A] text-[#03C75A] text-[13px] font-semibold py-3 text-center hover:bg-[#03C75A]/5"
            >
              네이버 예약 바로가기
            </a>
            <p className="text-[11px] text-gray-400 text-center pt-1">
              전화 문의 · 031-611-3222
            </p>
          </div>
        </div>

        {/* Statutory notice inside the card */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
          <p className="text-[10px] text-gray-500 leading-relaxed">
            본 안내는 의료기관 기본정보(의료법 제56조 이하) 고지 목적으로
            제공되며, 특정 치료의 효과를 보장하지 않습니다. 치료 방법 및
            기간은 환자 개별 상태에 따라 달라질 수 있으며, 부작용과 주의사항은
            내원 상담을 통해 상세히 안내받으시기 바랍니다.
          </p>
        </div>
      </section>
    </aside>
  );
}
