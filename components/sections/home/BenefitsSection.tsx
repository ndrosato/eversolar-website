import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Shield, Zap, BarChart3, Sun, DollarSign, LineChart, Clock, Leaf } from 'lucide-react'

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
}

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: "financial",
      title: "Financial Benefits",
      description: "Increase energy production while reducing operational costs and extending your system's lifespan.",
      icon: <DollarSign className="h-5 w-5" />,
      image: "/images/financial-benefits.jpg",
      stats: [
        { label: "Average Efficiency Increase", value: "25%", subtext: "after maintenance" },
        { label: "ROI Timeline", value: "3-6 Months", subtext: "for most systems" },
        { label: "Extended System Life", value: "5+ Years", subtext: "with regular maintenance" }
      ]
    },
    {
      id: "performance",
      title: "Performance Optimization",
      description: "Achieve peak performance with specialized cleaning technology that removes energy-blocking debris.",
      icon: <Zap className="h-5 w-5" />,
      image: "/images/performance-optimization.jpg",
      stats: [
        { label: "Power Loss Prevention", value: "Up to 30%", subtext: "recovery potential" },
        { label: "Hotspot Reduction", value: "95%", subtext: "effectiveness" },
        { label: "Production Improvement", value: "15-25%", subtext: "typical results" }
      ]
    },
    {
      id: "reliability",
      title: "System Reliability",
      description: "Prevent damage and ensure consistent energy production with proactive maintenance.",
      icon: <Shield className="h-5 w-5" />,
      image: "/images/system-reliability.jpg",
      stats: [
        { label: "Failure Rate Reduction", value: "87%", subtext: "with regular service" },
        { label: "System Uptime", value: "99.7%", subtext: "maintained average" },
        { label: "Warranty Protection", value: "100%", subtext: "compliance" }
      ]
    },
    {
      id: "sustainability",
      title: "Environmental Impact",
      description: "Maximize the environmental benefits of your solar investment with water-efficient cleaning.",
      icon: <Leaf className="h-5 w-5" />,
      image: "/images/environmental-impact.jpg",
      stats: [
        { label: "CO₂ Offset Increase", value: "+20%", subtext: "annual average" },
        { label: "Water Conservation", value: "98%", subtext: "vs. traditional cleaning" },
        { label: "Chemical-Free", value: "100%", subtext: "eco-friendly process" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1C2C5B]/5 rounded-full blur-3xl -ml-48 -mt-48"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-3">
            <span className="text-[#1C2C5B] font-semibold text-sm">Maximize Your Investment</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C2C5B] mb-6 font-display">
            Key Benefits of Professional Solar Maintenance
          </h2>
          <p className="text-lg text-neutral-700">
            Discover how Eversolar's proven maintenance solutions deliver tangible benefits that impact your bottom line and system performance.
          </p>
        </div>

        <Tabs defaultValue="financial" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-neutral-100 p-1">
              {benefits.map((benefit) => (
                <TabsTrigger 
                  key={benefit.id} 
                  value={benefit.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-[#1C2C5B] data-[state=active]:shadow-md px-4 py-2"
                >
                  <div className="flex items-center space-x-2">
                    {benefit.icon}
                    <span>{benefit.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {benefits.map((benefit) => (
            <TabsContent key={benefit.id} value={benefit.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-[#1C2C5B] mb-4">{benefit.title}</h3>
                  <p className="text-lg text-neutral-700 mb-8">{benefit.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefit.stats.map((stat, index) => (
                      <div key={index} className="bg-neutral-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-neutral-600 mb-2 text-sm">{stat.label}</p>
                        <div className="text-3xl font-bold text-[#58A342] mb-1">{stat.value}</div>
                        {stat.subtext && <p className="text-xs text-neutral-500">{stat.subtext}</p>}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <div className="relative h-[350px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default React.memo(BenefitsSection); 