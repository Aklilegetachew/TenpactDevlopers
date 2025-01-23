"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-8">
      <nav className="flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center text-white hover:opacity-80 transition-opacity"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 mr-2" />
          ) : (
            <Menu className="w-6 h-6 mr-2" />
          )}
          <span className="text-sm tracking-widest">MENU</span>
        </button>

        <Link
          href="/inquire"
          className="px-6 py-2 border border-white/20 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          INQUIRE
        </Link>
      </nav>
    </header>
  );
}
