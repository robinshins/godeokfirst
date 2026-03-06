'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default function GNB() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
  const pathname = usePathname();

  useEffect(() => {
    // onAuthStateChange만 사용 (getUser 호출 제거로 egress 절약)
    // INITIAL_SESSION 이벤트가 현재 세션 상태를 제공
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsMenuOpen(false);
  };

  // Get current page path without language prefix
  const getCurrentPage = () => {
    const path = pathname.replace(/^\/(en|jp|cn|vi|th|ru|mn|uz)/, '') || '/';
    return path;
  };

  const languages = [
    { code: 'kr', name: 'Korean', flag: '/icons/flags-kr.svg', href: getCurrentPage() === '/' ? '/' : getCurrentPage() },
    { code: 'us', name: 'English', flag: '/icons/flags-us.svg', href: `/en${getCurrentPage()}` },
    { code: 'jp', name: 'Japanese', flag: '/icons/flags-jp.svg', href: `/jp${getCurrentPage()}` },
    { code: 'cn', name: 'Chinese', flag: '/icons/flags-cn.svg', href: `/cn${getCurrentPage()}` },
    { code: 'vi', name: 'Vietnamese', flag: '/icons/flags-vn.svg', href: `/vi${getCurrentPage()}` },
    { code: 'th', name: 'Thai', flag: '/icons/flags-th.svg', href: `/th${getCurrentPage()}` },
    { code: 'ru', name: 'Russian', flag: '/icons/flags-ru.svg', href: `/ru${getCurrentPage()}` },
    { code: 'mn', name: 'Mongolian', flag: '/icons/flags-mn.svg', href: `/mn${getCurrentPage()}` },
    { code: 'uz', name: 'Uzbek', flag: '/icons/flags-uz.svg', href: `/uz${getCurrentPage()}` }
  ];

  const menuItems = [
    { name: 'หน้าแรก', href: '/th' },
    { name: 'รากเทียม', href: '/th/implant' },
    { name: 'ฟอกสีฟัน · ลามิเนต', href: '/th/whitening' },
    { name: 'การถอนฟันคุด', href: '/th/wisdom-tooth' },
    { name: 'รักษาฟันผุ · รักษารากฟัน', href: '/th/cavity-treatment' },
    { name: 'รักษาโรคเหงือก · ขูดหินปูน', href: '/th/gum-care' }
  ];

  // Detect current language from pathname
  const getCurrentLanguage = () => {
    const lang = pathname.split('/')[1];
    const found = languages.find(l => l.code === lang);
    if (found) return found;
    if (lang === 'en') return languages[1];
    return languages[0]; // Default to Korean
  };

  const selectedLang = getCurrentLanguage();

  return (
    <header
      className="bg-white fixed top-0 left-0 right-0 shadow-sm"
      style={{
        height: '52px',
        minHeight: '52px',
        maxHeight: '52px',
        overflow: 'visible',
        zIndex: 9999
      }}
    >
      <div
        className="w-full max-w-[430px] mx-auto flex items-center justify-between px-4"
        style={{ height: '52px' }}
      >
        {/* Logo */}
        <Link href="/th" className="flex items-center" style={{ height: '32px' }}>
          <svg width="168" height="32" viewBox="0 0 168 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_4305)">
              <path d="M24 16C24 9.37234 18.6271 4 12 4C7.5641 4 3.69091 6.40734 1.61377 9.98645L5.2815 13.0158C5.67266 13.407 6.30709 13.407 6.69881 13.0158L13.445 7.44365C14.3921 6.49652 16.0109 7.16764 16.0109 8.50649V27.3125C20.6659 25.6621 24 21.2211 24 16.0006V16Z" fill="#398BFF"/>
              <path d="M7.40715 18.3193C6.62427 19.1021 5.35541 19.1021 4.57253 18.3193L0.0462841 14.9496C0.0163688 15.2956 0 15.6461 0 16C0 22.6271 5.37234 28 12 28C12.0011 28 12.0017 28 12.0028 28V14.8982L7.40715 18.3198V18.3193Z" fill="#398BFF"/>
              <path d="M13.4451 7.44319L6.69888 13.0153C6.30772 13.4065 5.67329 13.4065 5.28157 13.0153L1.61384 9.98655C0.75363 11.4688 0.202172 13.1525 0.0463867 14.9497L4.5732 18.3199C5.35608 19.1028 6.62494 19.1028 7.40782 18.3199L12.0035 14.8983V28.0001C13.4095 28.0001 14.7585 27.7568 16.0121 27.3126V8.50603C16.0121 7.16661 14.3933 6.49605 13.4462 7.44319H13.4451Z" fill="white"/>
              {/* Text paths omitted for brevity as they are medical dental text in logo */}
            </g>
          </svg>
        </Link>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 relative">
          {/* Language Toggle */}
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="bg-white border border-gray-200 rounded-md flex items-center gap-1"
            style={{ height: '28px', padding: '4px 8px' }}
          >
            <div className="relative w-[16px] h-[12px]">
              <Image
                src={selectedLang.flag}
                alt={selectedLang.name}
                fill
                className="object-contain"
              />
            </div>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Language Dropdown */}
          {isLangOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/20"
                style={{ zIndex: 9998 }}
                onClick={() => setIsLangOpen(false)}
              />

              {/* Dropdown Menu */}
              <div
                className="absolute bg-white border border-[#f3f6fb] rounded-[20px] flex flex-col shadow-lg overflow-y-auto max-h-[400px]"
                style={{ zIndex: 9999, padding: '24px 20px', width: '343px', gap: '20px', top: '40px', right: '0' }}
              >
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={lang.href}
                    onClick={() => setIsLangOpen(false)}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-[36px] h-[26px] shrink-0">
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium leading-[1.5] text-[#292a2f] text-[20px] tracking-[-0.4px] whitespace-nowrap">
                        {lang.name}
                      </p>
                    </div>
                    {selectedLang.code === lang.code && (
                      <div className="w-6 h-6 shrink-0 ml-4">
                        <Image
                          src="/icons/check-blue.svg"
                          alt="Selected"
                          width={24}
                          height={24}
                        />
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center gap-1"
            style={{ width: '24px', height: '24px' }}
          >
            <div style={{ width: '100%', height: '2px', backgroundColor: '#111827', borderRadius: '9999px' }} />
            <div style={{ width: '100%', height: '2px', backgroundColor: '#111827', borderRadius: '9999px' }} />
            <div style={{ width: '100%', height: '2px', backgroundColor: '#111827', borderRadius: '9999px' }} />
          </button>
        </div>
      </div>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20"
            style={{ zIndex: 9997, top: '52px' }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className="fixed left-0 right-0 bg-white shadow-lg"
            style={{
              zIndex: 9998,
              top: '52px',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              boxShadow: '0px 24px 50px -12px rgba(45, 54, 67, 0.12)'
            }}
          >
            <div className="max-w-[430px] mx-auto">
              {/* Close Button */}
              <div className="flex justify-end px-4 py-2">
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-5 px-5 pb-[30px]">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-['Pretendard_JP'] font-medium leading-[1.5] text-[20px] text-black tracking-[-0.4px]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Auth Button */}
              <div className="px-5 pb-3 border-b border-[#e9ebf1]">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="text-left font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]"
                  >
                    ออกจากระบบ
                  </button>
                ) : (
                  <Link href="/th/login" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                      เข้าสู่ระบบ
                    </span>
                  </Link>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 px-5 pb-[30px] pt-4">
                <Link href="/th/consultation" className="w-full">
                  <button className="w-full bg-[#006aff] text-white font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] rounded-[18px] h-16 flex items-center justify-center">
                    จองปรึกษา AI
                  </button>
                </Link>
                <a href="tel:0507-1315-7475" className="w-full">
                  <button className="w-full bg-white border border-[#e9ebf1] text-[#006aff] font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] rounded-[18px] h-16 flex items-center justify-center">
                    ติดต่อสอบถามทางโทรศัพท์
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
