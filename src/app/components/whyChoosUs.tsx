import {
  MapPin,
  DollarSign,
  CheckCircle,
  Shield,
  TrendingUp,
  Building2,
} from "lucide-react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  features?: Feature[];
}

export default function WhyChooseUs({
  title = "Why You Choose Us",
  features = [
    {
      icon: <MapPin className="w-8 h-8 mb-4" />,
      title: "Location",
      description:
        "Discover properties tailored to your lifestyle, offering convenient access to amenities, schools, and transportation hubs.",
    },
    {
      icon: <DollarSign className="w-8 h-8 mb-4" />,
      title: "Affordable",
      description:
        "Find your dream home without breaking the bank. Our diverse portfolio ensures quality and affordability with transparent pricing and flexible options.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 mb-4" />,
      title: "Quality",
      description:
        "Invest confidently in properties that prioritize safety, security, and durability. Rigorous inspections and reputable partnerships ensure lasting value.",
    },
    {
      icon: <Shield className="w-8 h-8 mb-4" />,
      title: "Safety & Security",
      description:
        "Your safety is our top priority. Explore neighborhoods with excellent security records and properties equipped with essential safety features.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 mb-4" />,
      title: "Investment",
      description:
        "Secure your future with properties poised for appreciation, aligning with your long-term goals and aspirations.",
    },
    {
      icon: <Building2 className="w-8 h-8 mb-4" />,
      title: "Amenity",
      description:
        "Experience unparalleled comfort and convenience with amenity-rich properties tailored to your desires.",
    },
  ],
}: FeatureGridProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#ff6016]">
          {title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex justify-center text-primary text-[#ff6016]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#ff6016]">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
