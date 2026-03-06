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
    { code: 'kr', name: '한국어', flag: '/icons/flags-kr.svg', href: getCurrentPage() === '/' ? '/' : getCurrentPage() },
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
    { name: '홈', href: '/' },
    { name: '충치 · 신경 치료', href: '/cavity-treatment' },
    { name: '임플란트', href: '/implant' },
    { name: '틀니 · 전체임플란트', href: '/denture' },
    { name: '미백 · 라미네이트', href: '/whitening' },
    { name: '사랑니 발치', href: '/wisdom-tooth' },
    { name: '잇몸 치료 · 스케일링', href: '/gum-care' },
  ];

  // Detect current language from pathname
  const getCurrentLanguage = () => {
    if (pathname.startsWith('/en')) return languages[1];
    if (pathname.startsWith('/jp')) return languages[2];
    if (pathname.startsWith('/cn')) return languages[3];
    if (pathname.startsWith('/vi')) return languages[4];
    if (pathname.startsWith('/th')) return languages[5];
    if (pathname.startsWith('/ru')) return languages[6];
    if (pathname.startsWith('/mn')) return languages[7];
    if (pathname.startsWith('/uz')) return languages[8];
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
        <Link href="/" className="flex items-center" style={{ height: '32px' }}>
          <Image
            src="/images/goduk_images/고덕퍼스트치과로고 1.svg"
            alt="고덕퍼스트치과"
            width={160}
            height={32}
            className="h-8 w-auto object-contain"
          />
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
                className="absolute bg-white border border-[#f3f6fb] rounded-[20px] flex flex-col shadow-lg"
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
                    로그아웃
                  </button>
                ) : (
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                      로그인
                    </span>
                  </Link>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 px-5 pb-[30px] pt-4">
                <Link href="/consultation" className="w-full">
                  <button className="w-full bg-[#008095] text-white font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] rounded-[18px] h-16 flex items-center justify-center">
                    AI 상담예약
                  </button>
                </Link>
                <a href="tel:031-611-3222" className="w-full">
                  <button className="w-full bg-white border border-[#e9ebf1] text-[#008095] font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] rounded-[18px] h-16 flex items-center justify-center">
                    전화로 문의하기
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
