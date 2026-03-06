export default function Banner() {
  return (
    <div className="bg-blue-50 h-[52px] flex items-center px-4">
      <div className="max-w-[430px] mx-auto w-full flex items-center justify-between">
        <p className="text-sm text-gray-900">
          이벤트 문구를 넣어주세요
        </p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
