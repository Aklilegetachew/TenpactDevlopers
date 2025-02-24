"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CoreValue {
  text: string;
}

interface CompanyProfileProps {
  vision: string;
  mission: string;
  coreValues: CoreValue[];
  logoSrc?: string;
}

export default function CompanyProfile({
  vision,
  mission,
  coreValues,
  logoSrc,
}: CompanyProfileProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
      <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
        <div className="relative">
          <img
            src={logoSrc || "/placeholder.svg"}
            alt="Company Logo"
            width={400}
            height={400}
            className="w-full max-w-[400px] mx-auto"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-center md:text-left">
              VISION
            </h2>
            <p className="text-muted-foreground leading-relaxed">{vision}</p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-center md:text-left">
              MISSION
            </h2>
            <p className="text-muted-foreground leading-relaxed">{mission}</p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-center md:text-left">
              CORE VALUES
            </h2>
            <ul className="space-y-4">
              {coreValues.map((value, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="text-muted-foreground leading-relaxed flex gap-2"
                >
                  <span className="text-primary">•</span>
                  {value.text}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
