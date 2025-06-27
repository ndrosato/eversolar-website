"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Home, Factory, Hospital, School, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
}

const IndustriesSection: React.FC = () => {
  const industries: Industry[] = [
    {
      title: "Commercial Buildings",
      description: "Optimize energy efficiency and reduce operational costs for office buildings, retail spaces, and mixed-use developments.",
      icon: <Building2 className="w-10 h-10 text-white" />,
      image: "/images/commercial-buildings.jpg",
      link: "/commercial-om"
    },
    {
      title: "Residential",
      description: "Enhance home energy independence with premium solar maintenance solutions tailored for modern living.",
      icon: <Home className="w-10 h-10 text-white" />,
      image: "/images/residential.jpg",
      link: "/residential"
    },
    {
      title: "Industrial",
      description: "Maximize production uptime and sustainability with robust solar maintenance for manufacturing and processing facilities.",
      icon: <Factory className="w-10 h-10 text-white" />,
      image: "/images/industrial.jpg",
      link: "/commercial-om#industrial"
    },
    {
      title: "Solar Farms",
      description: "Enterprise-grade maintenance for utility-scale solar installations with advanced performance reporting.",
      icon: <Globe className="w-10 h-10 text-white" />,
      image: "/images/solar-farms.jpg",
      link: "/commercial-om#solar-farms"
    },
    {
      title: "Healthcare",
      description: "Ensure critical operations with reliable, clean energy solutions for hospitals and medical facilities.",
      icon: <Hospital className="w-10 h-10 text-white" />,
      image: "/images/healthcare.jpg",
      link: "/commercial-om#healthcare"
    },
    {
      title: "Education",
      description: "Power the future of learning with sustainable energy systems for schools and universities.",
      icon: <School className="w-10 h-10 text-white" />,
      image: "/images/education.jpg",
      link: "/commercial-om#education"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1C2C5B]/5 rounded-full blur-3xl -ml-48"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-3">
            <span className="text-[#1C2C5B] font-semibold text-sm">Specialized Expertise</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C2C5B] mb-6 font-display">
            Industries We Serve
          </h2>
          <p className="text-lg text-neutral-700">
            Discover how Eversolar delivers tailored solar maintenance solutions across diverse sectors, ensuring optimal performance and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 opacity-0 translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C5B]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="h-16 w-16 rounded-lg bg-[#58A342] flex items-center justify-center shadow-lg">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-700 mb-6">{industry.description}</p>
                <div className="flex justify-end">
                  <Link href={industry.link}>
                    <Button variant="ghost" className="text-[#1C2C5B] hover:bg-[#1C2C5B]/5 hover:text-[#1C2C5B] p-0 group">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-neutral-700 mb-6">
            Don't see your industry? We serve many more sectors with customized solutions.
          </p>
          <Link href="/industries">
            <Button className="bg-[#1C2C5B] hover:bg-[#1C2C5B]/90 text-white">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(IndustriesSection); 