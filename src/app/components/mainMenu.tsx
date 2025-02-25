"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainMenu({ isOpen, onClose }: MainMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const menuItems = [
    ["HOME", ""],
    ["About Us", "aboutus"],
    ["Properties", "properties"],
    ["Sales", "#"],
    ["Blogs", "#"],
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
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? "0%" : "-100%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "fixed inset-0 z-50 bg-white text-[#ff6016] transition-transform duration-500 ease-in-out"
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
          className="hidden md:block px-6 py-2 border border-white/20 text-sm tracking-widest hover:bg-white hover:text-[#8B7355] transition-colors"
        >
          INQUIRE
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 h-[calc(100vh-160px)] font-extrabold">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.17, ease: "easeInOut" }}
            className="hidden lg:block relative max-w-[100%]"
          >
            <div className="w-[80%] h-full absolute top-0 left-0">
              <img
                src="/bluePrintShort.jpg"
                alt="blue print"
                className="object-cover w-full h-full "
              />
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-col justify-center">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item[0]}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <Link
                    href={`/${item[1].toLowerCase()}`}
                    className={cn(
                      "block font-serif text-4xl md:text-5xl lg:text-6xl transition-colors",
                      "text-[#ff6016]",
                      hovered && hovered !== item[0]
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    onMouseEnter={() => setHovered(item[0])}
                    onMouseLeave={() => setHovered(null)}
                    onClick={onClose}
                  >
                    {item[0]}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-center">
        <div className="space-x-8 text-sm tracking-widest">
          <Link
            href="/legal"
            className="hover:text-[#d3815b] transition-colors"
          >
            PROJECTS
          </Link>
          <Link href="/team" className="hover:text-[#d3815b] transition-colors">
            SITES
          </Link>
        </div>
        <a
          href="tel:212-935-5757"
          className="text-xl md:text-2xl hover:text-[#d3815b] transition-colors"
        >
          09123456789
        </a>
      </div>
    </motion.div>
  );
}
