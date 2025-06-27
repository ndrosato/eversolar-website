import React from 'react'
import Image from 'next/image'
import { Shield, Users, BotIcon as Robot, BarChart3 } from 'lucide-react'
import OptimizedImage from '@/components/common/OptimizedImage'
import { COLORS } from '@/lib/constants'

/**
 * WhyEversolar section component with optimized rendering and error handling
 */
const WhyEversolarSection: React.FC = () => {
  const features = [
    { 
      title: "Robotic Precision Technology",
      text: "Advanced robotic cleaning systems ensure consistent, scratch-free performance.",
      icon: <Robot className="h-6 w-6 text-[#58A342]" /> 
    },
    { 
      title: "Safety & Compliance",
      text: "ISO-certified processes with full OH&S compliance and $20M insurance coverage.",
      icon: <Shield className="h-6 w-6 text-[#58A342]" /> 
    },
    {
      title: "Certified Technicians",
      text: "Fully-trained in-house teams with extensive solar maintenance expertise.",
      icon: <Users className="h-6 w-6 text-[#58A342]" />,
    },
    {
      title: "Performance Reporting",
      text: "Detailed reports showing before/after efficiency improvements.",
      icon: <BarChart3 className="h-6 w-6 text-[#58A342]" />,
    },
  ];
  
  return (
    <section className="py-24 bg-neutral-50 relative">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1C2C5B]/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-[#58A342]/10 rounded-full px-4 py-1.5 mb-2">
              <span className="text-[#58A342] font-medium text-sm">Why Choose Eversolar</span>
            </div>
            <h2 className="text-4xl font-bold font-display text-[#1C2C5B] leading-tight">
              Trust, Innovation, Performance
            </h2>

            <p className="text-lg text-neutral-700">
              At Eversolar, we're committed to providing industry-leading solar maintenance services that maximize your system's output and extend its lifespan.
            </p>

            <div className="space-y-6 mt-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-white shadow-md group-hover:shadow-lg transition-all duration-300 border border-neutral-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C2C5B] mb-1">{item.title}</h4>
                    <span className="text-neutral-700">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl h-[600px]">
            <OptimizedImage
              src="/solar-robot-hero-image-updated.jpeg"
              alt="Robotic solar panel cleaning in action"
              fill={true}
              className="object-cover"
              priority={false}
              fallbackSrc="/placeholder-robot.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C5B]/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center mb-3">
                <div className="h-3 w-3 rounded-full bg-[#58A342] mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Robotic Cleaning in Action</span>
              </div>
              <p className="text-lg font-semibold">Increase output by up to 25% with our advanced cleaning technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhyEversolarSection) 