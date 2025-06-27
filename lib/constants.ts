/**
 * Global constants for the Eversolar website.
 * Centralizing these values makes the application more maintainable and consistent.
 */

// Brand colors
export const COLORS = {
  PRIMARY: '#1C2C5B', // Navy Blue
  SECONDARY: '#58A342', // Green
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}

// Brand typography
export const TYPOGRAPHY = {
  HEADING_FONT: 'var(--font-montserrat)',
  BODY_FONT: 'var(--font-opensans)',
}

// Contact information
export const CONTACT = {
  PHONE: '(08) 8000 1274',
  EMAIL: 'info@eversolar.com.au',
  ADDRESS: '123 Solar Street, Adelaide, SA 5000',
}

// Navigation items
export const NAVIGATION = {
  MAIN: [
    { name: 'Home', href: '/' },
    { name: 'Why Clean?', href: '/why-clean' },
    { name: 'Commercial O&M', href: '/commercial-om' },
    { name: 'Residential', href: '/residential' },
    { name: 'Health & Safety', href: '/health-safety' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ],
  FOOTER: {
    SERVICES: [
      { name: 'Solar Panel Cleaning', href: '/services/cleaning' },
      { name: 'Maintenance', href: '/services/maintenance' },
      { name: 'Performance Monitoring', href: '/services/monitoring' },
      { name: 'Inspections', href: '/services/inspections' },
    ],
    SOLUTIONS: [
      { name: 'Commercial', href: '/commercial-om' },
      { name: 'Residential', href: '/residential' },
      { name: 'Solar Farms', href: '/solar-farms' },
      { name: 'Government', href: '/government' },
    ],
    COMPANY: [
      { name: 'About Us', href: '/about' },
      { name: 'Health & Safety', href: '/health-safety' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
}

// SEO and meta information
export const SEO = {
  DEFAULT_TITLE: 'Eversolar - Solar Panel Cleaning & Maintenance',
  DEFAULT_DESCRIPTION: 
    'Eversolar delivers robotic cleaning, safety-certified maintenance, and real-time performance reporting for commercial and residential solar installations.',
  DEFAULT_KEYWORDS: 'solar panel cleaning, solar maintenance, solar performance, commercial solar, residential solar',
  SITE_NAME: 'Eversolar',
  CANONICAL_URL: 'https://www.eversolar.com.au',
}

// Image paths
export const IMAGES = {
  LOGO: {
    DARK: '/eversolar-dark-logo.png',
    CIRCULAR: '/circular-logo.png',
  },
  HERO: '/solar-hero-image-new.jpeg',
  ROBOT: '/solar-robot-hero-image-updated.jpeg',
  PLACEHOLDER: '/placeholder-image.png',
  BADGES: {
    ISO_9001: '/iso-9001.png',
    ISO_45001: '/iso-45001.png',
    CEC: '/cec-badge.png',
    INSURANCE: '/insurance-badge.png',
    SAFETY: '/safety-shield.png',
  },
}

// Performance metrics for testimonials
export const PERFORMANCE = {
  IMPROVEMENT_PERCENTAGE: 25, // % improvement after cleaning
}

// Default export for easy import
export default {
  COLORS,
  TYPOGRAPHY,
  CONTACT,
  NAVIGATION,
  SEO,
  IMAGES,
  PERFORMANCE,
} 