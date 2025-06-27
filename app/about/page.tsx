import { Metadata } from 'next'
import AboutPageContent from '../../components/about/AboutPageContent'

export const metadata: Metadata = {
  title: 'About Eversolar | Industry Leaders in Solar Panel Maintenance',
  description: 'Discover Eversolar\'s journey to transform the solar industry through innovative maintenance technology, expert technicians, and our commitment to sustainability.',
}

export default function AboutPage() {
  return <AboutPageContent />
}
