"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
  <Image
    src="/images/lpka3.png"
    alt="Logo LPKA Kelas 1 Tangerang"
    width={40}
    height={40}
    priority
  />
  <span className="hidden sm:block font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
    LPKA Kelas I Tangerang
  </span>
</Link>


        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">
            Beranda
          </Link>
          <Link href="/profil" className="hover:text-blue-600">
            Profil
          </Link>
          <Link href="/layananpublik" className="hover:text-blue-600">
            Informasi Publik
          </Link>
          <Link href="/kontak" className="hover:text-blue-600">
            Kontak
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-700" />
          <span className="w-6 h-0.5 bg-gray-700" />
          <span className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>
              Beranda
            </Link>
            <Link href="/profil" onClick={() => setOpen(false)}>
              Profil
            </Link>
            <Link href="/layananpublik" onClick={() => setOpen(false)}>
              Informasi Publik
            </Link>
            <Link href="/kontak" onClick={() => setOpen(false)}>
              Kontak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
