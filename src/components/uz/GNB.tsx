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
    { name: 'Asosiy', href: '/uz' },
    { name: 'Implantatsiya', href: '/uz/implant' },
    { name: 'Oqartirish · Laminat', href: '/uz/whitening' },
    { name: 'Aql tishi olish', href: '/uz/wisdom-tooth' },
    { name: 'Karies · Kanal davolash', href: '/uz/cavity-treatment' },
    { name: 'Milk davolash · Tozalash', href: '/uz/gum-care' }
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
        <Link href="/uz" className="flex items-center" style={{ height: '32px' }}>
          <svg width="168" height="32" viewBox="0 0 168 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_4305)">
              <path d="M24 16C24 9.37234 18.6271 4 12 4C7.5641 4 3.69091 6.40734 1.61377 9.98645L5.2815 13.0158C5.67266 13.407 6.30709 13.407 6.69881 13.0158L13.445 7.44365C14.3921 6.49652 16.0109 7.16764 16.0109 8.50649V27.3125C20.6659 25.6621 24 21.2211 24 16.0006V16Z" fill="#398BFF"/>
              <path d="M7.40715 18.3193C6.62427 19.1021 5.35541 19.1021 4.57253 18.3193L0.0462841 14.9496C0.0163688 15.2956 0 15.6461 0 16C0 22.6271 5.37234 28 12 28C12.0011 28 12.0017 28 12.0028 28V14.8982L7.40715 18.3198V18.3193Z" fill="#398BFF"/>
              <path d="M13.4451 7.44319L6.69888 13.0153C6.30772 13.4065 5.67329 13.4065 5.28157 13.0153L1.61384 9.98655C0.75363 11.4688 0.202172 13.1525 0.0463867 14.9497L4.5732 18.3199C5.35608 19.1028 6.62494 19.1028 7.40782 18.3199L12.0035 14.8983V28.0001C13.4095 28.0001 14.7585 27.7568 16.0121 27.3126V8.50603C16.0121 7.16661 14.3933 6.49605 13.4462 7.44319H13.4451Z" fill="white"/>
              <path d="M147.982 7.19971C147.319 7.19971 146.782 7.73705 146.782 8.39971V23.5995C146.782 24.2622 147.319 24.7995 147.982 24.7995C148.644 24.7995 149.182 24.2622 149.182 23.5995V8.39971C149.182 7.73705 148.644 7.19971 147.982 7.19971Z" fill="black"/>
              <path d="M143.982 10.4002H140.782V9.20024C140.782 8.53759 140.245 8.00024 139.582 8.00024C138.92 8.00024 138.382 8.53759 138.382 9.20024V10.4002H135.182C134.52 10.4002 133.982 10.9376 133.982 11.6002C133.982 12.2629 134.52 12.8002 135.182 12.8002H138.382V13.7959C138.382 17.3056 136.848 20.2283 134.817 20.8667C134.32 21.023 133.982 21.4842 133.982 22.0051C133.982 22.8202 134.781 23.3965 135.554 23.1385C137.216 22.5837 138.641 21.1675 139.582 19.2428C140.523 21.1675 141.948 22.5831 143.61 23.1385C144.383 23.397 145.182 22.8202 145.182 22.0051C145.182 21.4842 144.844 21.023 144.347 20.8667C142.316 20.2288 140.781 17.3056 140.781 13.7959V12.8002H143.981C144.644 12.8002 145.181 12.2629 145.181 11.6002C145.181 10.9376 144.644 10.4002 143.981 10.4002H143.982Z" fill="black"/>
              <path d="M166.781 14.3997H165.581V8.39971C165.581 7.73705 165.044 7.19971 164.381 7.19971C163.719 7.19971 163.181 7.73705 163.181 8.39971V19.9995C161.164 20.3901 159.116 20.6475 157.057 20.7717V15.9999C157.057 15.4106 156.579 14.9331 155.99 14.9331C155.401 14.9331 154.923 15.4106 154.923 15.9999V20.8513C154.685 20.8546 154.447 20.8575 154.208 20.8575H152.248C151.659 20.8575 151.181 21.3818 151.181 22.0287C151.181 22.6755 151.659 23.1999 152.248 23.1999H154.208C157.227 23.1999 160.236 22.9126 163.181 22.3425V23.6001C163.181 24.2627 163.719 24.8001 164.381 24.8001C165.044 24.8001 165.581 24.2627 165.581 23.6001V16.8003H166.781C167.444 16.8003 167.981 16.2629 167.981 15.6003C167.981 14.9376 167.444 14.4003 166.781 14.4003V14.3997Z" fill="black"/>
              <path d="M153.057 11.1312H159.409C159.334 13.385 159.148 15.6315 158.853 17.8582C158.763 18.5417 159.206 19.162 159.837 19.1982C160.382 19.2298 160.857 18.8053 160.937 18.2222C161.284 15.7009 161.492 13.1541 161.558 10.5989C161.584 9.61397 160.86 8.80005 159.959 8.80005H153.057C152.467 8.80005 151.99 9.32159 151.99 9.96562C151.99 10.6091 152.467 11.1312 153.057 11.1312H153.057Z" fill="black"/>
              <path d="M112.782 7.19971C112.119 7.19971 111.582 7.73705 111.582 8.39971V23.5995C111.582 24.2622 112.119 24.7995 112.782 24.7995C113.445 24.7995 113.982 24.2622 113.982 23.5995V8.39971C113.982 7.73705 113.445 7.19971 112.782 7.19971Z" fill="#398BFF"/>
              <path d="M109.527 20.2531C106.922 20.7876 105.085 21.0586 102.436 21.0619V11.2H107.983C108.645 11.2 109.183 10.6627 109.183 10C109.183 9.3374 108.645 8.80005 107.983 8.80005H101.412C100.845 8.80005 100.382 9.32949 100.382 9.97804V21.6241C100.382 22.4922 101.099 23.1955 101.983 23.1955H102.436C105.085 23.1916 106.922 22.9207 109.527 22.3861L109.947 22.2998C110.433 22.1999 110.782 21.7726 110.782 21.2764C110.782 20.6149 110.175 20.1199 109.527 20.2531Z" fill="#398BFF"/>
              <path d="M96.3821 7.19971C95.7195 7.19971 95.1821 7.73705 95.1821 8.39971V23.5786C95.1821 24.2413 95.7195 24.7786 96.3821 24.7786C97.0448 24.7786 97.5821 24.2413 97.5821 23.5786V8.39971C97.5821 7.73705 97.0448 7.19971 96.3821 7.19971Z" fill="#398BFF"/>
              <path d="M93.1824 7.19971C92.5197 7.19971 91.9824 7.73705 91.9824 8.39971V14.3997H90.3822V10.2923C90.3822 9.46819 89.6659 8.7999 88.782 8.7999H83.982C83.0981 8.7999 82.3818 9.46819 82.3818 10.2923V21.707C82.3818 22.531 83.0981 23.1993 83.982 23.1993H88.782C89.6659 23.1993 90.3822 22.531 90.3822 21.707V16.7997H91.9824V23.5786C91.9824 24.2413 92.5197 24.7786 93.1824 24.7786C93.8451 24.7786 94.3824 24.2413 94.3824 23.5786V8.39971C94.3824 7.73705 93.8451 7.19971 93.1824 7.19971ZM87.9822 20.7993H84.7824V11.1564H87.9822V20.7999V20.7993Z" fill="#398BFF"/>
              <path d="M130.902 21.04H117.062C116.465 21.04 115.982 21.5235 115.982 22.1198V22.1204C115.982 22.7167 116.465 23.2002 117.062 23.2002H130.902C131.498 23.2002 131.982 22.7167 131.982 22.1204V22.1198C131.982 21.5235 131.498 21.04 130.902 21.04Z" fill="#398BFF"/>
              <path d="M117.588 18.0315C117.917 18.3752 118.409 18.4921 118.845 18.3233C121.034 17.4778 122.861 15.689 123.982 13.3641C125.103 15.689 126.93 17.4778 129.118 18.3233C129.555 18.4921 130.046 18.3758 130.375 18.0315C130.995 17.3841 130.761 16.2874 129.939 15.9701C127.478 15.0191 125.62 12.3938 125.249 9.18105C125.172 8.50993 124.635 8.00024 123.988 8.00024H123.977C123.336 8.00024 122.791 8.49752 122.716 9.16186C122.35 12.3837 120.49 15.0174 118.024 15.9701C117.202 16.2879 116.969 17.3846 117.588 18.0315Z" fill="#398BFF"/>
              <path d="M78.3821 7.19971C77.7194 7.19971 77.1821 7.73705 77.1821 8.39971V14.2665H76.5279V8.39971C76.5279 7.73705 75.9906 7.19971 75.3279 7.19971C74.6653 7.19971 74.1279 7.73705 74.1279 8.39971V20.2253C73.984 20.1903 73.8299 20.1858 73.673 20.218C71.1827 20.7288 69.3939 20.9991 66.9279 21.0251V11.1999H72.1275C72.7902 11.1999 73.3275 10.6625 73.3275 9.9999C73.3275 9.33724 72.7902 8.7999 72.1275 8.7999H65.5574C64.9902 8.7999 64.5273 9.32934 64.5273 9.97788V21.589C64.5273 22.4571 65.2436 23.1604 66.1275 23.1604H66.9273V23.1581C69.3934 23.1322 71.1821 22.8618 73.6724 22.351L74.0924 22.2646C74.1042 22.2624 74.1155 22.2584 74.1273 22.2556V23.5781C74.1273 24.2407 74.6647 24.7781 75.3273 24.7781C75.99 24.7781 76.5273 24.2407 76.5273 23.5781V16.6654H77.1815V23.5781C77.1815 24.2407 77.7189 24.7781 78.3815 24.7781C79.0442 24.7781 79.5815 24.2407 79.5815 23.5781V8.39971C79.5815 7.73705 79.0442 7.19971 78.3815 7.19971H78.3821Z" fill="black"/>
              <path d="M38.9701 11.1993H42V12.7995H39.4657C38.8031 12.7995 38.2657 13.3369 38.2657 13.9995C38.2657 14.6622 38.8031 15.1995 39.4657 15.1995H42V16.3329C42 16.9956 42.5374 17.5329 43.2 17.5329C43.8627 17.5329 44.4 16.9956 44.4 16.3329V8.39971C44.4 7.73705 43.8627 7.19971 43.2 7.19971C42.5374 7.19971 42 7.73705 42 8.39971V8.79933H39.1829C38.9097 8.32746 38.4023 7.99952 37.8 7.99952H36.9991H30.4002C29.7376 7.99952 29.2002 8.53687 29.2002 9.19952C29.2002 9.86217 29.7376 10.3995 30.4002 10.3995H36.4843C35.3865 12.8972 32.6823 14.7626 29.8397 15.1323C29.2431 15.2102 28.8 15.725 28.8 16.3267C28.8 17.0486 29.43 17.6046 30.1474 17.525C34.248 17.0701 37.6335 14.5651 38.9701 11.1988V11.1993Z" fill="black"/>
              <path d="M41.1816 17.5996H34.0183C32.0202 17.5996 30.3997 19.2043 30.3997 21.1844C30.3997 23.1639 32.0196 24.7691 34.0183 24.7691H41.1816C43.1797 24.7691 44.7997 23.1644 44.7997 21.1844C44.7997 19.2049 43.1797 17.5996 41.1816 17.5996ZM42.4002 21.1996C42.4002 21.8623 41.8629 22.3996 41.2002 22.3996H34.0002C33.3376 22.3996 32.8002 21.8623 32.8002 21.1996C32.8002 20.537 33.3376 19.9996 34.0002 19.9996H41.2002C41.8629 19.9996 42.4002 20.537 42.4002 21.1996Z" fill="black"/>
              <path d="M47.8369 16.7417C49.4986 16.2224 50.9238 14.8971 51.8647 13.0966C52.8056 14.8977 54.2314 16.2224 55.8926 16.7417C56.6641 16.9827 57.4617 16.446 57.4645 15.6857C57.4662 15.1986 57.1219 14.7617 56.6258 14.6149C54.8224 14.0821 53.4113 11.8633 53.12 9.07212C53.0568 8.46534 52.5161 8.00024 51.8647 8.00024C51.2133 8.00024 50.6726 8.46534 50.6094 9.07212C50.3181 11.8633 48.907 14.0821 47.1037 14.6149C46.6075 14.7617 46.2632 15.1986 46.2649 15.6857C46.2677 16.446 47.0653 16.9833 47.8369 16.7417Z" fill="black"/>
              <path d="M56.5281 12.8001H59.3283V16.4001C59.3283 17.0627 59.8657 17.6001 60.5283 17.6001C61.191 17.6001 61.7283 17.0627 61.7283 16.4001V8.39971C61.7283 7.73705 61.191 7.19971 60.5283 7.19971C59.8657 7.19971 59.3283 7.73705 59.3283 8.39971V10.3995H56.5281C55.8655 10.3995 55.3281 10.9369 55.3281 11.5995C55.3281 12.2622 55.8655 12.7995 56.5281 12.7995V12.8001Z" fill="black"/>
              <path d="M58.3952 17.5996H51.1331C49.1074 17.5996 47.4648 19.2043 47.4648 21.1844C47.4648 23.1639 49.1074 24.7691 51.1331 24.7691H58.3952C60.421 24.7691 62.0635 23.1644 62.0635 21.1844C62.0635 19.2049 60.421 17.5996 58.3952 17.5996ZM59.6635 21.1996C59.6635 21.8623 59.1262 22.3996 58.4635 22.3996H51.0648C50.4022 22.3996 49.8648 21.8623 49.8648 21.1996C49.8648 20.537 50.4022 19.9996 51.0648 19.9996H58.4635C59.1262 19.9996 59.6635 20.537 59.6635 21.1996Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_1_4305">
                <rect width="167.981" height="24" fill="white" transform="translate(0 4)"/>
              </clipPath>
            </defs>
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
                    Chiqish
                  </button>
                ) : (
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                      Kirish
                    </span>
                  </Link>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 px-5 pb-[30px] pt-4">
                <Link href="/uz/consultation" className="w-full">
                  <button className="w-full bg-[#006aff] text-white font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] rounded-[18px] h-16 flex items-center justify-center">
                    AI Konsultatsiya
                  </button>
                </Link>
                <a href="tel:0507-1315-7475" className="w-full">
                  <button className="w-full bg-white border border-[#e9ebf1] text-[#006aff] font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] rounded-[18px] h-16 flex items-center justify-center">
                    Telefon orqali bog'lanish
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
