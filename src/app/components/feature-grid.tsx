import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

interface FeatureItem {
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  className?: string;
}

export function FeatureGrid({ items, className }: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-white",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group relative flex flex-col"
        >
          {/* Make the image container taller and responsive */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.imageAlt}
              className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
              style={{
                width: "100%", // Ensures the image fills the container
                height: "100%", // Ensures the image fills the container
              }}
            />
          </div>
          <div className="flex items-center mt-4 group-hover:text-black transition-colors">
            <span className="text-sm tracking-widest uppercase">
              {item.title}
            </span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
