"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Star, Shield, BarChart3, Users } from "lucide-react"

export default function PremiumIntroSection() {
  // Stats data
  const statsData = [
    {
      stat: "+22%",
      label: "Average Efficiency Restored",
      icon: <BarChart3 className="h-8 w-8 text-accent-500" />,
    },
    {
      stat: "1000+",
      label: "Panels Cleaned Monthly",
      icon: <Shield className="h-8 w-8 text-accent-500" />,
    },
    {
      stat: "0",
      label: "Subcontractors Used — In-House Team Only",
      icon: <Users className="h-8 w-8 text-accent-500" />,
    },
    {
      stat: "5-Star",
      label: "Google Rating",
      icon: <Star className="h-8 w-8 text-accent-500" />,
    },
  ]

  return (
    <>
      {/* Horizontal Stats Section */}
      <section className="bg-white py-12 border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm border border-neutral-200 transition-all duration-300 hover:shadow-md"
              >
                <div className="rounded-full bg-accent-500/10 p-3 mb-4">{item.icon}</div>
                <span className="text-3xl font-bold text-primary-900">{item.stat}</span>
                <p className="mt-2 text-sm text-neutral-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Premium Intro Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-accent-500/5"></div>
          <div className="absolute -bottom-12 -left-12 h-80 w-80 rounded-full bg-primary-900/5"></div>
          <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-accent-500/5"></div>
        </div>

        {/* Main content container with refined spacing */}
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
              Australia's Solar Maintenance Experts
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 rounded bg-accent-500"></div>
            </div>
          </div>

          {/* Content grid with improved spacing and structure */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Column - Brand Statement */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
                  Power in Clean Performance™
                </h2>
                <p className="mt-6 text-lg text-neutral-600">
                  Eversolar delivers professional solar panel cleaning and maintenance for homes and commercial sites —
                  with robotic precision, certified compliance, and a relentless focus on solar performance.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Robotic & Manual Cleaning Options",
                  "Fully Insured – $20M Coverage",
                  "OH&S Compliant & Site-Safe",
                  "Detailed Output Performance Reports",
                  "Service Plans: Monthly, Quarterly, Annual",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-accent-500" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>

              <div>
                <Button className="group bg-accent-500 hover:bg-accent-600 text-white">
                  See Our Service Plans
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right Column - Image and Stats */}
            <div className="flex flex-col space-y-8">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/commercial-panel-cleaning.png"
                  alt="Drone shot of commercial solar panels being robotically cleaned"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>

              {/* Stats moved to horizontal section below hero */}
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-20 border-t border-neutral-200 pt-12">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-neutral-500">
              Trusted by Australia's Leading Organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/abstract-corporate-logo.png"
                  alt="Client logo"
                  width={130}
                  height={65}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
