"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ParallaxSectionProps {
  imageUrl: string;
  alt: string;
}

export function ParallaxSection({ imageUrl, alt }: ParallaxSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      imageRef.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
