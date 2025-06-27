"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const trustFactors = [
  {
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: "Industry-Certified Technicians",
    description: "Our team holds NABCEP, SEI, and UL certifications, ensuring your solar systems are maintained by qualified professionals.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    title: "Cutting-Edge Technology",
    description: "We employ advanced diagnostic tools and monitoring systems to detect and resolve issues before they impact performance.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "15+ Years Experience",
    description: "With over a decade of specialized solar maintenance expertise, we've serviced thousands of systems across residential and commercial sectors.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Performance Guarantee",
    description: "We back our maintenance services with a performance guarantee, ensuring your system operates at optimal efficiency.",
  },
];

const partners = [
  { name: "SolarEdge", logo: "/images/partners/solaredge.png" },
  { name: "Enphase", logo: "/images/partners/enphase.png" },
  { name: "SMA", logo: "/images/partners/sma.png" },
  { name: "LG Solar", logo: "/images/partners/lg.png" },
  { name: "Sunpower", logo: "/images/partners/sunpower.png" },
  { name: "Tesla", logo: "/images/partners/tesla.png" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Trust Eversolar?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With unmatched expertise, cutting-edge technology, and a commitment to excellence, we ensure your solar investment performs at its best, year after year.
          </p>
        </motion.div>

        {/* Trust Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{factor.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-semibold mb-2">Trusted By Industry Leaders</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We're certified partners with the leading solar manufacturers and technology providers
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - Partner of Eversolar`}
                  width={130}
                  height={60}
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/130x60/e2e8f0/1e293b?text=${partner.name}`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Certification Badge */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary max-w-md text-center"
          >
            <div className="mb-4 flex justify-center">
              <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">100% Satisfaction Guarantee</h3>
            <p className="text-gray-600 mb-4">
              If you're not completely satisfied with our service, we'll make it right or refund your maintenance fee.
            </p>
            <p className="text-sm text-gray-500 italic">
              "Eversolar has maintained our commercial solar array for 5 years with exceptional results."
            </p>
            <p className="text-sm font-medium mt-1">— John Davis, Facility Manager at Davis Business Center</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 