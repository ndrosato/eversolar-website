"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { Suspense } from "react"

interface NavbarProps {
  transparent?: boolean
}

const LogoImage = ({ src, alt, width, height, className }: { 
  src: string; 
  alt: string; 
  width: number; 
  height: number; 
  className: string 
}) => {
  return (
    <Suspense fallback={<div className={`w-${width} h-${height} bg-white/10 animate-pulse rounded`} />}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/placeholder-logo.png"; 
          target.onerror = null; // Prevent infinite fallback loop
        }}
      />
    </Suspense>
  );
};

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Add scroll event listener to change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Change to detect any scrolling immediately
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Initial check in case page is loaded already scrolled
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Why Clean?", href: "/why-clean" },
    { name: "Commercial O&M", href: "/commercial-om" },
    { name: "Residential", href: "/residential" },
    { name: "Health & Safety", href: "/health-safety" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ]

  // Always ensure white background when scrolled for better UX
  const headerStyle = transparent 
    ? (scrolled ? "bg-white shadow-md" : "bg-transparent") 
    : "border-b border-neutral-200 bg-white";

  // Always ensure text is visible against background
  const textStyle = transparent 
    ? (scrolled ? "text-[#1C2C5B]" : "text-white") 
    : "text-[#1C2C5B]";
  
  // Consistent button styling
  const buttonStyle = `bg-[#58A342] hover:bg-[#58A342]/90 text-white`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[50] w-full transition-all duration-300 ${headerStyle}`}
    >
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-32 w-56 flex items-center justify-center">
              {transparent ? (
                <>
                  <LogoImage
                    src="/circular-logo.png"
                    alt="Solar Maintenance"
                    width={200}
                    height={200}
                    className={`object-contain transition-opacity duration-300 ${
                      scrolled ? "opacity-0 absolute" : "opacity-100"
                    }`}
                  />
                  <LogoImage
                    src="/eversolar-dark-logo.png"
                    alt="Eversolar"
                    width={200}
                    height={60}
                    className={`object-contain transition-opacity duration-300 ${
                      scrolled ? "opacity-100" : "opacity-0 absolute"
                    }`}
                  />
                </>
              ) : (
                <LogoImage
                  src="/eversolar-dark-logo.png"
                  alt="Eversolar"
                  width={200}
                  height={60}
                  className="object-contain"
                />
              )}
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-6 relative z-[51]">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:opacity-100 relative z-[52] ${textStyle} ${isActive ? "opacity-100 font-semibold" : "opacity-80"}`}
              >
                {item.name}
                {isActive && <span className="block h-0.5 mt-1 bg-[#58A342] transition-all duration-300"></span>}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-4 relative z-[51]">
          <Link
            href="tel:(08) 8000 1274"
            className={`hidden items-center text-sm font-medium transition-colors md:flex hover:opacity-80 ${textStyle}`}
          >
            <Phone className="mr-2 h-4 w-4" />
            (08) 8000 1274
          </Link>

          <Button
            className={`hidden md:inline-flex relative z-[52] ${buttonStyle}`}
            onClick={() => (window.location.href = "/contact")}
          >
            Get a Quote
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`md:hidden ${
                  transparent && !scrolled
                    ? "border-white/20 bg-transparent text-white hover:bg-white/10"
                    : "border-neutral-200 text-[#1C2C5B] hover:bg-neutral-100"
                }`}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#1C2C5B] text-white sm:w-[400px]">
              <div className="flex items-center mb-8">
                <LogoImage
                  src="/eversolar-dark-logo.png"
                  alt="Eversolar"
                  width={180}
                  height={50}
                  className="object-contain bg-white p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-6 pt-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium text-white transition-colors hover:text-white ${
                        isActive ? "text-[#58A342]" : "text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <Link
                  href="tel:(08) 8000 1274"
                  className="flex items-center text-lg font-medium text-white transition-colors hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (08) 8000 1274
                </Link>
                <Button
                  className={`w-full ${buttonStyle}`}
                  onClick={() => {
                    window.location.href = "/contact"
                    setIsMenuOpen(false)
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 