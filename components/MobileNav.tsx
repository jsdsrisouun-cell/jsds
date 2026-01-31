'use client';
import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function MobileNav(){
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2 rounded-md border">
        <HiMenu />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md border bg-white dark:bg-black">
              <HiX />
            </button>
          </div>
          <nav className="h-full flex flex-col items-center justify-center gap-6">
            <Link href="/projects" onClick={() => setOpen(false)} className="text-xl font-medium">Projects</Link>
            <a href="#contact" onClick={() => setOpen(false)} className="text-xl font-medium">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
}