"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Maximizing Solar Performance Through Expert Maintenance
            </h2>
            <p className="text-xl text-gray-700">
              Eversolar specializes in premium solar maintenance services that enhance system efficiency, extend equipment lifespan, and maximize your return on investment.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/services" className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300">
                Our Services
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-gray-50 transition-colors duration-300">
                Free Consultation
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">99.8%</p>
                <p className="text-sm text-gray-600">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30%</p>
                <p className="text-sm text-gray-600">Performance Boost</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600">Monitoring</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/solar-technician.jpg" 
                alt="Eversolar technician performing premium solar panel maintenance" 
                width={600} 
                height={450}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x450/e2e8f0/1e293b?text=Solar+Maintenance+Expert";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Our certified technicians use advanced diagnostics to optimize your solar system performance</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg max-w-[200px] z-10 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-800">Certified by Solar Energy International</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 