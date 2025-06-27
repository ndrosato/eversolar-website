import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  ArrowRight,
  BarChart3,
  Building2,
  DrillIcon as Drone,
  Thermometer,
  Shield,
  Bird,
  LineChart,
  MonitorCheck,
  FileBarChart,
  Zap,
  Droplets,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CommercialOMPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Header */}
      <div className="relative">
        {/* Full-height hero background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/commercial-solar-rooftop.png"
            alt="Commercial solar installation on large rooftop"
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
            <h1 className="text-white text-shadow">Commercial Solar O&M Services</h1>
            <p className="mt-6 text-xl text-white/90">
              Comprehensive operations and maintenance solutions to maximize the performance and longevity of your
              commercial solar assets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="btn-secondary">
                Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Comprehensive Commercial O&M Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              SunPro delivers end-to-end operations and maintenance services for commercial solar installations of all
              sizes, from rooftop systems to utility-scale solar farms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Commercial Panel Cleaning",
                description:
                  "Specialized robotic and manual cleaning services for commercial and industrial solar installations.",
                icon: <Droplets className="h-8 w-8 text-white" />,
              },
              {
                title: "Bird Proofing Solutions",
                description:
                  "Comprehensive bird deterrent systems to protect your solar assets from nesting and droppings.",
                icon: <Bird className="h-8 w-8 text-white" />,
              },
              {
                title: "Solar Farm Maintenance",
                description:
                  "Complete maintenance programs for utility-scale solar farms to ensure optimal performance.",
                icon: <Building2 className="h-8 w-8 text-white" />,
              },
              {
                title: "Drone Inspections",
                description: "Advanced aerial inspections to identify issues quickly across large solar installations.",
                icon: <Drone className="h-8 w-8 text-white" />,
              },
              {
                title: "Thermal Imaging",
                description:
                  "Ground and drone-based thermal imaging to detect hotspots and potential failures before they occur.",
                icon: <Thermometer className="h-8 w-8 text-white" />,
              },
              {
                title: "Performance Reporting",
                description:
                  "Detailed analytics and reporting to track system performance and identify optimization opportunities.",
                icon: <FileBarChart className="h-8 w-8 text-white" />,
              },
              {
                title: "Remote Monitoring",
                description: "24/7 system monitoring to detect and address issues before they impact production.",
                icon: <MonitorCheck className="h-8 w-8 text-white" />,
              },
              {
                title: "Preventative Maintenance",
                description: "Scheduled maintenance programs to prevent failures and extend system lifespan.",
                icon: <Shield className="h-8 w-8 text-white" />,
              },
              {
                title: "Performance Optimization",
                description: "Expert analysis and adjustments to maximize energy yield and financial returns.",
                icon: <LineChart className="h-8 w-8 text-white" />,
              },
            ].map((service, index) => (
              <Card key={index} className="border border-neutral-200 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Cleaning Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Commercial Solar Panel Cleaning</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our specialized commercial cleaning services use advanced robotic technology and purified water systems
                to ensure optimal performance without risking damage to your valuable solar assets.
              </p>
              <ul className="space-y-4">
                {[
                  "Robotic cleaning for large-scale installations",
                  "Pure water cleaning systems - no chemicals or detergents",
                  "Compliance with manufacturer warranty requirements",
                  "Documented performance improvements of up to 30%",
                  "Safe access solutions for all roof types",
                  "Minimal disruption to business operations",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 btn-secondary">Learn More About Our Cleaning Process</Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/commercial-panel-cleaning.png"
                alt="Commercial solar panel cleaning in progress"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drone & Thermal Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/drone-thermal-inspection.png"
                alt="Drone performing thermal inspection of solar array"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-6">Advanced Inspection Technologies</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our drone and thermal imaging services provide comprehensive insights into your system's health,
                identifying issues that are invisible to the naked eye.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Drone Inspections</h3>
                  <ul className="space-y-3">
                    {[
                      "Rapid inspection of large solar arrays",
                      "High-resolution imagery for detailed analysis",
                      "Safe inspection of difficult-to-access areas",
                      "Minimal disruption to system operation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary-500 shrink-0 mt-0.5" />
                        <span className="text-neutral-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">Thermal Imaging</h3>
                  <ul className="space-y-3">
                    {[
                      "Identify hotspots and potential failures",
                      "Ground and drone-based thermal cameras",
                      "Detailed thermal mapping of entire systems",
                      "Early detection of underperforming modules",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary-500 shrink-0 mt-0.5" />
                        <span className="text-neutral-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bird Proofing Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Solar Bird Proofing Solutions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Protect your solar investment from bird-related damage with our comprehensive bird deterrent systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border border-neutral-200 shadow-md">
              <div className="relative h-48">
                <Image
                  src="/bird-mesh-protection.png"
                  alt="Solar panel bird mesh protection system"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">Mesh Protection Systems</h3>
                <p className="text-neutral-600 mb-4">
                  Custom-designed mesh systems that prevent birds from nesting under panels while maintaining airflow
                  and system performance.
                </p>
                <ul className="space-y-2">
                  {[
                    "UV-stabilized for long-term durability",
                    "Custom-fitted to your specific system",
                    "Maintains panel ventilation and performance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200 shadow-md">
              <div className="relative h-48">
                <Image
                  src="/bird-spikes-system.png"
                  alt="Bird spike deterrent system for solar arrays"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">Deterrent Systems</h3>
                <p className="text-neutral-600 mb-4">
                  Non-harmful deterrent systems that discourage birds from landing and nesting on or around your solar
                  installation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Humane and effective bird management",
                    "Low-profile design maintains aesthetics",
                    "Weather-resistant and long-lasting",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200 shadow-md">
              <div className="relative h-48">
                <Image
                  src="/bird-cleaning-damage.png"
                  alt="Cleaning bird damage from solar panels"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">Cleaning & Remediation</h3>
                <p className="text-neutral-600 mb-4">
                  Specialized cleaning services to remove bird droppings and nesting materials, restoring system
                  performance.
                </p>
                <ul className="space-y-2">
                  {[
                    "Safe removal of biohazardous materials",
                    "Thorough cleaning of affected areas",
                    "Preventative treatments to discourage return",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Monitoring Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Performance Monitoring & Reporting</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Gain complete visibility into your solar assets' performance with our advanced monitoring and detailed
              reporting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="bg-neutral-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-md mr-4">
                  <MonitorCheck className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Remote Monitoring</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Our 24/7 monitoring solutions provide real-time insights into your system's performance, with immediate
                alerts for any issues that could impact production.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time performance monitoring",
                  "Automated alert systems for production drops",
                  "Weather-adjusted performance analysis",
                  "Inverter and string-level monitoring",
                  "Mobile app for on-the-go system visibility",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-md mr-4">
                  <FileBarChart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Comprehensive Reporting</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Our detailed performance reports provide actionable insights to optimize your system's output and
                maximize your return on investment.
              </p>
              <ul className="space-y-3">
                {[
                  "Monthly performance summaries",
                  "Quarterly detailed analysis reports",
                  "Year-over-year performance comparisons",
                  "Financial return calculations",
                  "Maintenance recommendations and forecasting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="btn-secondary">
              Request a Sample Report
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Tabs */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Commercial Success Stories</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how our comprehensive O&M services have helped commercial clients maximize their solar ROI.
            </p>
          </div>

          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="solarfarm">Solar Farm</TabsTrigger>
            </TabsList>
            <TabsContent value="manufacturing" className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Adelaide Manufacturing Facility</h3>
                  <p className="text-neutral-600 mb-6">
                    A 500kW rooftop system was suffering from significant production losses due to industrial pollution
                    and bird nesting issues.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Challenge:</span>
                        <p className="text-neutral-600">
                          27% performance loss due to heavy industrial dust and bird nesting
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Solution:</span>
                        <p className="text-neutral-600">
                          Quarterly cleaning program, bird proofing, and remote monitoring implementation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Results:</span>
                        <p className="text-neutral-600">
                          24% increase in annual production, $47,000 additional revenue per year
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="btn-secondary">Read Full Case Study</Button>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/manufacturing-case-study.png"
                    alt="Manufacturing facility with large solar array"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="retail" className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">National Retail Chain</h3>
                  <p className="text-neutral-600 mb-6">
                    A retail chain with 12 locations across Australia needed a standardized maintenance approach for
                    their solar assets.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Challenge:</span>
                        <p className="text-neutral-600">
                          Inconsistent maintenance across locations leading to variable performance
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Solution:</span>
                        <p className="text-neutral-600">
                          Centralized monitoring system and standardized bi-annual maintenance program
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Results:</span>
                        <p className="text-neutral-600">
                          18% average performance improvement and simplified budgeting process
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="btn-secondary">Read Full Case Study</Button>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/retail-case-study.png"
                    alt="Retail building with solar installation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="solarfarm" className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">5MW Solar Farm</h3>
                  <p className="text-neutral-600 mb-6">
                    A utility-scale solar farm was experiencing gradual performance degradation and needed comprehensive
                    maintenance solutions.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Challenge:</span>
                        <p className="text-neutral-600">
                          Identifying underperforming sections in a large-scale installation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Solution:</span>
                        <p className="text-neutral-600">
                          Drone thermal imaging, targeted cleaning, and component replacement program
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="rounded-full bg-secondary-500 p-1 mt-1">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-black">Results:</span>
                        <p className="text-neutral-600">
                          15% production increase and identification of 37 failing modules
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="btn-secondary">Read Full Case Study</Button>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md">
                  <Image src="/solar-farm-case-study.png" alt="Large scale solar farm" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-black">Commercial Maintenance Plans</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Tailored maintenance solutions to meet the specific needs of your commercial solar installation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Essential Care",
                description: "Basic maintenance for budget-conscious operations",
                features: [
                  "Annual comprehensive cleaning",
                  "Visual inspection & report",
                  "Basic performance analysis",
                  "Inverter health check",
                ],
                cta: "Best for smaller commercial installations",
              },
              {
                title: "Professional Care",
                description: "Our most popular commercial maintenance package",
                features: [
                  "Bi-annual comprehensive cleaning",
                  "Thermal imaging inspection",
                  "Detailed performance reporting",
                  "Remote monitoring system",
                  "Priority response to issues",
                ],
                cta: "Ideal for medium-sized commercial systems",
                highlighted: true,
              },
              {
                title: "Enterprise Care",
                description: "Maximum protection for large-scale installations",
                features: [
                  "Quarterly comprehensive cleaning",
                  "Drone & thermal imaging inspections",
                  "Advanced analytics & reporting",
                  "24/7 monitoring with alerts",
                  "Emergency response service",
                  "Annual component replacement allowance",
                ],
                cta: "Perfect for solar farms and large installations",
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
                    Get Custom Quote
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
                Ready to Maximize Your Commercial Solar Investment?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Our team of commercial solar O&M specialists is ready to develop a customized maintenance plan for your
                installation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
                  Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                >
                  Download O&M Brochure
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
