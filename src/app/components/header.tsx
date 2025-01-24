"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white text-black py-4" : "py-8"
      )}
    >
      <nav className="container mx-auto px-8 flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 mr-2" />
          ) : (
            <Menu className="w-6 h-6 mr-2" />
          )}
          <span className="text-sm tracking-widest">MENU</span>
        </button>

        <Link
          href="/"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 font-serif m-2 text-2xl opacity-0 transition-all duration-500",
            scrolled && "opacity-100"
          )}
        >
          <img src="/logo.png" alt="Tenpact" width={50} height={50} />
        </Link>

        <Link
          href="#"
          className={cn(
            "px-3 py-1md:px-6 md:py-2 border text-sm tracking-widest transition-colors",
            scrolled
              ? "border-black hover:bg-black hover:text-white"
              : "border-white/20 text-white hover:bg-white hover:text-black"
          )}
        >
          INQUIRE
        </Link>
      </nav>
    </header>
  );
}
