'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

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
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          MEDIS
        </Link>

        {/* Language & Auth & Menu */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex gap-2">
            <button className="w-10 h-8 rounded overflow-hidden border border-gray-600 hover:border-white transition-colors relative">
              <Image
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                fill
                className="object-cover"
              />
            </button>
            <button className="w-10 h-8 rounded overflow-hidden border border-gray-600 hover:border-white transition-colors relative">
              <Image
                src="https://flagcdn.com/w40/jp.png"
                alt="日本語"
                fill
                className="object-cover"
              />
            </button>
          </div>

          {/* Auth Button */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-white/70 hover:text-white transition-colors text-xs"
            >
              로그아웃
            </button>
          ) : (
            <Link
              href="/login"
              className="text-white/70 hover:text-white transition-colors text-xs"
            >
              로그인
            </Link>
          )}

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md mt-2 mx-6 rounded-lg p-6">
          <nav className="space-y-4">
            <Link href="/implant" className="block text-white hover:text-cyan-400 transition-colors">
              임플란트
            </Link>
            <Link href="/denture" className="block text-white hover:text-cyan-400 transition-colors">
              틀니 · 전체임플란트
            </Link>
            <Link href="/cavity-treatment" className="block text-white hover:text-cyan-400 transition-colors">
              충치 · 신경 치료
            </Link>
            <Link href="/wisdom-tooth" className="block text-white hover:text-cyan-400 transition-colors">
              사랑니 발치
            </Link>
            <Link href="/gum-care" className="block text-white hover:text-cyan-400 transition-colors">
              잇몸 치료 · 스케일링
            </Link>
            <Link href="/tmj" className="block text-white hover:text-cyan-400 transition-colors">
              턱관절 치료
            </Link>
            <Link href="/whitening" className="block text-white hover:text-cyan-400 transition-colors">
              치아 미백
            </Link>

            {/* Auth Links in Menu */}
            <div className="pt-4 mt-4 border-t border-white/20">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-white hover:text-cyan-400 transition-colors"
                >
                  로그아웃
                </button>
              ) : (
                <div className="space-y-4">
                  <Link href="/login" className="block text-white hover:text-cyan-400 transition-colors">
                    로그인
                  </Link>
                  <Link href="/signup" className="block text-white hover:text-cyan-400 transition-colors">
                    회원가입
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}