'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Team() {
  const teamMembers = [
    {
      name: 'Stefon Rolax',
      role: 'Founder & CEO',
      bio: 'An Atlanta native with decades of service in real estate investment, Stefon leads our team with deep local expertise and unwavering integrity.',
      image: '/images/CEOpic.png',
      rotate: true, // Flag to rotate CEO image
    },
    {
      name: 'Charise Rolax',
      role: 'Operations Manager',
      bio: 'Charise ensures every transaction runs smoothly, making the selling process seamless for our clients.',
      image: '/images/OpsManager.png',
    },
  ]

  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-secondary">Meet Our Team</h2>
        <p className="text-body max-w-2xl mx-auto">
          Our experienced team is dedicated to making your home selling experience simple, fast, and stress-free.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => {
          const TeamMemberImage = ({ imageSrc, name, rotate }: { imageSrc: string; name: string; rotate?: boolean }) => {
            const [imageError, setImageError] = useState(false)
            
            if (imageError) {
              return (
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-4xl">
                  {name.charAt(0)}
                </div>
              )
            }
            
            return (
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="192px"
                onError={() => setImageError(true)}
                style={rotate ? { transform: 'rotate(45deg) scale(1.5)' } : undefined}
              />
            )
          }
          
          return (
            <div
              key={index}
              className="text-center group"
            >
              <div 
                className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-100 group-hover:border-primary-300 transition-all duration-300"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 40px rgba(4, 120, 87, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.4), 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(4, 120, 87, 0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 40px rgba(4, 120, 87, 0.15)'
                }}
              >
                <TeamMemberImage imageSrc={member.image} name={member.name} rotate={member.rotate} />
              </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
            <p className="text-gray-600 leading-relaxed">{member.bio}</p>
          </div>
          )
        })}
      </div>
    </section>
  )
}

