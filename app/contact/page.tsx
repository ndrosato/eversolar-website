import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="relative">
        <div className="relative z-10">
          <Navbar transparent={false} />
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white py-24 mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-black mb-6">Contact Us</h1>
              <p className="text-lg text-neutral-600 mb-8">
                Have questions about our solar maintenance services? Get in touch with our team for a prompt response.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">Phone</h3>
                    <p className="text-neutral-600">(08) 8000 1274</p>
                    <p className="text-sm text-neutral-500">Monday to Friday, 8am to 5pm AEST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">Email</h3>
                    <p className="text-neutral-600">nick@sunprosolargroup.com.au</p>
                    <p className="text-sm text-neutral-500">We aim to respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">Office Location</h3>
                    <p className="text-neutral-600">Adelaide, South Australia</p>
                    <p className="text-sm text-neutral-500">Serving clients Australia-wide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">Business Hours</h3>
                    <p className="text-neutral-600">Monday to Friday: 8am - 5pm</p>
                    <p className="text-neutral-600">Saturday: By appointment</p>
                    <p className="text-neutral-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-black mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                    { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="rounded-full bg-neutral-100 p-3 text-neutral-600 transition-all duration-300 hover:bg-primary-600 hover:text-white"
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card className="border border-neutral-200 shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                          First Name
                        </label>
                        <Input
                          type="text"
                          id="first-name"
                          placeholder="Your first name"
                          className="w-full rounded-md border-neutral-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Last Name
                        </label>
                        <Input
                          type="text"
                          id="last-name"
                          placeholder="Your last name"
                          className="w-full rounded-md border-neutral-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        className="w-full rounded-md border-neutral-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        placeholder="Your phone number"
                        className="w-full rounded-md border-neutral-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-md border-neutral-300 py-2 px-3 text-neutral-700 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      >
                        <option value="">Select a service</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="bird">Bird Proofing</option>
                        <option value="inspection">System Inspection</option>
                        <option value="monitoring">Remote Monitoring</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your solar system and how we can help"
                        className="w-full rounded-md border-neutral-300"
                      />
                    </div>

                    <Button type="submit" className="w-full btn-secondary">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-black">Our Service Areas</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide solar maintenance services throughout Australia, with our main office in Adelaide.
            </p>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/australia-service-map.png" alt="Map of SunPro service areas" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-black">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "How quickly can you schedule a service?",
                answer:
                  "We typically schedule services within 1-2 weeks, depending on your location and our current workload. For urgent situations, we offer priority scheduling options.",
              },
              {
                question: "Do you service my area?",
                answer:
                  "We provide services throughout Australia, with teams based in major cities and regional areas. Contact us with your location for specific availability.",
              },
              {
                question: "How much does solar panel cleaning cost?",
                answer:
                  "Pricing depends on system size, location, and condition. We provide free, no-obligation quotes after assessing your specific requirements.",
              },
              {
                question: "How often should I have my solar panels cleaned?",
                answer:
                  "We recommend quarterly cleaning for most systems, but this can vary based on your location, environmental factors, and system design. We can provide a customized maintenance schedule.",
              },
            ].map((item, index) => (
              <Card key={index} className="border border-neutral-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2">{item.question}</h3>
                  <p className="text-neutral-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="btn-secondary">View All FAQs</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-primary p-10 shadow-xl sm:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-white/90 mb-8">
                Contact us today to schedule a consultation or request a quote for your solar maintenance needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
                  Get a Free Quote
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                >
                  Call Us Now
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
