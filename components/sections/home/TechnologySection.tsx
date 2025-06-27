"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaChartLine, FaRobot, FaShieldAlt } from "react-icons/fa";

const technologies = [
  {
    icon: <FaSolarPanel className="w-12 h-12 text-primary" />,
    title: "Advanced Solar Panels",
    description: "State-of-the-art solar panels designed for maximum efficiency and durability.",
    cta: "Learn More",
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-primary" />,
    title: "Performance Analytics",
    description: "Real-time analytics and reporting to monitor and optimize solar performance.",
    cta: "Learn More",
  },
  {
    icon: <FaRobot className="w-12 h-12 text-primary" />,
    title: "Automated Maintenance",
    description: "Robotic systems for automated cleaning and maintenance of solar installations.",
    cta: "Learn More",
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-primary" />,
    title: "Security Solutions",
    description: "Advanced security measures to protect solar assets from theft and damage.",
    cta: "Learn More",
  },
];

const TechnologySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Technology</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the cutting-edge technology behind Eversolar's solar maintenance solutions, designed to deliver unmatched performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
                  {tech.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection; 