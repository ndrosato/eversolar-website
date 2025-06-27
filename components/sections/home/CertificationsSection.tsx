import React from 'react'
import Image from 'next/image'
import { Award, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Certification {
  name: string;
  description: string;
  logo: string;
  category: 'safety' | 'quality' | 'industry';
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems - ensuring consistent, high-quality service delivery.",
      logo: "/images/iso-9001.svg",
      category: 'quality'
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management Systems - minimizing environmental impact.",
      logo: "/images/iso-14001.svg",
      category: 'quality'
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health and Safety - ensuring safe work practices.",
      logo: "/images/iso-45001.svg",
      category: 'safety'
    },
    {
      name: "NABCEP Certified",
      description: "North American Board of Certified Energy Practitioners certification.",
      logo: "/images/nabcep.svg",
      category: 'industry'
    },
    {
      name: "CEC Approved",
      description: "Clean Energy Council approved solar panel maintenance provider.",
      logo: "/images/cec.svg",
      category: 'industry'
    },
    {
      name: "IEC 62446 Compliant",
      description: "International standard for solar PV system documentation and testing.",
      logo: "/images/iec.svg",
      category: 'quality'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#58A342]/5 rounded-full blur-3xl -mr-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-3">
                <span className="text-[#1C2C5B] font-semibold text-sm">Trust & Credentials</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1C2C5B] mb-6 font-display leading-tight">
                Certifications & Qualifications
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                At Eversolar, we maintain the highest industry standards with ongoing 
                certifications and rigorous quality control. Our credentials ensure you 
                receive safe, compliant, and superior service.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 text-[#58A342]">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C2C5B]">Fully Insured</h3>
                    <p className="text-neutral-700">$20 million public liability insurance coverage for complete peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 text-[#58A342]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C2C5B]">Certified Technicians</h3>
                    <p className="text-neutral-700">All maintenance performed by fully trained, qualified personnel.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 text-[#58A342]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C2C5B]">Warranty Compliant</h3>
                    <p className="text-neutral-700">Services designed to maintain manufacturer warranty validity.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/certifications">
                <Button className="bg-[#1C2C5B] hover:bg-[#1C2C5B]/90 text-white">
                  View All Certifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100 hover:shadow-xl transition-all duration-300 opacity-0 translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start">
                  <div className="mr-5 h-16 w-16 relative flex-shrink-0">
                    <Image 
                      src={cert.logo} 
                      alt={cert.name} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                  <div>
                    <div className="mb-1">
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                        cert.category === 'safety' ? 'bg-red-100 text-red-800' : 
                        cert.category === 'quality' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1C2C5B] mb-2">{cert.name}</h3>
                    <p className="text-neutral-700">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CertificationsSection); 