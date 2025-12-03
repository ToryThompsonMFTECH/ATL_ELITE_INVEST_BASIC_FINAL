'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Parallax effect: background moves slower than scroll
  const parallaxOffset = scrollY * 0.5

  return (
    <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0" style={{
        transform: `translateY(${parallaxOffset}px)`,
        willChange: 'transform'
      }}>
        <Image
          src="/images/ChatGPT Image Nov 25, 2025, 10_19_22 AM.png"
          alt="Aerial view of affluent Atlanta suburban community with golf course and city skyline"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
          style={{
            transform: 'scale(1.1)', // Slightly larger to prevent gaps during parallax
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-800/85 to-navy-900/90"></div>
        {/* Green gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 via-navy-700/25 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Phone number badge */}
          <a 
            href="tel:+14046665583" 
            className="inline-flex items-center gap-2 bg-primary-600/50 backdrop-blur-sm border border-primary-400/60 rounded-full px-6 py-3 mb-8 shadow-md shadow-primary-600/30 hover:bg-primary-600/70 transition-all duration-300 cursor-pointer group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-lg font-bold hover:text-primary-200 transition-colors" style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
              (404) 666-5583
            </span>
            <span className="text-sm text-white font-medium" style={{
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)'
            }}>Call Now for Instant Offer</span>
          </a>

          <h1 className="heading-primary text-white mb-6 animate-fade-in drop-shadow-2xl" style={{ 
            fontFamily: 'var(--font-playfair), Georgia, serif',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.4)',
            fontWeight: '700'
          }}>
            Sell Your Atlanta House Fast for Cash
          </h1>
          <p className="text-body text-white mb-4 text-xl sm:text-2xl font-bold" style={{
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.7), 0 1px 5px rgba(0, 0, 0, 0.5)'
          }}>
            No repairs. No fees. No agents. Any condition.
          </p>
          <p className="text-white mb-10 text-lg font-semibold" style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.4)'
          }}>
            Get a fair cash offer in 24 hours. Close in as little as 7 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#offer-form" className="btn-primary bg-primary-600 text-white hover:bg-primary-700 w-full sm:w-auto text-lg px-10 py-5 font-bold" style={{
              boxShadow: '0 15px 40px rgba(4, 120, 87, 0.5), 0 6px 20px rgba(4, 120, 87, 0.4), 0 0 30px rgba(4, 120, 87, 0.3), 0 4px 10px rgba(0, 0, 0, 0.3)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Get My Cash Offer
            </Link>
            <Link href="/get-offer" className="bg-transparent border-3 border-white text-white font-bold py-5 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:border-primary-400 w-full sm:w-auto text-lg backdrop-blur-sm" style={{
              boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2), 0 4px 15px rgba(255, 255, 255, 0.15), 0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 1px 5px rgba(0, 0, 0, 0.3)',
              borderWidth: '3px'
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}

