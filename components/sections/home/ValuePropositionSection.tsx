import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Zap, Award, LineChart } from 'lucide-react'

const ValuePropositionSection: React.FC = () => {
  const keyPoints = [
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "25% Performance Boost",
      description: "Our advanced cleaning systems restore peak efficiency, increasing energy production by up to 25%."
    },
    {
      icon: <Award className="h-6 w-6 text-amber-500" />,
      title: "ISO Certified Excellence",
      description: "Rigorous quality control and enterprise-grade solutions with proper certifications."
    },
    {
      icon: <LineChart className="h-6 w-6 text-amber-500" />,
      title: "Verified Results",
      description: "Detailed performance reporting shows tangible ROI on your maintenance investment."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-amber-500" />,
      title: "Zero Risk Guarantee",
      description: "$20M insurance coverage with satisfaction guarantee for total peace of mind."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#58A342]/10 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1C2C5B]/10 rounded-full blur-3xl -ml-48"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-3">
            <span className="text-[#1C2C5B] font-semibold text-sm">Maximizing Your Solar Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2C5B] mb-6 font-display leading-tight">
            Premium Solar Maintenance with <span className="text-[#58A342]">Guaranteed Results</span>
          </h2>
          <p className="text-lg text-neutral-700">
            Eversolar combines robotic precision, certified expertise, and data-driven performance to deliver superior solar panel maintenance with tangible, measurable returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {/* Value proposition visual */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/images/solar-panels-premium.jpg"
              alt="Close-up of premium solar panels with sunlight reflection"
              fill
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C5B]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xl font-semibold mb-2">See the Difference</p>
              <p className="mb-4">Average performance gains after professional maintenance</p>
              <div className="flex items-center">
                <div className="h-2 flex-grow bg-white/30 rounded-full">
                  <div className="h-2 w-3/4 bg-[#58A342] rounded-full"></div>
                </div>
                <span className="ml-3 font-bold text-lg">+25%</span>
              </div>
            </div>
          </div>

          {/* Key value points */}
          <div className="space-y-8 order-1 md:order-2">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-5 group">
                <div className="p-3 bg-white rounded-lg shadow-lg border border-neutral-100 group-hover:shadow-xl transition-all duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C2C5B] mb-1">{point.title}</h3>
                  <p className="text-neutral-700">{point.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link href="/why-clean">
                <Button size="lg" className="bg-[#1C2C5B] hover:bg-[#1C2C5B]/90 text-white">
                  Explore Our Advantage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ValuePropositionSection) 