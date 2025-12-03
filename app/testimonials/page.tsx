'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Atlanta, GA',
      text: 'I needed to sell my house quickly after a job relocation. Atlanta Elite Investment Properties made the process so easy. I got a fair cash offer and closed in just 10 days! The team was professional, responsive, and made everything stress-free.',
      rating: 5,
      image: '/images/testimonials/sarah-johnson.jpg',
      property: '3-bedroom home in Buckhead',
    },
    {
      name: 'Michael Chen',
      location: 'Decatur, GA',
      text: 'My house needed major repairs that I couldn\'t afford. They bought it as-is, no questions asked. The whole process was stress-free and professional. I couldn\'t believe how fast and easy it was!',
      rating: 5,
      image: '/images/testimonials/michael-chen.jpg',
      property: '2-bedroom fixer-upper',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Sandy Springs, GA',
      text: 'I was skeptical at first, but they delivered exactly what they promised. No fees, no hassle, just a straightforward cash sale. Highly recommend! The offer was fair and the closing was smooth.',
      rating: 5,
      image: '/images/testimonials/emily-rodriguez.jpg',
      property: '4-bedroom family home',
    },
    {
      name: 'James Williams',
      location: 'Marietta, GA',
      text: 'Facing foreclosure was terrifying. Atlanta Elite Investment Properties saved me. They closed in 7 days and I walked away with cash. Couldn\'t be happier! They truly care about helping homeowners.',
      rating: 5,
      image: '/images/testimonials/james-williams.jpg',
      property: 'Foreclosure property',
    },
    {
      name: 'Patricia Davis',
      location: 'Roswell, GA',
      text: 'Inherited a house I didn\'t want. They made it so simple - bought it as-is, handled everything. No stress, just results. The team was understanding and made a difficult situation easy.',
      rating: 5,
      image: '/images/testimonials/patricia-davis.jpg',
      property: 'Inherited property',
    },
    {
      name: 'Robert Martinez',
      location: 'Alpharetta, GA',
      text: 'Best decision I made. No cleaning, no repairs, no showings. Just filled out a form and got a great offer. Closed in 2 weeks! The process was exactly as they described - simple and fast.',
      rating: 5,
      image: '/images/testimonials/robert-martinez.jpg',
      property: '5-bedroom estate',
    },
    {
      name: 'Jennifer Lee',
      location: 'Kennesaw, GA',
      text: 'Divorce situation required a quick sale. They understood my urgency and worked with my timeline. Professional, compassionate, and got me a fair price. Highly recommend their services!',
      rating: 5,
      image: '/images/testimonials/jennifer-lee.jpg',
      property: '3-bedroom townhouse',
    },
    {
      name: 'David Thompson',
      location: 'Norcross, GA',
      text: 'Tired of being a landlord. They bought my rental property quickly and for a fair price. No tenant issues, no repairs needed. Just a clean, simple transaction. Thank you!',
      rating: 5,
      image: '/images/testimonials/david-thompson.jpg',
      property: 'Rental property',
    },
    {
      name: 'Lisa Anderson',
      location: 'Smyrna, GA',
      text: 'Relocating for work and needed to sell fast. They made it happen in 10 days! The offer was competitive and the process was seamless. Couldn\'t have asked for better service.',
      rating: 5,
      image: '/images/testimonials/lisa-anderson.jpg',
      property: '2-bedroom condo',
    },
  ]

  const TestimonialImage = ({ imageSrc, name }: { imageSrc: string; name: string }) => {
    const errorRef = useRef(false)
    const [imageError, setImageError] = useState(false)
    
    const handleError = () => {
      if (!errorRef.current) {
        errorRef.current = true
        setImageError(true)
      }
    }
    
    if (imageError || errorRef.current) {
      return (
        <div className="absolute inset-0 bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl">
          {name.charAt(0)}
        </div>
      )
    }
    
    return (
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
        sizes="80px"
        onError={handleError}
      />
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimonials.png"
            alt="Real estate transaction - hands exchanging a house model representing property transfer"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
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
              Client Testimonials
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 mb-8 drop-shadow-md">
              See what Atlanta homeowners are saying about their experience with us
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-container bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">What Our Clients Say</h2>
            <p className="text-body max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real Atlanta homeowners have to say about working with Atlanta Elite Investment Properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-200">
                    <TestimonialImage imageSrc={testimonial.image} name={testimonial.name} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm mb-1">{testimonial.location}</p>
                    <p className="text-gray-500 text-xs italic">{testimonial.property}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-primary-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl text-white/90">Homes Purchased</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl text-white/90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">7 Days</div>
              <div className="text-xl text-white/90">Average Closing Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your fair cash offer today. No obligation, no fees, no hassle. Experience the same fast, stress-free process our clients love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-offer"
              className="bg-navy-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-navy-600 transition-all duration-300 transform hover:scale-105 shadow-lg border border-navy-500"
            >
              Get Your Free Cash Offer
            </Link>
            <a
              href="tel:+14046665583"
              className="bg-transparent border-2 border-primary-600 text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300"
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

