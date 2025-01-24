import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F3] text-[#8B7355] py-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo Section */}
          <div className="md:col-span-3">
            <Link href="/" className="font-serif text-6xl leading-none block">
              <img
                src="/tenpactLog.png"
                alt="Tenpact"
                width={200}
                height={200}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Link
                href="/residences"
                className="block hover:text-black transition-colors"
              >
                Residences
              </Link>
              <Link
                href="/services"
                className="block hover:text-black transition-colors"
              >
                Services
              </Link>
              <Link
                href="/design"
                className="block hover:text-black transition-colors"
              >
                Design
              </Link>
              <Link
                href="/neighborhood"
                className="block hover:text-black transition-colors"
              >
                Neighborhood
              </Link>
              <Link
                href="/availability"
                className="block hover:text-black transition-colors"
              >
                Availability
              </Link>
              <Link
                href="/contact"
                className="block hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="/team"
                className="block hover:text-black transition-colors"
              >
                Team
              </Link>
              <Link
                href="/legal"
                className="block hover:text-black transition-colors"
              >
                Legal
              </Link>
              <Link
                href="https://instagram.com"
                className="block hover:text-black transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 space-y-4">
            <a
              href="tel:212-935-5757"
              className="block hover:text-black transition-colors"
            >
              212-935-5757
            </a>
            <a
              href="mailto:info@111w57.com"
              className="block hover:text-black transition-colors"
            >
              info@111w57.com
            </a>
          </div>
        </div>

        {/* Branding Section */}
        <div className="mt-20 space-y-8">
          <div className="space-y-4">
            <Image
              src="/sothebys-logo.svg"
              alt="Sotheby's International Realty"
              width={200}
              height={40}
              className="opacity-80"
            />
            <Image
              src="/field-team-logo.svg"
              alt="The Field Team + Global Portfolio Advisors"
              width={180}
              height={30}
              className="opacity-80"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#8B7355]/20 flex flex-col md:flex-row justify-between text-sm">
          <div className="space-x-8">
            <span>COPYRIGHT© 111WEST57THSTREET 2025</span>
            <Link
              href="/procedures"
              className="hover:text-black transition-colors"
            >
              STANDARD OPERATING PROCEDURES
            </Link>
            <Link
              href="/fair-housing"
              className="hover:text-black transition-colors"
            >
              FAIR HOUSING NOTICE
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <span>SITE BY OUTPOST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
