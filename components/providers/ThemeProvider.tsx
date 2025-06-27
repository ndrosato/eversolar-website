"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

/**
 * A provider component that enables theme switching functionality in the application.
 * Wraps Next.js theme provider with additional error handling.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Error boundary using React's error handling lifecycle
  const [hasError, setHasError] = React.useState(false);
  
  React.useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };
    
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);
  
  if (hasError) {
    // Fallback to a default theme if theme provider fails
    return <>{children}</>;
  }
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 