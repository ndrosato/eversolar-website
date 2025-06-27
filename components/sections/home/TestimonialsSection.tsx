"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Eversolar has maintained our commercial solar array for over 5 years. Their preventative maintenance program has eliminated downtime and increased our annual yield by 23%. The detailed performance reports help us forecast energy production with incredible accuracy.",
    author: "James Thompson",
    position: "Facility Manager, Riverstone Office Complex",
    image: "/images/testimonials/commercial-manager.jpg",
    rating: 5,
    category: "commercial"
  },
  {
    quote: "After switching to Eversolar for our solar farm maintenance, we've seen a significant reduction in panel degradation and a 15% increase in overall system efficiency. Their technicians are highly knowledgeable, and their monitoring system has caught issues before they became costly problems.",
    author: "Sarah Chen",
    position: "Operations Director, SunValley Solar Farm",
    image: "/images/testimonials/solar-farm-director.jpg",
    rating: 5,
    category: "utility"
  },
  {
    quote: "As a homeowner, I was concerned about maintaining my solar investment. Eversolar makes it simple with their annual maintenance plan. They've helped me maximize my energy production and extend the life of my system. Worth every penny.",
    author: "Michael Rodriguez",
    position: "Residential Customer",
    image: "/images/testimonials/homeowner.jpg",
    rating: 5,
    category: "residential"
  },
  {
    quote: "Eversolar's monitoring system detected a faulty micro-inverter within hours of installation. Their team was on-site the next day and had our system back to peak performance immediately. That level of service is unmatched in the industry.",
    author: "Lisa Parker",
    position: "Sustainability Manager, Parkview Medical Center",
    image: "/images/testimonials/hospital-manager.jpg",
    rating: 5,
    category: "commercial"
  },
  {
    quote: "Managing solar installations across 12 school campuses was overwhelming until we partnered with Eversolar. Their centralized monitoring platform and proactive maintenance schedule has streamlined operations and increased our energy savings.",
    author: "Robert Williams",
    position: "Director of Facilities, Westside School District",
    image: "/images/testimonials/education-manager.jpg",
    rating: 5,
    category: "commercial"
  },
  {
    quote: "As an early solar adopter, I've worked with several maintenance companies. Eversolar stands above them all. Their technical expertise and attention to detail have kept my system performing like new for years.",
    author: "Diana Foster",
    position: "Homeowner",
    image: "/images/testimonials/homeowner-2.jpg",
    rating: 5,
    category: "residential"
  },
];

const TestimonialsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedTestimonials, setDisplayedTestimonials] = useState(testimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter testimonials when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setDisplayedTestimonials(testimonials);
    } else {
      setDisplayedTestimonials(testimonials.filter(t => t.category === activeCategory));
    }
    setCurrentIndex(0);
  }, [activeCategory]);

  // Render stars for rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why leading businesses, solar farm operators, and homeowners trust Eversolar for their solar maintenance needs.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["all", "residential", "commercial", "utility"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-4 bg-primary p-4 rounded-full">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {/* Testimonial Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={displayedTestimonials[currentIndex].image}
                    alt={displayedTestimonials[currentIndex].author}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/96x96/e2e8f0/1e293b?text=Client";
                    }}
                  />
                </div>
                <div className="flex mb-2">
                  {renderStars(displayedTestimonials[currentIndex].rating)}
                </div>
              </div>
              
              <div className="md:col-span-3">
                <p className="text-xl italic mb-8 text-gray-700">"{displayedTestimonials[currentIndex].quote}"</p>
                <div>
                  <p className="font-semibold text-lg">{displayedTestimonials[currentIndex].author}</p>
                  <p className="text-gray-600">{displayedTestimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? displayedTestimonials.length - 1 : prev - 1))}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          {displayedTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
          
          <button
            onClick={() => setCurrentIndex((prev) => (prev === displayedTestimonials.length - 1 ? 0 : prev + 1))}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-3">Trusted by industry leaders nationwide</p>
          <div className="flex justify-center gap-8 text-4xl font-bold text-gray-800">
            <div>
              <span className="text-primary">350+</span>
              <p className="text-sm text-gray-500 font-normal">Commercial Clients</p>
            </div>
            <div>
              <span className="text-primary">2,500+</span>
              <p className="text-sm text-gray-500 font-normal">Residential Systems</p>
            </div>
            <div>
              <span className="text-primary">98%</span>
              <p className="text-sm text-gray-500 font-normal">Client Retention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 