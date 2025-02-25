"use client";
import { Header } from "./components/header";
import { VideoBackground } from "./components/video-background";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FeatureGrid } from "./components/feature-grid";
import { SplitSection } from "./components/split-section";
import { Footer } from "./components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { futura } from "./fonts/fonts";
import { useParallax } from "../../hooks/useParallax";
import PropertyGrid from "./components/imageListing";
import WhyChooseUs from "./components/whyChoosUs";
import EstablishmentSection from "./components/AppointmentStrip";

export default function Home() {
  const scrollY = useParallax();
  const { scrollYProgress } = useScroll();

  const features = [
    {
      title: "Find Your Perfect Home",
      href: "/living",
      imageUrl: "/skyline.jpg",
      imageAlt: "Find Your Perfect Home",
    },
    {
      title: "Trusted by thousands of satisfied clients.",
      href: "/location",
      imageUrl: "/greenvilage.jpg",
      imageAlt: "Trusted by thousands of satisfied clients.",
    },
    {
      title: "World Class Services",
      href: "/services",
      imageUrl: "/tenpactbridg.jpg",
      imageAlt: "",
    },
  ];

  // Parallax values for different elements
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const properties = [
    {
      id: "1",
      image: "/tenpact/seatsTen.jpg",
      title: "Site 1",
      propertyCount: 3,
      link: "/contact",
    },
    {
      id: "2",
      image: "/tenpact/shopEnter.jpg",
      title: "Site 2",
      propertyCount: 6,
      link: "/contact",
    },
    {
      id: "3",
      image: "/tenpact/enterInsideTen.jpg",
      title: "Site 3",
      propertyCount: 4,
      link: "/contact",
    },
    {
      id: "4",
      image: "/tenpact/insideDoorTen.jpg",
      title: "Site 4",
      propertyCount: 4,
      link: "/contact",
    },
    {
      id: "5",
      image: "/tenpact/outsideTen.jpg",
      title: "Site 5",
      propertyCount: 17,
      link: "/contact",
    },
    {
      id: "6",
      image: "/tenpact/shopEnter.jpg",
      title: "Site 6",
      propertyCount: 17,
      link: "/contact",
    },
  ];

  return (
    <>
      <section
        className={` relative h-[100dvh] w-full overflow-hidden text-white`}
      >
        <VideoBackground />
        <Header />

        <motion.div
          className="relative z-10 h-full flex flex-col justify-between p-8"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            className="flex justify-center content-center mt-32 md:mt-40"
            style={{ y: titleY }}
          >
            <h1
              className={` font-extrabold font-serif text-[8vw] leading-none`}
            >
              Tenpact
            </h1>
          </motion.div>

          <motion.div className="space-y-8 mb-8" style={{ y: subtitleY }}>
            <h2
              className={` font-extrabold font-serif text-4xl md:text-5xl lg:text-6xl max-w-xl`}
            >
              Real Estate
              <br />
              Developers
            </h2>

            <button className="group flex items-center space-x-4 text-sm tracking-widest hover:opacity-80 transition-opacity">
              <span>Contact us</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <motion.a
              href="#residences"
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              aria-label="Scroll to residences section"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
      <section id="residences" className="bg-white">
        <div className="pt-32 pb-16 container mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={` font-thin text-red-800 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.2] max-w-[90%] md:max-w-[80%] lg:max-w-[70%]`}
          >
            Explore a wide range of properties, from cozy apartments to
            luxurious estates.
          </motion.h2>
        </div>
      </section>

      <section className="  py-24 bg-white">
        <EstablishmentSection />
      </section>

      <section className="container mx-auto px-8 py-24 bg-white">
        <div className="flex justify-center items-center py-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6  text-[#ff6016]  font-serif lg:text-5xl max-w-xl`}
          >
            Our Services
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <FeatureGrid items={features} />
        </motion.div>
      </section>

      <WhyChooseUs />
      <section className="flex justify-center items-center py-12">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6  text-[#ff6016]  font-serif lg:text-5xl max-w-xl`}
        >
          Our Sites
        </h2>
      </section>
      <PropertyGrid properties={properties} />
      <section className="container mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SplitSection
            title="Experience Tenpact in Person"
            subtitle="What We Offer"
            description="Explore our premium commercial and residential properties up close. Visit our locations to see available listings, meet our team, and find the perfect space for your needs. Let’s turn your vision into reality—schedule your visit today!"
            imageUrl="/tenpact/floorTen.jpg"
            imageAlt="Hed Office"
          />
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
