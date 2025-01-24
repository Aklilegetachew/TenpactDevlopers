import Image from "next/image";
import { cn } from "../lib/utils";

interface SplitSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  imagePosition?: "right" | "left";
}

export function SplitSection({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  className,
  imagePosition = "right",
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
        className
      )}
    >
      <div
        className={cn(
          "space-y-6",
          imagePosition === "right" ? "lg:pr-8" : "lg:pl-8 lg:order-2"
        )}
      >
        <div className="space-y-4">
          {subtitle && (
            <h3 className=" text-lg font-light tracking-wide">
              {subtitle}
            </h3>
          )}
          <h2 className="font-serif  text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-extrabold">
            {title}
          </h2>
        </div>
        <p className=" text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "relative aspect-[4/3] lg:aspect-auto lg:h-[600px]",
          imagePosition === "right" ? "" : "lg:order-1"
        )}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}


// text-[#8B7355]
