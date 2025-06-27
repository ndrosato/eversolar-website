import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Users,
  BotIcon as Robot,
  Calendar,
  BarChart3,
  Star,
  Building2,
  BuildingIcon as Buildings,
  Home,
  CheckCircle,
  Compass,
  LineChart,
  FileText,
  Award,
  Zap,
  Globe,
  Factory,
  HelpCircle,
} from "lucide-react"
import Navbar from "@/components/navbar"

// Use dynamic imports for better code splitting and performance
const HeroSection = dynamic(() => import('@/components/sections/home/HeroSection'), {
  loading: () => <div className="h-screen bg-[#1C2C5B]/90 animate-pulse"></div>
})

// Dynamically import all sections with optimized loading order
const ValuePropositionSection = dynamic(() => import('@/components/sections/home/ValuePropositionSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
})

const CustomerPathsSection = dynamic(() => import('@/components/sections/home/CustomerPathsSection'), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse"></div>
})

const BenefitsSection = dynamic(() => import('@/components/sections/home/BenefitsSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
})

const ResultsDrivenSection = dynamic(() => import('@/components/sections/home/ResultsDrivenSection'), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse"></div>
})

const ProcessSection = dynamic(() => import('@/components/sections/home/ProcessSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
})

const TestimonialsSection = dynamic(() => import('@/components/sections/home/TestimonialsSection'), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse"></div>
})

const IndustriesSection = dynamic(() => import('@/components/sections/home/IndustriesSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
})

const TechnologyShowcaseSection = dynamic(() => import('@/components/sections/home/TechnologyShowcaseSection'), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse"></div>
})

const CertificationsSection = dynamic(() => import('@/components/sections/home/CertificationsSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
})

const FAQSection = dynamic(() => import('@/components/sections/home/FAQSection'), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse"></div>
})

const CTASection = dynamic(() => import('@/components/sections/home/CTASection'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>
})

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true
})

/**
 * HomePage component - redesigned with strategic section ordering to guide visitors 
 * through a premium customer journey, optimized for commercial managers,
 * business owners, homeowners, and solar farm owners.
 */
export default function HomePage() {
  return (
    <>
      {/* Hero section loaded right away for fast initial display */}
      <HeroSection />
      
      {/* Present immediate value proposition */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <ValuePropositionSection />
      </Suspense>

      {/* Guide visitors to their relevant path */}
      <Suspense fallback={<div className="h-96 bg-neutral-50 animate-pulse"></div>}>
        <CustomerPathsSection />
      </Suspense>
      
      {/* Show key benefits that address customer pain points */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <BenefitsSection />
      </Suspense>
      
      {/* Demonstrate measurable results and ROI */}
      <Suspense fallback={<div className="h-96 bg-neutral-50 animate-pulse"></div>}>
        <ResultsDrivenSection />
      </Suspense>
      
      {/* Explain the transparent process */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <ProcessSection />
      </Suspense>
      
      {/* Social proof to build trust */}
      <Suspense fallback={<div className="h-96 bg-neutral-50 animate-pulse"></div>}>
        <TestimonialsSection />
      </Suspense>
      
      {/* Industry-specific solutions */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <IndustriesSection />
      </Suspense>
      
      {/* Technology showcase for competitive advantage */}
      <Suspense fallback={<div className="h-96 bg-neutral-50 animate-pulse"></div>}>
        <TechnologyShowcaseSection />
      </Suspense>
      
      {/* Certifications for credibility */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <CertificationsSection />
      </Suspense>
      
      {/* FAQ to address common concerns */}
      <Suspense fallback={<div className="h-96 bg-neutral-50 animate-pulse"></div>}>
        <FAQSection />
      </Suspense>
      
      {/* Final call to action */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <CTASection />
      </Suspense>

      <Footer />
    </>
  )
}
