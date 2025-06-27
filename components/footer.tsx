import Link from "next/link"
import { Phone, Mail, Globe, Facebook, Instagram, Linkedin, ChevronRight, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#004597] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <img src="https://i.imgur.com/VfjTh36.png" alt="Eversolar" className="h-12 w-auto" />
            </div>
            <p className="mt-6 max-w-xs text-white/80">
              Professional solar panel cleaning and maintenance services for commercial and premium residential clients
              across Australia.
            </p>
            <p className="mt-4 text-white/70">ABN: 91 686 028 508</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "Commercial Solar Cleaning",
                "Residential Solar Cleaning",
                "Maintenance Plans",
                "Performance Monitoring",
                "System Inspections",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/80 transition-colors hover:text-white flex items-center group">
                    <ChevronRight className="mr-2 h-3 w-3 text-accent-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Process", "Case Studies", "Testimonials", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/80 transition-colors hover:text-white flex items-center group">
                    <ChevronRight className="mr-2 h-3 w-3 text-accent-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-accent-500" />
                <Link href="tel:(08) 8000 1274" className="text-white/80 transition-colors hover:text-white">
                  (08) 8000 1274
                </Link>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-accent-500" />
                <Link href="mailto:info@eversolar.com.au" className="text-white/80 transition-colors hover:text-white">
                  info@eversolar.com.au
                </Link>
              </li>
              <li className="flex items-start">
                <Globe className="mr-3 h-5 w-5 shrink-0 text-accent-500" />
                <Link href="https://eversolar.com.au" className="text-white/80 transition-colors hover:text-white">
                  eversolar.com.au
                </Link>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-accent-500" />
                <span className="text-white/80">Serving all of Australia</span>
              </li>
            </ul>

            <div className="mt-8 flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="rounded-full bg-white/10 p-2.5 transition-all duration-300 hover:bg-accent-500 hover:text-white"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} Eversolar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
