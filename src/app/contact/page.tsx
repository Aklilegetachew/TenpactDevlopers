"use client";

import { ArrowDown, ArrowRight } from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useParallax } from "../../../hooks/useParallax";
import { VideoBackground } from "../components/video-background";
import { Header } from "../components/header";
import { futura } from "../fonts/fonts";
import { Footer } from "../components/footer";
import ContactForm from "../components/contactusForm";

export default function Contactus() {
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

  return (
    <>
      <section
        className={`${futura.variable} relative h-[100dvh] w-full overflow-hidden text-white`}
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
              className={`${futura.variable} font-extrabold font-serif text-[8vw] leading-none`}
            >
              Contact us
            </h1>
          </motion.div>

          <motion.div className="space-y-8 mb-8" style={{ y: subtitleY }}>
            <h2
              className={`${futura.variable} font-extrabold font-serif text-4xl md:text-5xl lg:text-6xl max-w-xl`}
            >
              Real State
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

      <section className="flex justify-center items-center py-12">
        <h2
          className={`${futura.variable}  font-serif text-4xl md:text-5xl lg:text-2xl max-w-xl`}
        >
          Book Appointment
        </h2>
      </section>
      <section id="conatctUs" className="min-h-screen py-12 mt-2">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
