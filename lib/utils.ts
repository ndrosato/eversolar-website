import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names with Tailwind CSS optimizations.
 * This utility helps manage conditional class names with proper merging.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a phone number for display.
 * Example: formatPhoneNumber("0880001274") => "(08) 8000 1274"
 */
export function formatPhoneNumber(phoneNumber: string): string {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '')
  
  // Format based on number length
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`
  }
  
  // Return original if can't format
  return phoneNumber
}

/**
 * Truncates a string to a specified length and adds ellipsis.
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return `${str.slice(0, maxLength)}...`
}

/**
 * Safely access nested object properties without causing errors.
 */
export function getNestedValue(obj: any, path: string, defaultValue: any = undefined) {
  const keys = path.split('.')
  let result = obj
  
  for (const key of keys) {
    if (result === undefined || result === null) {
      return defaultValue
    }
    result = result[key]
  }
  
  return result === undefined ? defaultValue : result
}

/**
 * Debounce function to limit how often a function runs.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Creates a URL-friendly slug from a string.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/&/g, '-and-')   // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove non-word characters except hyphens
    .replace(/\-\-+/g, '-')   // Replace multiple hyphens with single hyphen
}

/**
 * Format number as currency.
 */
export function formatCurrency(amount: number, locale: string = 'en-AU', currency: string = 'AUD'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Format a date for display.
 */
export function formatDate(date: Date | string, locale: string = 'en-AU'): string {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  
  return new Intl.DateTimeFormat(locale, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date)
}

/**
 * Generate a random ID for components that need unique identifiers.
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Detect if code is running on server or client side.
 */
export const isServer = typeof window === 'undefined'
export const isClient = !isServer
