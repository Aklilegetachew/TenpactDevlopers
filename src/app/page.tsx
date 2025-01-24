import React from "react";
import { Header } from "./components/header";
import { ParallaxSection } from "./components/parallax-section";
import { VideoBackground } from "./components/video-background";
import { ArrowDown, ArrowRight } from "lucide-react";
import localFont from "next/font/local";
import Residences from "./components/sectiontwo";
import { FeatureGrid } from "./components/feature-grid";
import { SplitSection } from "./components/split-section";
import { Footer } from "./components/footer";

const futura = localFont({
  src: "fonts/FuturaBold.otf",
  variable: "--font-futura",
  weight: "100 900",
});

export default function Home() {
  const features = [
    {
      title: "Contemporary Living",
      href: "/living",
      imageUrl: "/skyline.jpg",
      imageAlt: "Modern living space with Central Park view",
    },
    {
      title: "Heart of the City",
      href: "/location",
      imageUrl: "/CBE.jpg",
      imageAlt: "111W57 building in Manhattan skyline",
    },
    {
      title: "World Class Services",
      href: "/services",
      imageUrl: "/generic1.jpg",
      imageAlt: "Luxury indoor pool",
    },
  ];
  return (
    <>
      <section
        className={`${futura.variable} relative h-[100dvh] w-full overflow-hidden text-white`}
      >
        <VideoBackground />
        <Header />

        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          <div className="flex justify-center content-center mt-32 md:mt-40">
            <h1
              className={`${futura.variable} font-serif text-[8vw] leading-none`}
            >
              Tenpact
            </h1>
          </div>

          <div className="space-y-8 mb-8">
            <h2
              className={`${futura.variable} font-serif text-4xl md:text-5xl lg:text-6xl max-w-xl`}
            >
              Real State
              <br />
              Developers
            </h2>

            <button className="group flex items-center space-x-4 text-sm tracking-widest hover:opacity-80 transition-opacity">
              <span>WATCH THE FILM</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#residences"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
              aria-label="Scroll to residences section"
            >
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
      <section id="residences" className="min-h-screen bg-white">
        <div className="pt-32 pb-16 container mx-auto px-8">
          {/* text-[#8B7355] */}
          <h2
            className={`${futura.variable} font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.2]  max-w-[90%] md:max-w-[80%] lg:max-w-[70%]`}
          >
            The shimmering tower offers a rarefied collection of breathtaking
            full-floor residences.
          </h2>
        </div>
        {/* 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-8">
          <ParallaxSection
            imageUrl="/luxury-interior-1.jpg"
            alt="Luxury interior with golden details"
          />
          <ParallaxSection
            imageUrl="/luxury-interior-2.jpg"
            alt="Classical architectural elements"
          />
        </div> */}

        {/* <div className="h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
          <ParallaxSection
            imageUrl="/luxury-view-1.jpg"
            alt="Panoramic city view"
          />
          <ParallaxSection
            imageUrl="/luxury-interior-3.jpg"
            alt="Elegant interior design"
          />
          <ParallaxSection
            imageUrl="/luxury-detail-1.jpg"
            alt="Architectural detail"
          />
        </div> */}
      </section>
      <section className="container mx-auto px-8 py-24 bg-white">
        <FeatureGrid items={features} />
      </section>
      <section className="container mx-auto px-8 py-24">
        <SplitSection
          title="Services"
          subtitle="Tower living in a league of its own"
          description="Residents enjoy the most elevated level of luxury living in Manhattan, with 24-hour dedicated staff, private security, and a specialized concierge service. Daily complimentary breakfast is catered by Le Bilboquet in the private Club 111, which features multiple dining rooms, a chef's catering kitchen, meeting rooms, children's playroom and a library."
          imageUrl="/incomingBuilding.jpg"
          imageAlt="Club 111 luxury amenity space with glass walls and trees"
        />
      </section>
      <Footer />
    </>
  );
}
