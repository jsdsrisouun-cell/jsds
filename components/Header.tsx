'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import MobileNav from './MobileNav';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-bg)/80] dark:bg-[var(--color-bg)/80] backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-[var(--color-foreground)]">AI Dream Team</Link>
          <nav className="hidden md:flex gap-4">
            <Link href="/projects" className="text-sm text-[var(--color-muted)]">Projects</Link>
            <Link href="/#contact" className="text-sm text-[var(--color-muted)]">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="rounded-[var(--radius)] border border-[var(--color-border)] p-2 text-[var(--color-foreground)]"
            >
              {theme === 'dark' ? <HiSun /> : <HiMoon />}
            </button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}