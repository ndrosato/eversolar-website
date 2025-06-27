import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, HelpCircle, PhoneCall } from 'lucide-react'

interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'commercial' | 'residential' | 'technical';
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How often should solar panels be cleaned?",
      answer: "For optimal performance, we recommend cleaning most solar installations 2-4 times per year, depending on your location, environmental factors, and system size. Commercial systems in dusty or high-pollution areas may require more frequent cleaning. We'll provide a custom recommendation based on your specific situation during the initial assessment.",
      category: 'general'
    },
    {
      question: "Will cleaning damage my solar panels?",
      answer: "No. Our robotic cleaning systems and trained technicians use specialized tools designed specifically for solar panels. We use gentle, scratch-free methods that protect your panels while removing performance-reducing debris. All our processes are designed to comply with manufacturer warranty requirements.",
      category: 'general'
    },
    {
      question: "What ROI can I expect from regular maintenance?",
      answer: "Most clients see a return on their maintenance investment within 3-6 months through increased energy production. Our services typically result in a 15-25% performance improvement after cleaning, with ongoing maintenance preserving these gains. We provide before/after performance reporting to document your exact ROI.",
      category: 'commercial'
    },
    {
      question: "Do you offer performance guarantees?",
      answer: "Yes. We guarantee measurable performance improvements after our maintenance services. If we don't deliver a minimum 10% efficiency improvement (weather conditions permitting), we'll provide the service at no cost. This reflects our confidence in our ability to deliver tangible results.",
      category: 'general'
    },
    {
      question: "Can you work with our in-house maintenance team?",
      answer: "Absolutely. For large commercial and industrial clients, we often complement existing maintenance teams by providing specialized equipment, training, and support. We can develop a collaborative approach that leverages both your team's site knowledge and our specialized solar maintenance expertise.",
      category: 'commercial'
    },
    {
      question: "How does weather affect maintenance scheduling?",
      answer: "We monitor weather conditions closely and schedule maintenance during optimal periods. For emergency services, we have protocols to work safely in various conditions. Our scheduling system allows for flexibility to accommodate seasonal variations and unexpected weather events.",
      category: 'technical'
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1C2C5B]/5 rounded-full blur-3xl -ml-48 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#58A342]/5 rounded-full blur-3xl -mr-48 transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-3">
            <span className="text-[#1C2C5B] font-semibold text-sm">Common Questions</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1C2C5B] mb-6 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-700">
            Get answers to common questions about solar panel maintenance, cleaning processes, and the benefits of professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-lg p-1">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium text-[#1C2C5B] hover:text-[#58A342]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-1 text-neutral-700">
                    {faq.answer}
                    <div className="mt-4">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                        faq.category === 'commercial' ? 'bg-blue-100 text-blue-800' : 
                        faq.category === 'residential' ? 'bg-green-100 text-green-800' : 
                        faq.category === 'technical' ? 'bg-amber-100 text-amber-800' : 
                        'bg-neutral-100 text-neutral-800'
                      }`}>
                        {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <Link href="/faq">
                <Button variant="outline" className="border-[#1C2C5B] text-[#1C2C5B] hover:bg-[#1C2C5B] hover:text-white">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-[#1C2C5B] rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <HelpCircle className="h-8 w-8 text-[#58A342]" />
                  <h3 className="text-2xl font-bold">Still Have Questions?</h3>
                </div>
                <p className="mb-8">
                  Our solar maintenance experts are ready to answer your specific questions and provide tailored solutions for your needs.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-white text-[#1C2C5B] hover:bg-neutral-100">
                    Schedule a Consultation
                  </Button>
                  <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg">
                    <PhoneCall className="h-5 w-5 text-[#58A342]" />
                    <div>
                      <p className="text-sm text-white/80">Call us directly</p>
                      <p className="font-bold">1-800-EVERSOLAR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-3 bg-[#58A342]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQSection); 