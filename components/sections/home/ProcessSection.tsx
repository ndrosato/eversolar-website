import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clipboard, BarChart3, CheckCircle, Search, Settings, FileCheck, Calendar } from 'lucide-react'

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "Initial Assessment",
      description: "We conduct a thorough evaluation of your solar system's current performance and maintenance needs.",
      icon: <Search className="h-6 w-6" />,
      color: "#1C2C5B"
    },
    {
      number: 2,
      title: "Custom Service Plan",
      description: "Based on your specific system, environment, and goals, we develop a tailored maintenance schedule.",
      icon: <Clipboard className="h-6 w-6" />,
      color: "#2563EB"
    },
    {
      number: 3,
      title: "Professional Maintenance",
      description: "Our certified technicians implement advanced robotic cleaning and optimization procedures.",
      icon: <Settings className="h-6 w-6" />,
      color: "#58A342"
    },
    {
      number: 4,
      title: "Performance Verification",
      description: "We measure and document pre/post-maintenance performance to validate efficiency improvements.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "#D97706"
    },
    {
      number: 5,
      title: "Detailed Reporting",
      description: "You receive comprehensive documentation of all work performed and resulting performance gains.",
      icon: <FileCheck className="h-6 w-6" />,
      color: "#9333EA"
    },
    {
      number: 6,
      title: "Ongoing Optimization",
      description: "We continue regular maintenance according to your schedule, adapting to seasonal requirements.",
      icon: <Calendar className="h-6 w-6" />,
      color: "#DC2626"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neutral-100 rounded-full blur-3xl -mr-20 -mb-20"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="inline-block bg-[#58A342]/10 rounded-full px-4 py-1.5 mb-3">
                <span className="text-[#58A342] font-semibold text-sm">Our Process</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1C2C5B] mb-6 font-display leading-tight">
                Transparent, Effective Service Delivery
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                Our streamlined process ensures consistent results and complete transparency. 
                From initial assessment to ongoing optimization, we maintain clear communication 
                every step of the way.
              </p>
              
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="/images/service-process.jpg"
                  alt="Eversolar service process in action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C5B]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-[#58A342]" />
                    <span className="font-semibold">ISO Certified Process</span>
                  </div>
                  <p className="text-sm mb-3">Every maintenance procedure follows our ISO 9001 certified quality management system</p>
                </div>
              </div>

              <Link href="/our-process">
                <Button className="bg-[#1C2C5B] hover:bg-[#1C2C5B]/90 text-white">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 p-6 group">
                  <div className="flex items-start space-x-5">
                    <div 
                      className={`flex items-center justify-center h-12 w-12 rounded-full text-white font-bold text-lg shrink-0`}
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <span className="text-xl font-bold text-[#1C2C5B] mr-2">{step.title}</span>
                        <div className={`text-[${step.color}]`}>
                          {step.icon}
                        </div>
                      </div>
                      <p className="text-neutral-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-[#1C2C5B]/5 rounded-xl border border-[#1C2C5B]/10">
              <div className="flex items-start space-x-4">
                <div className="bg-[#58A342] rounded-full p-2 text-white shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C2C5B] mb-2">Our Service Guarantee</h3>
                  <p className="text-neutral-700">
                    If we don't deliver measurable performance improvements after our first service, 
                    the maintenance is free. That's how confident we are in our process and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProcessSection); 