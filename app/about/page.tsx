'use client'

import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Note: Metadata should be handled via layout.tsx or a separate metadata file for client components

export default function AboutPage() {
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
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0" style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform'
        }}>
          <Image
            src="/images/about-neighborhood.png"
            alt="Aerial view of beautiful Atlanta residential neighborhood with autumn foliage"
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
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-800/80 to-navy-900/85"></div>
          {/* Green gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 via-navy-700/25 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 section-container w-full">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              About Atlanta Elite Investment Properties
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 mb-8 drop-shadow-md">
              Your trusted partner for fast, fair, and stress-free home sales in Atlanta
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-body mb-6">
              Atlanta Elite Investment Properties was founded with a simple mission: to provide Atlanta homeowners with a better, faster, and more transparent way to sell their properties. We understand that selling a house can be stressful, time-consuming, and expensive, especially when you&apos;re dealing with repairs, realtor fees, and lengthy closing processes.
            </p>
            
            <p className="text-body mb-6">
              Our team of experienced real estate professionals has helped hundreds of homeowners across the Atlanta metropolitan area sell their properties quickly and efficiently. Whether you&apos;re facing foreclosure, dealing with an inherited property, relocating for work, or simply need to sell fast, we&apos;re here to help.
            </p>
            
            <p className="text-body mb-6">
              What sets us apart is our commitment to transparency, fairness, and customer service. We don&apos;t use high-pressure sales tactics or make lowball offers. Instead, we provide fair, market-based cash offers and handle every aspect of the transaction, making the process as smooth and stress-free as possible for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Mission</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in honest, upfront communication. No hidden fees, no surprises, just clear terms and fair offers.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speed</h3>
              <p className="text-gray-600">
                We understand time is valuable. That&apos;s why we provide offers within 24 hours and can close in as little as 7 days.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fairness</h3>
              <p className="text-gray-600">
                Every homeowner deserves a fair deal. We make competitive offers based on market value, not desperation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Why Choose Us</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  We know the Atlanta real estate market inside and out. Our deep understanding of local neighborhoods, property values, and market trends allows us to make accurate, fair offers.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Obligation</h3>
                <p className="text-gray-600">
                  Getting an offer from us is completely free and comes with no obligation. You&apos;re in control every step of the way, and you can walk away at any time.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">As-Is Purchases</h3>
                <p className="text-gray-600">
                  We buy houses in any condition. No need for repairs, cleaning, or staging. We&apos;ll take your property exactly as it is, saving you time and money.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Closing</h3>
                <p className="text-gray-600">
                  We work around your schedule. Need to close fast? We can do it in 7 days. Need more time? We&apos;ll accommodate your timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="section-container bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Sell Your House?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a fair cash offer for your Atlanta property. No obligation, no fees, no hassle. Let&apos;s get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-offer"
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Your Free Cash Offer
            </Link>
            <a
              href="tel:+14046665583"
              className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Call (404) 666-5583
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

