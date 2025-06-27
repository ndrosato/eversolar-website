import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, AlertTriangle, HardHat, FileCheck } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HealthSafetyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Header */}
      <div className="relative">
        {/* Full-height hero background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/health-safety-hero.png"
            alt="Solar technician with safety equipment"
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
            <h1 className="text-white text-shadow">Health & Safety Standards</h1>
            <p className="mt-6 text-xl text-white/90">
              Our commitment to the highest standards of health, safety, and environmental protection in solar
              maintenance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="btn-secondary">
                Download Safety Documentation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
                Our Certifications
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Our Commitment to Safety</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              At SunPro, safety is our top priority. We maintain rigorous standards to protect our team, our clients,
              and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Industry-Leading Safety Standards</h3>
              <p className="text-lg text-neutral-600 mb-6">
                Our comprehensive health and safety program exceeds industry requirements, ensuring that every job is
                completed safely and efficiently.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Fully compliant with WorkSafe regulations",
                  "$20 million public liability insurance",
                  "Comprehensive risk assessment for every project",
                  "Regular safety training for all technicians",
                  "Specialized equipment for safe roof access",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="btn-secondary">View Our Safety Credentials</Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/safety-equipment.png"
                alt="Solar technicians with safety equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Pillars */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Our Safety Pillars</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The four key elements that form the foundation of our safety program.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Risk Management",
                description: "Comprehensive assessment and mitigation strategies for every project.",
                icon: <AlertTriangle className="h-8 w-8 text-white" />,
              },
              {
                title: "Training & Certification",
                description: "Ongoing education and certification for all team members.",
                icon: <FileCheck className="h-8 w-8 text-white" />,
              },
              {
                title: "Equipment & PPE",
                description: "State-of-the-art safety equipment and personal protective gear.",
                icon: <HardHat className="h-8 w-8 text-white" />,
              },
              {
                title: "Compliance & Reporting",
                description: "Strict adherence to regulations and transparent reporting.",
                icon: <Shield className="h-8 w-8 text-white" />,
              },
            ].map((pillar, index) => (
              <Card key={index} className="border border-neutral-200 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-md">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{pillar.title}</h3>
                  <p className="text-neutral-600">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Our Certifications</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We maintain the highest industry certifications to ensure quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { name: "WorkSafe Certified", image: "/cert-worksafe.png" },
              { name: "ISO 45001 Safety", image: "/cert-iso45001.png" },
              { name: "Working at Heights", image: "/cert-heights.png" },
              { name: "First Aid Certified", image: "/cert-firstaid.png" },
              { name: "Environmental Management", image: "/cert-environmental.png" },
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-32 w-32 mb-4">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                </div>
                <p className="text-center font-medium text-neutral-800">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Process */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Our Safety Process</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              How we ensure safety on every project, from planning to completion.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-neutral-200 md:block hidden"></div>
            <div className="space-y-12">
              {[
                {
                  title: "Pre-Project Risk Assessment",
                  description: "Comprehensive evaluation of potential hazards and mitigation strategies.",
                  image: "/safety-assessment.png",
                },
                {
                  title: "Site-Specific Safety Plan",
                  description: "Customized safety protocols tailored to each location's unique requirements.",
                  image: "/safety-plan.png",
                },
                {
                  title: "Equipment Inspection",
                  description: "Thorough inspection of all tools and safety equipment before use.",
                  image: "/safety-equipment-check.png",
                },
                {
                  title: "On-Site Safety Briefing",
                  description: "Detailed safety briefing for all personnel before work begins.",
                  image: "/safety-briefing.png",
                },
                {
                  title: "Continuous Monitoring",
                  description: "Ongoing safety oversight throughout project execution.",
                  image: "/safety-monitoring.png",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                  >
                    <div className="md:w-1/2">
                      <div className={`flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} mb-6 md:mb-0`}>
                        <div className="relative h-64 w-full max-w-md rounded-xl overflow-hidden shadow-md">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 relative">
                      <div
                        className={`hidden md:block absolute top-1/2 ${
                          index % 2 === 0 ? "left-0" : "right-0"
                        } w-6 h-6 -translate-y-1/2 ${
                          index % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
                        } rounded-full bg-secondary-500 border-4 border-white z-10`}
                      ></div>
                      <div className={`${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                        <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                        <p className="text-neutral-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-primary p-10 shadow-xl sm:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Safety Documentation & Resources
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Access our safety documentation, certifications, and resources.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
                  Download Safety Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                >
                  Contact Safety Officer
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
