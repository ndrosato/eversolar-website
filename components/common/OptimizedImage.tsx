"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Suspense } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  fallbackSrc?: string
  onLoad?: () => void
  sizes?: string
}

/**
 * An optimized image component with built-in error handling, loading states, and performance features.
 * This component wraps Next.js Image with additional functionality.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  quality = 75,
  placeholder,
  blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/uJ/PQAJIwNcRkj17AAAAABJRU5ErkJggg==',
  fallbackSrc = '/placeholder-image.png',
  onLoad,
  sizes,
}) => {
  // Track loading and error states
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  // Handle image loading completed
  const handleImageLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  // Handle image loading error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true)
    setImageSrc(fallbackSrc)
    const target = e.target as HTMLImageElement
    target.onerror = null // Prevent infinite fallback loop
  }

  // Default loading placeholder for non-priority images
  const fallbackElement = (
    <div
      className={`bg-gray-200 animate-pulse ${fill ? 'absolute inset-0' : ''}`}
      style={!fill ? { width: `${width}px`, height: `${height}px` } : {}}
    />
  )

  // Render the image with all optimizations
  return (
    <Suspense fallback={fallbackElement}>
      <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
        {isLoading && !priority && fallbackElement}
        
        <Image
          src={imageSrc}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={`${className} ${isLoading && !priority ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          fill={fill}
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
        />
      </div>
    </Suspense>
  )
}

export default React.memo(OptimizedImage) 