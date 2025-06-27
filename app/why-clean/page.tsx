import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, BarChart3, AlertTriangle, Droplets, Sun, Leaf } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function WhyCleanPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dirty-solar-panels.png"
            alt="Dirty solar panels reducing efficiency"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-900/50"></div>
        </div>

        {/* Header positioned on top of hero */}
        <div className="relative z-10">
          <Navbar transparent={true} />
        </div>

        {/* Hero content */}
        <div className="relative z-5 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-4 pt-32 pb-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-shadow">Why Clean Your Solar Panels?</h1>
            <p className="mt-6 text-xl text-white/90">
              Dirty solar panels can lose up to 30% of their energy production. Regular cleaning is essential for
              maintaining optimal performance and protecting your investment.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title text-black mb-8">The Hidden Cost of Dirty Solar Panels</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Solar panels work by converting sunlight into electricity. When dirt, dust, bird droppings, pollen, or
              other debris accumulate on your panels, they block sunlight from reaching the photovoltaic cells,
              significantly reducing energy production and costing you money.
            </p>

            <div className="my-12 relative">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/dirty-vs-clean-solar-panels.png"
                  alt="Comparison of dirty vs clean solar panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-0 right-0 text-center">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Up to 30% performance loss from dirty panels
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Reasons Section */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-black text-center mb-16">Key Reasons to Clean Your Solar Panels</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Maximize Energy Production",
                description: "Clean panels can produce up to 30% more energy than dirty ones, increasing your ROI.",
                icon: <BarChart3 className="h-8 w-8 text-white" />,
              },
              {
                title: "Extend System Lifespan",
                description:
                  "Regular cleaning prevents long-term damage and extends the life of your solar investment.",
                icon: <Sun className="h-8 w-8 text-white" />,
              },
              {
                title: "Maintain Warranty Compliance",
                description: "Many manufacturers require regular cleaning to maintain warranty validity.",
                icon: <CheckCircle className="h-8 w-8 text-white" />,
              },
              {
                title: "Prevent Hot Spots",
                description: "Bird droppings and debris can create hot spots that damage panels permanently.",
                icon: <AlertTriangle className="h-8 w-8 text-white" />,
              },
              {
                title: "Improve Aesthetics",
                description: "Clean panels enhance your property's appearance and professional image.",
                icon: <Droplets className="h-8 w-8 text-white" />,
              },
              {
                title: "Environmental Responsibility",
                description: "Optimized panels mean more clean energy and less reliance on fossil fuels.",
                icon: <Leaf className="h-8 w-8 text-white" />,
              },
            ].map((item, index) => (
              <Card key={index} className="border border-neutral-200 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-neutral-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Contaminants */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title text-black mb-8">Common Solar Panel Contaminants</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Dust and Pollen",
                  description: "Creates a thin film that gradually reduces efficiency, especially in dry regions.",
                },
                {
                  title: "Bird Droppings",
                  description: "Cause severe localized efficiency drops and can lead to permanent hot spot damage.",
                },
                {
                  title: "Mineral Deposits",
                  description:
                    "Hard water leaves mineral residue that builds up over time, reducing light transmission.",
                },
                {
                  title: "Agricultural Residue",
                  description: "Farms and agricultural areas produce dust and chemical residues that stick to panels.",
                },
                {
                  title: "Industrial Pollution",
                  description:
                    "Urban areas with factories can deposit sticky contaminants that are difficult to remove.",
                },
                {
                  title: "Moss and Algae",
                  description: "Humid environments can promote biological growth that blocks sunlight.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="rounded-full bg-secondary-500 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">{item.title}</h3>
                    <p className="text-neutral-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial vs Residential */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-black text-center mb-12">Commercial vs. Residential Cleaning Needs</h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Commercial Solar Arrays</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Larger systems mean greater financial impact from efficiency losses
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Performance-based incentives require maintaining optimal output
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Professional cleaning ensures compliance with commercial warranties
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Specialized equipment required for safe access to commercial rooftops
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Regular maintenance schedules maximize return on investment
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Residential Solar Systems</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Homeowners directly benefit from increased energy production
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      DIY cleaning risks personal safety and potential panel damage
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Professional cleaning extends system lifespan and maintains home value
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Seasonal cleaning schedules address specific environmental factors
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">
                      Clean panels enhance curb appeal and neighborhood aesthetics
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary-900 to-primary-700 p-8 shadow-xl sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Calculate Your Cleaning ROI
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Regular professional cleaning typically pays for itself within months through increased energy
                production. Contact us for a personalized ROI analysis for your system.
              </p>
              <Button size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
                Get Your Free ROI Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-black text-center mb-12">Frequently Asked Questions</h2>

          <div className="mx-auto max-w-3xl space-y-8">
            {[
              {
                question: "How often should solar panels be cleaned?",
                answer:
                  "The frequency depends on your location and environmental factors. In most areas, we recommend quarterly cleaning for optimal performance. Dusty, high-pollen, or bird-populated areas may require more frequent cleaning.",
              },
              {
                question: "Doesn't rain clean solar panels naturally?",
                answer:
                  "Rain can help remove some loose dust, but it doesn't remove stuck-on debris, bird droppings, or mineral deposits. In fact, rain can sometimes make things worse by leaving mineral streaks as it dries.",
              },
              {
                question: "Can I clean my solar panels myself?",
                answer:
                  "While DIY cleaning is possible, we don't recommend it. Risks include personal injury from falls, panel damage from improper cleaning methods, and voiding manufacturer warranties. Professional cleaning ensures safety and optimal results.",
              },
              {
                question: "What cleaning methods do you use?",
                answer:
                  "We use specialized robotic cleaning equipment with purified water and soft brushes designed specifically for solar panels. Our methods are environmentally friendly and approved by major panel manufacturers.",
              },
              {
                question: "How much can cleaning improve performance?",
                answer:
                  "Studies show that professional cleaning can improve energy output by 10-30% depending on the level of soiling. The improvement is typically more dramatic in dusty environments or after long periods without cleaning.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-black mb-3">{item.question}</h3>
                <p className="text-neutral-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Maximize Your Solar Investment?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our professional cleaning services will restore your panels to peak performance and protect your
              investment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                Learn About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
