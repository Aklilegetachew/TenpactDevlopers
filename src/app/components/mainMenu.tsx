"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainMenu({ isOpen, onClose }: MainMenuProps) {
  const [mounted, setMounted] = useState(false);
  const menuItems = [
    ["HOME", ""],
    ["About Us", "aboutus"],
    ["Properties", "properties"],
    ["Sales", "sales"],
    ["Blogs", "blogs"],
    ["Contact", "contact"],
  ];
  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black text-white transition-transform duration-500 ease-in-out",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-8">
        <button
          onClick={onClose}
          className="flex items-center text-sm tracking-widest hover:opacity-80 transition-opacity group"
        >
          <X className="w-6 h-6 mr-2 group-hover:rotate-90 transition-transform" />
          CLOSE
        </button>

        <Link href="/" className="font-serif text-2xl">
          TENPACT
        </Link>

        <Link
          href="/inquire"
          className=" hidden md:block px-6 py-2 border border-white/20 text-sm tracking-widest hover:bg-white hover:text-[#8B7355] transition-colors"
        >
          INQUIRE
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 h-[calc(100vh-160px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
          {/* Image - Hidden on mobile */}
          <div className="hidden lg:block relative max-w-[70%]">
            <div className="max-w-20">
              <img
                src="/bluePrintShort.jpg"
                alt="blue print"
                className="object-cover w-full h-full"
                style={{ width: "10vw" }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col justify-center">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item[0]}
                  href={`/${item[1].toLowerCase()}`}
                  className="block font-serif text-4xl md:text-5xl lg:text-6xl text-white/70 hover:text-white transition-colors"
                  onClick={onClose}
                >
                  {item[0]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-center">
        <div className="space-x-8 text-sm tracking-widest">
          <Link href="/legal" className="hover:text-white/70 transition-colors">
            PROJECTS
          </Link>
          <Link href="/team" className="hover:text-white/70 transition-colors">
            SITES
          </Link>
        </div>
        <a
          href="tel:212-935-5757"
          className="text-xl md:text-2xl hover:text-white/70 transition-colors"
        >
          09123456789
        </a>
      </div>
    </div>
  );
}
