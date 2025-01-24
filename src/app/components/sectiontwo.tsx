import { Header } from "./header";
import { ParallaxSection } from "./parallax-section";

export default function Residences() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 container mx-auto px-8">
        <h1
          className={` font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.2] text-[#8B7355] max-w-[90%] md:max-w-[80%] lg:max-w-[70%]`}
        >
          The shimmering tower offers a rarefied collection of breathtaking
          full-floor residences.
        </h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-8">
        <ParallaxSection
          imageUrl="/realstateBanks.webp"
          alt="Luxury interior with golden details"
        />
        <ParallaxSection
          imageUrl="/roundabout.jpg"
          alt="Classical architectural elements"
        />
      </div>

  
    </main>
  );
}
