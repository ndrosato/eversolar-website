import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Home, Factory, Sun } from 'lucide-react'

interface CustomerPath {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  color: string;
  secondaryText?: string;
}

const CustomerPathsSection: React.FC = () => {
  const customerPaths: CustomerPath[] = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Commercial Properties",
      description: "Comprehensive maintenance solutions for office buildings, retail complexes, and multi-tenant properties.",
      buttonText: "Commercial Solutions",
      href: "/commercial-om",
      color: "#1C2C5B", // Navy blue
      secondaryText: "For property & facility managers"
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential Systems",
      description: "Premium care for homeowners who want maximum returns from their rooftop solar investment.",
      buttonText: "Residential Services",
      href: "/residential",
      color: "#58A342", // Green
      secondaryText: "For homeowners"
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Industrial & Manufacturing",
      description: "Specialized maintenance for industrial facilities with large-scale energy production needs.",
      buttonText: "Industrial Solutions",
      href: "/commercial-om#industrial",
      color: "#2563EB", // Blue
      secondaryText: "For operations managers"
    },
    {
      icon: <Sun className="h-12 w-12" />,
      title: "Solar Farms",
      description: "Enterprise-grade maintenance for utility-scale solar installations with advanced performance reporting.",
      buttonText: "Enterprise Solutions",
      href: "/commercial-om#solar-farms",
      color: "#D97706", // Amber
      secondaryText: "For energy producers"
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1C2C5B]/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#58A342]/5 rounded-full blur-3xl -ml-48"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-[#58A342]/10 rounded-full px-4 py-1.5 mb-3">
            <span className="text-[#58A342] font-semibold text-sm">Tailored Solutions</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C2C5B] mb-6 font-display">
            Solar Maintenance for Your Specific Needs
          </h2>
          <p className="text-lg text-neutral-700">
            Select the path that matches your requirements for a customized maintenance solution with dedicated expertise and specialized equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {customerPaths.map((path, index) => (
            <Card key={index} className={`border-t-4 border-t-[${path.color}] shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group h-full`}>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-5">
                  <div className={`inline-flex p-3 rounded-lg bg-[${path.color}]/10 text-[${path.color}]`}>
                    {path.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#1C2C5B] mb-2">{path.title}</h3>
                
                {path.secondaryText && (
                  <div className="mb-3">
                    <span className={`text-sm font-medium px-2 py-1 rounded bg-[${path.color}]/10 text-[${path.color}]`}>
                      {path.secondaryText}
                    </span>
                  </div>
                )}
                
                <p className="text-neutral-700 mb-6 flex-grow">{path.description}</p>
                
                <div className="mt-auto">
                  <Link href={path.href}>
                    <Button 
                      className={`w-full bg-white text-[${path.color}] border border-[${path.color}]/20 hover:bg-[${path.color}] hover:text-white transition-all duration-300 group-hover:bg-[${path.color}] group-hover:text-white`} 
                      size="sm"
                    >
                      {path.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(CustomerPathsSection); 