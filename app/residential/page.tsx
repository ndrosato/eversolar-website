import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Award, BarChart3 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResidentialPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Header */}
      <div className="relative">
        {/* Full-height hero background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/residential-solar-hero.png"
            alt="Residential solar installation on home"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/50"></div>
        </div>

        {/* Header positioned on top of hero */}
        <div className="relative z-10">
          <Navbar transparent={true} />
        </div>

        {/* Hero content */}
        <div className="relative z-5 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 pt-32 pb-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-shadow">Residential Solar Panel Cleaning</h1>
            <p className="mt-6 text-xl text-white/90">
              Professional cleaning services to maximize the performance and lifespan of your home solar system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="btn-secondary">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Residential Solar Panel Cleaning Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Keep your home solar system performing at its best with our professional cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Why Clean Your Home Solar Panels?</h3>
              <p className="text-lg text-neutral-600 mb-6">
                Dirty solar panels can lose up to 25% of their energy production. Our professional cleaning service
                restores your system to peak performance, maximizing your energy savings and protecting your investment.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Increase energy production by up to 25%",
                  "Extend the lifespan of your solar system",
                  "Maintain manufacturer warranty compliance",
                  "Improve the appearance of your home",
                  "Prevent permanent damage from bird droppings",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="btn-secondary">Learn More About Benefits</Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/residential-cleaning-process.png"
                alt="Professional cleaning residential solar panels"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-secondary-500" />
              <span className="text-lg font-medium text-neutral-800">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-secondary-500" />
              <span className="text-lg font-medium text-neutral-800">Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-secondary-500" />
              <span className="text-lg font-medium text-neutral-800">Performance Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Our Residential Cleaning Process</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We use specialized equipment and techniques to safely and effectively clean your solar panels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Initial Assessment",
                description: "We evaluate your system's condition and identify any issues that need attention.",
                image: "/process-assessment.png",
              },
              {
                title: "Safe Cleaning",
                description: "Using purified water and soft brushes to gently remove dirt without damaging panels.",
                image: "/process-cleaning.png",
              },
              {
                title: "Performance Check",
                description: "We verify the improvement in performance after cleaning is complete.",
                image: "/process-performance.png",
              },
              {
                title: "Maintenance Plan",
                description: "We recommend a cleaning schedule based on your local environmental conditions.",
                image: "/process-maintenance.png",
              },
            ].map((step, index) => (
              <Card key={index} className="border border-neutral-200 shadow-md">
                <div className="relative h-48">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Residential Cleaning Packages</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose the perfect cleaning plan for your home solar system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Single Clean",
                description: "One-time professional cleaning service",
                features: [
                  "Complete panel cleaning",
                  "System visual inspection",
                  "Performance report",
                  "90-day clean guarantee",
                ],
                cta: "Best for seasonal cleaning",
              },
              {
                title: "Annual Plan",
                description: "Our most popular residential package",
                features: [
                  "Two cleanings per year",
                  "Scheduled maintenance visits",
                  "System health check",
                  "Performance monitoring",
                  "Priority scheduling",
                ],
                cta: "Perfect for most homes",
                highlighted: true,
              },
              {
                title: "Premium Care",
                description: "Complete care for optimal performance",
                features: [
                  "Quarterly cleanings",
                  "Comprehensive system checks",
                  "Performance optimization",
                  "Bird protection assessment",
                  "Priority emergency service",
                  "Extended warranty support",
                ],
                cta: "Ideal for premium installations",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border ${
                  plan.highlighted
                    ? "border-secondary-500 shadow-xl ring-2 ring-secondary-500"
                    : "border-neutral-200 shadow-md"
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.title}</h3>
                  <p className="text-neutral-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle
                          className={`h-5 w-5 ${
                            plan.highlighted ? "text-secondary-500" : "text-primary-600"
                          } shrink-0 mt-0.5`}
                        />
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-neutral-500 mb-6">{plan.cta}</p>
                  <Button className={`w-full ${plan.highlighted ? "btn-secondary" : "bg-primary-600 text-white"}`}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-primary p-10 shadow-xl sm:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to Maximize Your Solar Investment?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Contact us today to schedule your residential solar panel cleaning service.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
