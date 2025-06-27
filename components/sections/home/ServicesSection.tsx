"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "preventative",
    title: "Preventative Maintenance",
    description: "Proactive care to prevent issues before they arise and maximize system efficiency.",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    ),
    features: [
      "Comprehensive panel cleaning to remove performance-reducing debris",
      "Complete electrical inspection & thermal scanning",
      "Inverter maintenance & optimization",
      "Mounting hardware inspection & tightening",
      "Performance analysis & efficiency reporting"
    ],
    image: "/images/services/preventative-maintenance.jpg",
    cta: "Schedule Maintenance",
  },
  {
    id: "monitoring",
    title: "Performance Monitoring",
    description: "24/7 monitoring solutions that track your system's performance in real-time and alert you to issues.",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ),
    features: [
      "Real-time production monitoring & performance tracking",
      "Automated alerts for production anomalies",
      "Custom performance dashboard & reporting",
      "Weather-normalized production analysis",
      "Monthly performance insights & optimization recommendations"
    ],
    image: "/images/services/performance-monitoring.jpg",
    cta: "Learn About Monitoring",
  },
  {
    id: "repair",
    title: "Repair & Troubleshooting",
    description: "Expert diagnosis and repair services to quickly resolve issues and minimize downtime.",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
      </svg>
    ),
    features: [
      "Advanced diagnostic testing & fault identification",
      "Emergency repair services with 24-hour response time",
      "Inverter repair & replacement",
      "Panel replacement & system optimization",
      "Electrical issue resolution & safety improvements"
    ],
    image: "/images/services/repair-troubleshooting.jpg",
    cta: "Request Repair Service",
  },
  {
    id: "optimization",
    title: "System Optimization",
    description: "Performance enhancements to boost energy production and maximize your return on investment.",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    features: [
      "Comprehensive system performance analysis",
      "Panel efficiency optimization & micro-inverter tuning",
      "String reconfiguration for improved output",
      "Shading analysis & mitigation solutions",
      "Technology upgrade recommendations"
    ],
    image: "/images/services/system-optimization.jpg",
    cta: "Optimize Your System",
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("preventative");
  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Premium Solar Maintenance Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to advanced performance optimization, we provide comprehensive care for your solar investment.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-5 py-3 rounded-full font-medium transition-colors ${
                activeTab === service.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Service Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src={activeService.image}
              alt={activeService.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x400/e2e8f0/1e293b?text=${activeService.title}`;
              }}
            />
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-primary">{activeService.icon}</div>
              <h3 className="text-3xl font-bold">{activeService.title}</h3>
            </div>
            
            <p className="text-xl text-gray-700">{activeService.description}</p>
            
            <div className="space-y-3 mt-6">
              <h4 className="font-semibold text-lg">What's Included:</h4>
              <ul className="space-y-3">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6">
              <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300">
                {activeService.cta}
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Additional Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Custom Maintenance Programs</h3>
            <p className="text-gray-600 max-w-2xl">
              We create tailored maintenance programs for residential, commercial, and utility-scale solar installations. Contact us to discuss your specific needs.
            </p>
          </div>
          <Link href="/services" className="whitespace-nowrap px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-300">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 