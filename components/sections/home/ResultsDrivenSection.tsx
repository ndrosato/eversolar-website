import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight, LineChart, BarChart4, TrendingUp, Percent } from 'lucide-react'

interface CaseStudy {
  title: string;
  clientType: string;
  image: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

const ResultsDrivenSection: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: "Commercial Office Complex",
      clientType: "Property Management",
      image: "/images/commercial-case-study.jpg",
      challenge: "Large-scale solar array with 15% efficiency loss due to accumulated dust and environmental debris.",
      solution: "Quarterly robotic cleaning program with bi-annual inspection and detailed performance monitoring.",
      results: [
        { metric: "Energy Output Increase", value: "23%", icon: <TrendingUp className="h-5 w-5 text-[#58A342]" /> },
        { metric: "Annual Savings", value: "$42,000", icon: <Percent className="h-5 w-5 text-[#58A342]" /> },
        { metric: "ROI Timeline", value: "3.5 months", icon: <BarChart4 className="h-5 w-5 text-[#58A342]" /> }
      ]
    },
    {
      title: "Residential Solar System",
      clientType: "Homeowner",
      image: "/images/residential-case-study.jpg",
      challenge: "5kW rooftop system with significant pollen buildup affecting generation during peak seasons.",
      solution: "Semi-annual professional cleaning with performance reporting and panel condition assessment.",
      results: [
        { metric: "Power Output Increase", value: "18%", icon: <TrendingUp className="h-5 w-5 text-[#58A342]" /> },
        { metric: "Yearly Savings", value: "$820", icon: <Percent className="h-5 w-5 text-[#58A342]" /> },
        { metric: "ROI Timeline", value: "6 months", icon: <BarChart4 className="h-5 w-5 text-[#58A342]" /> }
      ]
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-200/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-3">
              <span className="text-[#1C2C5B] font-semibold text-sm">Proven Results</span>
            </div>
            <h2 className="text-4xl font-bold text-[#1C2C5B] mb-6 font-display leading-tight">
              Data-Driven Performance <span className="text-[#58A342]">You Can Measure</span>
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Our maintenance solutions deliver measurable improvements to your solar system's 
              performance. See the real-world results our clients experience:
            </p>
            
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl mb-8">
              <Image
                src="/images/performance-chart.jpg"
                alt="Solar performance improvement chart"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C5B]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <LineChart className="h-5 w-5 text-[#58A342]" />
                  <span className="font-semibold">Performance Analytics</span>
                </div>
                <p className="text-sm mb-3">Average performance improvement after professional maintenance</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-xs text-white/80 mb-1">Commercial</p>
                    <p className="font-bold text-lg">+22%</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-xs text-white/80 mb-1">Residential</p>
                    <p className="font-bold text-lg">+18%</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-xs text-white/80 mb-1">Solar Farms</p>
                    <p className="font-bold text-lg">+25%</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/case-studies">
              <Button variant="outline" className="border-[#1C2C5B] text-[#1C2C5B] hover:bg-[#1C2C5B] hover:text-white">
                View All Case Studies
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1C2C5B]">Client Success Stories</h3>
            
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                  <div className="relative h-[200px] md:h-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-2 py-1 bg-[#1C2C5B]/10 text-[#1C2C5B] text-xs font-medium rounded">
                          {study.clientType}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-[#1C2C5B] mb-3">{study.title}</h4>
                      
                      <div className="space-y-3 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-neutral-600">Challenge:</p>
                          <p className="text-sm text-neutral-700">{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-600">Solution:</p>
                          <p className="text-sm text-neutral-700">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center p-2 bg-neutral-50 rounded-lg">
                            <div className="flex justify-center mb-1">
                              {result.icon}
                            </div>
                            <p className="text-xs text-neutral-600 mb-1">{result.metric}</p>
                            <p className="font-bold text-[#1C2C5B]">{result.value}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ResultsDrivenSection); 