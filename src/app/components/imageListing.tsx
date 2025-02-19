"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

interface Property {
  id: string
  image: string
  title: string
  propertyCount: number
  link: string
}

interface PropertyGridProps {
  properties: Property[]
  columns?: 2 | 3 | 4
}

function PropertyCard({ image, title, propertyCount, link }: Omit<Property, "id">) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Link href={link} className="group block">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="relative h-[300px] w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="mb-2 text-sm font-medium">{propertyCount} Properties</p>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function PropertyGrid({ properties, columns = 3 }: PropertyGridProps) {
  const gridColumns = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid grid-cols-1 gap-6 p-4 ${gridColumns[columns]}`}>
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  )
}

