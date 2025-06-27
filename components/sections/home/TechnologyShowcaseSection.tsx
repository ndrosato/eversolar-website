import React from 'react'
import Image from 'next/image'
import { BotIcon as Robot, Cpu, Smartphone, Droplets, ArrowRight, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const TechnologyShowcaseSection: React.FC = () => {
  const technologies = [
    {
      title: "Advanced Robotic Cleaners",
      description: "Specialized robots designed to clean solar panels with maximum efficiency while preventing scratches or damage.",
      icon: <Robot className="h-8 w-8 text-white" />,
      highlight: true
    },
    {
      title: "IoT Monitoring Systems",
      description: "24/7 performance monitoring with automatic alerts to detect issues before they impact output.",
      icon: <Cpu className="h-8 w-8 text-white" />
    },
    {
      title: "Mobile Management Platform",
      description: "Real-time access to performance data, maintenance schedules, and service history from any device.",
      icon: <Smartphone className="h-8 w-8 text-white" />
    },
    {
      title: "Water-Efficient Cleaning",
      description: "Proprietary low-water cleaning technology that conserves resources while delivering superior results.",
      icon: <Droplets className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Tech-inspired background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1C2C5B" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-3">
            <span className="text-[#1C2C5B] font-semibold text-sm">Proprietary Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2C5B] mb-6 font-display">
            Industry-Leading <span className="text-[#58A342]">Innovation</span>
          </h2>
          <p className="text-lg text-neutral-700">
            Our advanced technology delivers superior results by combining automation, precision cleaning, and comprehensive analytics to maximize solar performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Technology showcase video/image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/images/robot-tech-showcase.jpg"
                alt="Eversolar robotic cleaning technology in action"
                fill
                className="object-cover"
                priority
              />
              {/* Video play button overlay - could link to a modal video player */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                  <div className="h-16 w-16 rounded-full bg-[#1C2C5B] flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Technology certification badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-full p-4 shadow-xl">
              <div className="h-24 w-24 rounded-full bg-[#58A342] flex items-center justify-center flex-col text-white p-2">
                <Shield className="h-6 w-6 mb-1" />
                <span className="text-xs font-bold text-center">PATENTED TECHNOLOGY</span>
              </div>
            </div>
          </div>

          {/* Technology features */}
          <div className="space-y-10">
            <h3 className="text-3xl font-bold text-[#1C2C5B]">Next-Generation Solar Maintenance</h3>

            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-6 border opacity-0 translate-y-4 animate-fade-in-up ${tech.highlight ? 'border-[#58A342]' : 'border-neutral-200'} ${tech.highlight ? 'translate-x-4' : ''}`}
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex space-x-5">
                    <div className={`flex-shrink-0 h-16 w-16 rounded-lg flex items-center justify-center ${tech.highlight ? 'bg-[#58A342]' : 'bg-[#1C2C5B]'}`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1C2C5B] mb-2">{tech.title}</h4>
                      <p className="text-neutral-700">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/technology">
                <Button size="lg" className="bg-[#1C2C5B] hover:bg-[#1C2C5B]/90 text-white">
                  Explore Our Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TechnologyShowcaseSection); 