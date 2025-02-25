"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, AreaChart, Camera, DollarSign } from "lucide-react";

interface Property {
  id: string;
  title: string;
  siteNumber: string;
  description: string;
  location: string;
  stories: string;
  area: string;
  features: string[];
  image: string;
}

const properties: Property[] = [
  {
    id: "royal-view",
    title: "SITE NAME A",
    siteNumber: "SITE 01",
    description:
      "This is a sample description for a commercial or residential property. It will be replaced with actual details about the site.From its innovative architectural elements to its functional layout, Site 1 epitomizes our dedication to creating vibrant and sustainable communities.",
    location: "Bole , Addis Ababa, Ethiopia",
    stories: "10 Story",
    area: "1,300m2",
    features: ["Affordable & Proximal", "Safe with Provision of CCTV Cameras"],
    image: "/tenpact/enterInsideTen.jpg",
  },
  {
    id: "kiru",
    title: "SITE NAME B",
    siteNumber: "SITE 02",
    description:
      "This is a sample description for a commercial or residential property. It will be replaced with actual details about the site.From its innovative architectural elements to its functional layout, Site 1 epitomizes our dedication to creating vibrant and sustainable communities.",

    location: "Addis District, Addis Ababa, Ethiopia",
    stories: "12 Story",
    area: "1,500m2",
    features: ["Premium Amenities", "24/7 Security"],
    image: "/tenpact/floor2Ten.jpg",
  },
  {
    id: "executive",
    title: "SITE NAME C",
    siteNumber: "SITE 03",
    description:
      "This is a sample description for a commercial or residential property. It will be replaced with actual details about the site.From its innovative architectural elements to its functional layout, Site 1 epitomizes our dedication to creating vibrant and sustainable communities.",

    location: "Executive District, Addis Ababa, Ethiopia",
    stories: "15 Story",
    area: "2,000m2",
    features: ["Luxury Finishes", "Smart Home Technology"],
    image: "/tenpact/HaleWayTen.jpg",
  },
  {
    id: "signature",
    title: "SITE NAME D ",
    siteNumber: "SITE 04",
    description:
      "This is a sample description for a commercial or residential property. It will be replaced with actual details about the site.From its innovative architectural elements to its functional layout, Site 1 epitomizes our dedication to creating vibrant and sustainable communities.",

    location: "Central District, Addis Ababa, Ethiopia",
    stories: "18 Story",
    area: "2,500m2",
    features: ["Iconic Design", "Premium Location"],
    image: "/tenpact/lowerFloorTen.jpg",
  },
  {
    id: "east-side",
    title: "SITE NAME E",
    siteNumber: "SITE 05",
    description:
      "This is a sample description for a commercial or residential property. It will be replaced with actual details about the site.From its innovative architectural elements to its functional layout, Site 1 epitomizes our dedication to creating vibrant and sustainable communities.",

    location: "East Side, Addis Ababa, Ethiopia",
    stories: "8 Story",
    area: "1,200m2",
    features: ["Community Focus", "Modern Amenities"],
    image: "/tenpact/tiresTen.jpg",
  },
  {
    id: "blen",
    title: "SITE NAME 6",
    siteNumber: "SITE 06",
    description:
      "This is a sample description for a commercial or residential property. It will be replaced with actual details about the site.From its innovative architectural elements to its functional layout, Site 1 epitomizes our dedication to creating vibrant and sustainable communities.",

    location: "Blen District, Addis Ababa, Ethiopia",
    stories: "14 Story",
    area: "1,800m2",
    features: ["Eco-friendly", "Modern Design"],
    image: "/tenpact/tiresTen.jpg",
  },
];

export default function PropertyTabs() {
  const [activeProperty, setActiveProperty] = useState(properties[0]);

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        {/* Tabs */}
        <div className="overflow-x-auto pb-4 mb-8">
          <div className="flex space-x-8 min-w-max">
            {properties.map((property) => (
              <button
                key={property.id}
                onClick={() => setActiveProperty(property)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  activeProperty.id === property.id
                    ? "text-[#ff6016]"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {property.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div
            className={cn(
              "transition-all duration-500 transform",
              "opacity-0 -translate-x-full",
              "data-[active=true]:opacity-100 data-[active=true]:translate-x-0"
            )}
            data-active="true"
          >
            <div className="space-y-6">
              <div className="text-gray-500">{activeProperty.siteNumber}</div>
              <h2 className="text-3xl font-bold text-gray-900">
                {activeProperty.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {activeProperty.description}
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-[#ff6016]" />
                  <div className="text-gray-600">{activeProperty.location}</div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 mt-1 text-[#ff6016]" />
                  <div className="text-gray-600">{activeProperty.stories}</div>
                </div>
                <div className="flex items-start gap-3">
                  <AreaChart className="w-5 h-5 mt-1 text-[#ff6016]" />
                  <div className="text-gray-600">{activeProperty.area}</div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                {activeProperty.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {index === 0 ? (
                      <DollarSign className="w-5 h-5 text-[#ff6016]" />
                    ) : (
                      <Camera className="w-5 h-5 text-[#ff6016]" />
                    )}
                    <div className="text-gray-600">{feature}</div>
                  </div>
                ))}
              </div>

              <Button className="bg-[#ff6016] hover:bg-[#ff6016]/90 text-white">
                Read More
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={activeProperty.image || "/placeholder.svg"}
              alt={activeProperty.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
