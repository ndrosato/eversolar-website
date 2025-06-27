"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Star, BarChart3 } from 'lucide-react'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the Navbar component for better code splitting
const Navbar = dynamic(() => import('@/components/layout/Navbar'), {
  ssr: true,
  loading: () => <div className="h-32 bg-transparent"></div>
})

// Props type definition for better maintainability
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  trustBadges?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

// Default trust badges to use if none provided
const DEFAULT_TRUST_BADGES = [
  { 
    icon: <Shield className="badge-icon" />,
    text: "Fully Insured – $20M Public Liability"
  },
  { 
    icon: <Star className="badge-icon" />,
    text: "WorkSafe & OH&S Compliant"
  },
  { 
    icon: <BarChart3 className="badge-icon" />,
    text: "Output-Performance Optimized – Guaranteed"
  }
];

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "We Don't Clean Panels — We Protect Solar Assets",
  subtitle = "Protect your solar investment with robotic precision and certified performance results.",
  backgroundImage = "/solar-hero-image-new.jpeg",
  trustBadges = DEFAULT_TRUST_BADGES
}) => {
  return (
    <div className="relative">
      {/* Full-height hero background with optimized loading */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-[#1C2C5B]/90 animate-pulse"></div>}>
          <Image
            src={backgroundImage}
            alt="Solar panels at sunset with city skyline"
            fill
            className="object-cover brightness-[0.85]"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/uJ/PQAJIwNcRkj17AAAAABJRU5ErkJggg=="
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder-hero.jpg";
              target.onerror = null;
            }}
          />
        </Suspense>
        <div className="hero-overlay"></div>
      </div>

      {/* Header positioned on top of hero */}
      <div className="relative z-10">
        <Navbar transparent={true} />
      </div>

      {/* Hero content with better semantic structure */}
      <div className="hero-content relative z-10 mx-auto flex min-h-[calc(100vh-1px)] max-w-7xl flex-col justify-center items-center px-4 pt-36 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8 text-center">
          <h1 className="text-white text-shadow">{title}</h1>
          <p className="text-xl text-white/90">{subtitle}</p>
          
          <div className="flex flex-wrap gap-4 pt-2 justify-center">
            <Button size="lg" className="bg-[#58A342] hover:bg-[#58A342]/90 text-white">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Badges with memory optimization */}
          {trustBadges.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4 pt-4 relative z-[5] justify-center">
              {trustBadges.map((badge, index) => (
                <div key={index} className="badge badge-outline">
                  {badge.icon}
                  <span className="text-sm font-medium text-white">{badge.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Optimize render performance with React.memo
export default React.memo(HeroSection); 