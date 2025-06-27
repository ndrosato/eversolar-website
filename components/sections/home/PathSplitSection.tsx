import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Home } from 'lucide-react'

// Type definitions for better maintainability
interface PathOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  buttonText: string;
  color: string;
}

interface PathSplitSectionProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  paths?: PathOption[];
}

// Default paths if none provided
const DEFAULT_PATHS: PathOption[] = [
  {
    title: "Commercial Solutions",
    description: "Enterprise-grade maintenance for large-scale installations, solar farms, and commercial buildings. ISO-certified processes with performance reporting.",
    icon: <Building2 className="h-10 w-10" />,
    href: "/commercial-om",
    buttonText: "Explore Commercial Solutions",
    color: "#1C2C5B", // Navy Blue
  },
  {
    title: "Residential Services",
    description: "Premium maintenance solutions for homeowners who understand that clean panels mean maximum return on their solar investment.",
    icon: <Home className="h-10 w-10" />,
    href: "/residential",
    buttonText: "Explore Residential Services",
    color: "#58A342", // Green
  },
];

const PathSplitSection: React.FC<PathSplitSectionProps> = ({
  title = "Power in Clean Performance",
  subtitle = "At Eversolar, we deliver advanced solar panel maintenance services with our robotic technology and certified technicians. Our approach ensures maximum efficiency and longevity for your solar investment.",
  tagline = "Power in Clean Performance™",
  paths = DEFAULT_PATHS
}) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements for visual depth */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section introduction */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-display text-[#1C2C5B] mb-6">
            {title}
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            {subtitle}
          </p>
          <p className="text-neutral-600">{tagline}</p>
        </div>

        {/* Path cards for different user segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path, index) => (
            <PathCard key={index} path={path} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Extracted Path Card component for better organization and future reuse
const PathCard: React.FC<{ path: PathOption }> = ({ path }) => {
  return (
    <Card className={`border-2 border-[${path.color}] shadow-xl hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden group`}>
      <div className={`absolute inset-0 bg-[${path.color}]/5 group-hover:bg-[${path.color}]/10 transition-all duration-300`}></div>
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex justify-center mb-6">
          <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-[${path.color}] text-white`}>
            {path.icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1C2C5B] mb-3 text-center">{path.title}</h3>
        <p className="text-neutral-700 text-center mb-6 flex-grow">
          {path.description}
        </p>
        <div className="text-center mt-4">
          <Link href={path.href}>
            <Button size="lg" className={`bg-[${path.color}] hover:bg-[${path.color}]/90 text-white`}>
              {path.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

// Use memo for performance optimization
export default React.memo(PathSplitSection); 