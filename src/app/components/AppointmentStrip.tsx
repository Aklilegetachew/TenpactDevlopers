"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EstablishmentSectionProps {
  images?: string[];
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function EstablishmentSection({
  images = [
    "/tenpact/seatsTen.jpg",
    "/tenpact/floorTen.jpg",
    "/tenpact/enterInsideTen.jpg",
    "/tenpact/floor2Ten.jpg",
  ],
  title = "Schedule a Consultation",
  description = "Find the perfect commercial space or dream home with Tenpact. Our real estate experts are ready to guide you through every step, from selection to finalizing your purchase. Book an appointment today and take the first step toward securing your ideal property",
  buttonText = "Book an Appointment",
  onButtonClick = () => {},
}: EstablishmentSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] md:h-[500px] overflow-hidden"
    >
      {/* Background Slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative h-full px-4 mx-auto flex items-center">
        <div
          className={cn(
            "relative max-w-lg p-8 bg-[#ff6016] text-white rounded-lg transition-all duration-1000 transform",
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="mb-8 leading-relaxed text-white">{description}</p>
          <Button
            variant="outline"
            onClick={onButtonClick}
            className="text-white bg-[#ff6016] hover:bg-[#ff6016]/10"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
