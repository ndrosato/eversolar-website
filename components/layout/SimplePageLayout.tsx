"use client"

import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface SimplePageLayoutProps {
  children: ReactNode
  transparentHeader?: boolean
}

const SimplePageLayout: React.FC<SimplePageLayoutProps> = ({
  children,
  transparentHeader = false,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent={transparentHeader} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default SimplePageLayout 