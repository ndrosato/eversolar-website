"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ShieldCheck, 
  Award, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  CalendarDays,
  Lightbulb,
  HeartHandshake 
} from 'lucide-react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function AboutPageContent() {
  // Company stats to highlight achievements
  const companyStats = [
    { figure: '10+', label: 'Years of Excellence' },
    { figure: '20k+', label: 'Solar Systems Maintained' },
    { figure: '99.8%', label: 'Client Satisfaction' },
    { figure: '25%', label: 'Avg. Performance Boost' },
  ]
  
  // Core company values
  const coreValues = [
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: 'Innovation',
      description: 'We constantly push boundaries with next-generation maintenance technology that delivers superior results.',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do, from customer service to technical execution.',
      color: 'from-green-600 to-green-800'
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-white" />,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, becoming trusted advisors for their solar investment.',
      color: 'from-amber-600 to-amber-800'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: 'Results-Driven',
      description: "We're committed to delivering measurable improvements in your system's performance and ROI.",
      color: 'from-purple-600 to-purple-800'
    }
  ]

  // Leadership team
  const leadershipTeam = [
    {
      name: 'Alexandra Morgan',
      role: 'Chief Executive Officer',
      image: '/images/team/ceo.jpg',
      bio: 'With 15+ years in renewable energy, Alexandra has led Eversolar to become the industry leader in solar maintenance technology and service excellence.'
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/cto.jpg',
      bio: 'David spearheads our R&D initiatives, developing proprietary robotic cleaning systems and performance monitoring platforms that set industry standards.'
    },
    {
      name: 'Samantha Wilson',
      role: 'Operations Director',
      image: '/images/team/operations.jpg',
      bio: 'Samantha ensures flawless service delivery across all regions, implementing ISO-certified processes that guarantee consistent quality.'
    },
    {
      name: 'Michael Okoye',
      role: 'Customer Success Director',
      image: '/images/team/client-success.jpg',
      bio: 'Michael leads our customer experience strategy, ensuring every client receives exceptional service and measurable value from our solutions.'
    }
  ]

  // Company milestones
  const milestones = [
    {
      year: '2013',
      title: 'Foundation',
      description: 'Eversolar was established with a vision to revolutionize solar maintenance through technology and expertise.'
    },
    {
      year: '2016',
      title: 'First Robotic System',
      description: 'Launched our proprietary robotic cleaning technology, increasing cleaning efficiency by 300%.'
    },
    {
      year: '2018',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001, 14001, and 45001 certifications, setting new industry standards.'
    },
    {
      year: '2020',
      title: 'National Expansion',
      description: 'Expanded operations nationwide with specialized teams serving all major markets.'
    },
    {
      year: '2023',
      title: 'Enterprise Platform',
      description: 'Launched our enterprise performance monitoring platform with predictive maintenance capabilities.'
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent={true} />
      <main className="flex-grow overflow-hidden">
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background image with parallax effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/solar-panels-aerial.jpg" 
              alt="Solar panel farm from above" 
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C2C5B]/90 to-[#1C2C5B]/70"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 max-w-7xl flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-tight animate-fade-in-up text-center" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
              We Don't Clean Panels —<br /><span className="text-[#58A342]">We Protect Solar Assets</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in-up text-center" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              Protect your solar investment with robotic precision and certified performance results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              <Button size="lg" className="bg-[#58A342] hover:bg-[#58A342]/90 text-white border-none px-8 py-6 text-lg">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                See How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-[#1C2C5B] font-medium text-sm">Our Story</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1C2C5B] mb-6 font-display">
                  A Passion for Solar Excellence
                </h2>
                
                <div className="space-y-6 text-lg text-neutral-700">
                  <p>
                    Founded by renewable energy pioneers who recognized that solar maintenance was being overlooked despite its critical impact on system performance, Eversolar began with a simple mission: to help solar asset owners maximize their investment.
                  </p>
                  
                  <p>
                    We identified that traditional cleaning methods were inefficient, inconsistent, and often damaging to solar panels. This insight led us to develop specialized robotic cleaning technology combined with a data-driven approach to maintenance.
                  </p>
                  
                  <p>
                    Today, Eversolar stands as the industry leader in premium solar maintenance solutions. Our services deliver tangible performance improvements for commercial properties, industrial facilities, solar farms, and residential systems nationwide.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3 bg-[#1C2C5B]/5 px-4 py-3 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-[#1C2C5B]/10 flex items-center justify-center text-[#1C2C5B]">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C2C5B]">Our Mission</h4>
                        <p className="text-sm text-neutral-700">Maximize solar energy production through innovative maintenance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-[#58A342]/5 px-4 py-3 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-[#58A342]/10 flex items-center justify-center text-[#58A342]">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C2C5B]">Our Vision</h4>
                        <p className="text-sm text-neutral-700">A world where solar reaches its full potential</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/about-company.jpg" 
                    alt="Eversolar team with robotic cleaning technology" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                {/* Floating stats card */}
                <div className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#58A342] flex items-center justify-center text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C2C5B]">ISO Certified</h4>
                      <p className="text-sm text-neutral-600">Quality guaranteed processes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#1C2C5B] flex items-center justify-center text-white">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C2C5B]">Data-Driven</h4>
                      <p className="text-sm text-neutral-600">Performance analytics experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-neutral-50 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#1C2C5B]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#58A342]/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block bg-[#58A342]/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-[#58A342] font-medium text-sm">Our Core Values</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C2C5B] mb-6 font-display">
                Principles That Guide Our Work
              </h2>
              <p className="text-lg text-neutral-700">
                These foundational values shape our approach to solar maintenance excellence and client relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl opacity-0 translate-y-4 animate-fade-in-up"
                  style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                >
                  <div className={`bg-gradient-to-br ${value.color} p-8 h-full flex flex-col`}>
                    <div className="h-16 w-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-white/90 mb-8">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block bg-[#1C2C5B]/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-[#1C2C5B] font-medium text-sm">Our Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C2C5B] mb-6 font-display">
                Meet the Experts Behind Eversolar
              </h2>
              <p className="text-lg text-neutral-700">
                Our leadership team brings decades of combined experience in renewable energy, technology development, and operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {leadershipTeam.map((member, index) => (
                <div 
                  key={index} 
                  className="opacity-0 translate-y-4 animate-fade-in-up"
                  style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                >
                  <div className="group relative rounded-xl overflow-hidden shadow-lg mb-6 transform transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-96">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C5B] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                      
                      {/* Social links that appear on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-3">
                          <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#1C2C5B] hover:bg-[#58A342] hover:text-white transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                          <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#1C2C5B] hover:bg-[#58A342] hover:text-white transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#1C2C5B] hover:bg-[#58A342] hover:text-white transition-colors">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1C2C5B] mb-1">{member.name}</h3>
                  <p className="text-[#58A342] font-semibold mb-3">{member.role}</p>
                  <p className="text-neutral-700">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section with Animated Timeline */}
        <section className="py-24 bg-neutral-50 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block bg-[#58A342]/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-[#58A342] font-medium text-sm">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C2C5B] mb-6 font-display">
                Milestones That Define Us
              </h2>
              <p className="text-lg text-neutral-700">
                Our growth story is marked by continuous innovation and an unwavering commitment to excellence.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1C2C5B]/20 transform md:-translate-x-1/2"></div>
              
              <div className="space-y-20">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} opacity-0 translate-y-4 animate-fade-in-up`}
                    style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
                  >
                    <div className="flex md:w-1/2 mb-8 md:mb-0">
                      <div className="z-10 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-4 border-[#1C2C5B] bg-white"></div>
                        <div className="absolute left-4 md:left-1/2 w-8 h-0.5 bg-[#1C2C5B]/60 transform md:-translate-x-1/2"></div>
                      </div>
                      
                      <div className={`ml-6 md:ml-0 ${index % 2 === 0 ? 'md:mr-10 md:text-right' : 'md:ml-10'}`}>
                        <div className="bg-[#1C2C5B] text-white text-3xl font-bold px-6 py-3 rounded-lg inline-block mb-4">
                          {milestone.year}
                        </div>
                        <h3 className="text-2xl font-bold text-[#1C2C5B] mb-2">{milestone.title}</h3>
                        <p className="text-neutral-700">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2"></div> {/* Empty div for spacing in the alternating layout */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-[#1C2C5B] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block bg-white/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-white font-medium text-sm">What Clients Say</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Trusted by Industry Leaders
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 opacity-0 translate-y-4 animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-[#58A342]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">
                  "Eversolar's maintenance program has transformed our solar farm's performance. The 28% increase in output speaks for itself, but it's their attention to detail and data-driven approach that truly sets them apart."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 overflow-hidden mr-4"></div>
                  <div>
                    <p className="font-semibold text-white">James Harrison</p>
                    <p className="text-white/70 text-sm">Operations Director, SunPeak Energy</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 opacity-0 translate-y-4 animate-fade-in-up" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-[#58A342]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">
                  "We've worked with several maintenance providers before Eversolar, and the difference is night and day. Their robotic cleaning technology and certified technicians have helped us achieve unprecedented efficiency levels."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 overflow-hidden mr-4"></div>
                  <div>
                    <p className="font-semibold text-white">Michelle Zhang</p>
                    <p className="text-white/70 text-sm">Facility Manager, Greenfield Properties</p>
                  </div>
                </div>
              </div>
            
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 opacity-0 translate-y-4 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-[#58A342]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">
                  "As a homeowner with a significant solar investment, I wanted the best maintenance possible. Eversolar's residential program has delivered exceptional ROI, with detailed reporting that shows exactly how much more energy we're producing."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 overflow-hidden mr-4"></div>
                  <div>
                    <p className="font-semibold text-white">Robert Wilson</p>
                    <p className="text-white/70 text-sm">Homeowner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-gradient-to-br from-[#1C2C5B] to-[#0f172a] rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <Image 
                  src="/images/cta-team.jpg" 
                  alt="Eversolar experts at work" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1C2C5B]"></div>
              </div>
              
              <div className="relative z-10 py-16 px-8 md:p-16 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display leading-tight">
                  Ready to Transform Your Solar Performance?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join hundreds of satisfied clients who trust Eversolar to maximize their renewable energy investment.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#58A342]" />
                    <span className="text-white">Guaranteed performance improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#58A342]" />
                    <span className="text-white">Comprehensive service warranty</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#58A342]" />
                    <span className="text-white">Detailed ROI and performance reports</span>
                  </div>
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#58A342] hover:bg-[#58A342]/90 text-white border-none px-8">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 