'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 shadow-2xl sticky top-0 z-50 backdrop-blur-md border-b border-primary-600/20" style={{
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(4, 120, 87, 0.1)'
    }}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex-shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600/20 rounded-full blur-xl group-hover:bg-primary-600/30 transition-all"></div>
              <Image
                src="/images/Logo.png"
                alt="Atlanta Elite Investment Properties"
                width={240}
                height={60}
                className="h-14 w-auto relative z-10"
                priority
              />
            </div>
            <span className="text-xl xl:text-2xl font-bold text-white hover:text-primary-300 transition-all duration-300 hidden lg:block whitespace-nowrap" style={{ 
              fontFamily: 'var(--font-montserrat), system-ui, sans-serif',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(4, 120, 87, 0.2)'
            }}>
              Atlanta Elite Investment Properties
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 flex-shrink-0">
            <Link href="/about" className="text-white/90 hover:text-primary-300 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5 relative group">
              <span className="relative z-10">About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/testimonials" className="text-white/90 hover:text-primary-300 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5 relative group">
              <span className="relative z-10">Testimonials</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#how-it-works" className="text-white/90 hover:text-primary-300 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5 relative group">
              <span className="relative z-10">How It Works</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#faq" className="text-white/90 hover:text-primary-300 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5 relative group">
              <span className="relative z-10">FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="h-6 w-px bg-white/20 mx-2"></div>
            <a
              href="tel:+14046665583"
              className="text-primary-300 hover:text-primary-200 font-semibold flex items-center gap-2 text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg hover:bg-primary-600/20 transition-all duration-300 group"
            >
              <div className="p-1.5 rounded-full bg-primary-600/20 group-hover:bg-primary-600/30 transition-all">
                <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              (404) 666-5583
            </a>
            <Link
              href="/#offer-form"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 xl:px-7 py-2.5 rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105 font-bold text-sm xl:text-base whitespace-nowrap relative overflow-hidden group"
              style={{
                boxShadow: '0 8px 25px rgba(4, 120, 87, 0.4), 0 3px 10px rgba(4, 120, 87, 0.3), 0 0 20px rgba(4, 120, 87, 0.2)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
              }}
            >
              <span className="relative z-10">Get Offer</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary-300 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-navy-700">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-primary-300 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-primary-300 transition-colors font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-primary-300 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-primary-300 transition-colors font-medium"
            >
              FAQ
            </Link>
            <a
              href="tel:+14046665583"
              className="block text-primary-300 font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (404) 666-5583
            </a>
            <Link
              href="/#offer-form"
              onClick={() => setIsOpen(false)}
              className="block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 font-bold text-center"
              style={{
                boxShadow: '0 8px 25px rgba(4, 120, 87, 0.4), 0 3px 10px rgba(4, 120, 87, 0.3), 0 0 15px rgba(4, 120, 87, 0.2)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
              }}
            >
              Get Offer
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

