import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ErrorBoundary from '../common/ErrorBoundary'
import { ThemeProvider } from '../providers/ThemeProvider'
import { cn } from '../../lib/utils'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  transparentHeader?: boolean
  showFooter?: boolean
  enableErrorBoundary?: boolean
  customErrorFallback?: ReactNode
}

/**
 * PageLayout is a reusable layout component that provides consistent 
 * structure across different pages with error boundaries and theming.
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = '',
  transparentHeader = false,
  showFooter = true,
  enableErrorBoundary = true,
  customErrorFallback,
}) => {
  // The content to render
  const content = (
    <div className={cn('flex min-h-screen flex-col', className)}>
      <Navbar transparent={transparentHeader} />
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )

  // Apply error boundary if enabled
  if (enableErrorBoundary) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <ErrorBoundary fallback={customErrorFallback}>
          {content}
        </ErrorBoundary>
      </ThemeProvider>
    )
  }

  // Render without error boundary
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {content}
    </ThemeProvider>
  )
}

export default PageLayout 