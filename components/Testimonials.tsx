'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Atlanta, GA',
      text: 'I needed to sell my house quickly after a job relocation. Atlanta Elite Investment Properties made the process so easy. I got a fair cash offer and closed in just 10 days!',
      rating: 5,
      image: '/images/testimonials/sarah-johnson.jpg',
    },
    {
      name: 'Michael Chen',
      location: 'Decatur, GA',
      text: 'My house needed major repairs that I couldn\'t afford. They bought it as-is, no questions asked. The whole process was stress-free and professional.',
      rating: 5,
      image: '/images/testimonials/michael-chen.jpg',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Sandy Springs, GA',
      text: 'I was skeptical at first, but they delivered exactly what they promised. No fees, no hassle, just a straightforward cash sale. Highly recommend!',
      rating: 5,
      image: '/images/testimonials/emily-rodriguez.jpg',
    },
    {
      name: 'James Williams',
      location: 'Marietta, GA',
      text: 'Facing foreclosure was terrifying. Atlanta Elite Investment Properties saved me. They closed in 7 days and I walked away with cash. Couldn\'t be happier!',
      rating: 5,
      image: '/images/testimonials/james-williams.jpg',
    },
    {
      name: 'Patricia Davis',
      location: 'Roswell, GA',
      text: 'Inherited a house I didn\'t want. They made it so simple - bought it as-is, handled everything. No stress, just results.',
      rating: 5,
      image: '/images/testimonials/patricia-davis.jpg',
    },
    {
      name: 'Robert Martinez',
      location: 'Alpharetta, GA',
      text: 'Best decision I made. No cleaning, no repairs, no showings. Just filled out a form and got a great offer. Closed in 2 weeks!',
      rating: 5,
      image: '/images/testimonials/robert-martinez.jpg',
    },
  ]

  return (
    <section className="section-container bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <h2 className="heading-secondary">What Our Clients Say</h2>
        <p className="text-body max-w-2xl mx-auto">
          Don't just take our word for it. See what Atlanta homeowners are saying about their experience with Atlanta Elite Investment Properties.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => {
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
                sizes="64px"
                onError={handleError}
              />
            )
          }
          
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-200">
                  <TestimonialImage imageSrc={testimonial.image} name={testimonial.name} />
                </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
                <div className="flex mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-0 leading-relaxed italic text-base">
              "{testimonial.text}"
            </p>
          </div>
          )
        })}
      </div>
    </section>
  )
}

