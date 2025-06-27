"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calendar, PhoneCall } from "lucide-react";

const CTASection: React.FC = () => {
  const features = [
    "Free performance assessment",
    "Customized maintenance plan",
    "Detailed ROI projection",
    "No-obligation consultation"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#58A342]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#1C2C5B]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="bg-gradient-to-br from-[#1C2C5B] to-[#1C2C5B]/90 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display leading-tight">
                Ready to Maximize Your <span className="text-[#58A342]">Solar Investment?</span>
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join hundreds of satisfied clients who have increased energy production, extended system lifespan, and maximized their ROI with our premium maintenance services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#58A342] flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-[#58A342] hover:bg-[#58A342]/90 text-white border-none">
                    Schedule Consultation
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact#call">
                  <Button size="lg" variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/10">
                    Call Us Now
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <Image 
                        src={`/images/avatar-${num}.jpg`} 
                        width={40} 
                        height={40} 
                        alt="Happy customer"
                        className="object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <p className="text-white text-sm">
                  <span className="font-bold">500+ happy clients</span> in the last year alone
                </p>
              </div>
            </div>
            
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/cta-maintenance-team.jpg"
                alt="Professional solar maintenance team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C2C5B] via-transparent to-transparent lg:bg-none"></div>
              
              {/* Floating testimonial card */}
              <div className="absolute bottom-8 right-8 max-w-xs bg-white rounded-lg shadow-xl p-6 hidden lg:block">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 mb-3 text-sm italic">
                  "The Eversolar team increased our production by 23% within days of service. Their maintenance program has paid for itself many times over."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden mr-3">
                    <Image 
                      src="/images/testimonial-avatar.jpg" 
                      width={40} 
                      height={40} 
                      alt="Client testimonial"
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C2C5B] text-sm">Michael Thompson</p>
                    <p className="text-xs text-neutral-600">Facility Manager, Nexus Office Complex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-700 mb-6">
            Need more information before deciding? Explore our detailed resources:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services">
              <Button variant="outline" className="border-[#1C2C5B] text-[#1C2C5B]">
                Our Services
              </Button>
            </Link>
            <Link href="/why-clean">
              <Button variant="outline" className="border-[#1C2C5B] text-[#1C2C5B]">
                Benefits of Cleaning
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" className="border-[#1C2C5B] text-[#1C2C5B]">
                Case Studies
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="border-[#1C2C5B] text-[#1C2C5B]">
                FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CTASection); 