export default function FooterAlt() {
  return (
    <footer className="bg-[#004597] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              {/* Using a regular img tag for maximum compatibility */}
              <img src="/eversolar-logo-white.png" alt="Eversolar" className="h-[60px] w-auto" />
            </div>
            <p className="mt-6 max-w-xs text-white/80">
              Professional solar panel cleaning and maintenance services for commercial and premium residential clients
              across Australia.
            </p>
            <p className="mt-4 text-white/70">ABN: 12 345 678 901</p>
          </div>

          {/* Rest of the footer content remains the same */}
        </div>
      </div>
    </footer>
  )
}
