"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { MainMenu } from "./mainMenu";
import gsap from "gsap";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      const isPastHero = window.scrollY > window.innerHeight * 0.8;
      setScrolled(isScrolled);
      setPastHero(isPastHero);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!logoRef.current) return;

    if (scrolled && window.scrollY > 100) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "power2.out" }
      );

      gsap.to(logoRef.current, {
        scale: pastHero ? 1.1 : 1,
        duration: 0.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        paused: !pastHero,
      });

      const logo = logoRef.current;
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, { rotateY: 360, duration: 1, ease: "power2.out" });
      });

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, { rotateY: 0, duration: 1, ease: "power2.out" });
      });

      return () => {
        logo.removeEventListener("mouseenter", () => {});
        logo.removeEventListener("mouseleave", () => {});
      };
    }
  }, [scrolled]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-white text-black py-4" : "py-8"
        )}
      >
        <nav className="flex justify-between items-center p-8">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center hover:opacity-80 transition-opacity group"
          >
            <Menu className="w-6 h-6 mr-2 group-hover:rotate-180 transition-transform" />
            <span className="text-sm tracking-widest">MENU</span>
          </button>

          <Link
            ref={logoRef}
            href="/"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 font-serif m-2 text-2xl opacity-0 transition-all duration-500 ",
              scrolled && "opacity-100"
            )}
          >
            <img src="/logo.png" alt="Tenpact" width={70} height={70} />
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

      <MainMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
