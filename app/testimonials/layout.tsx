import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials | Atlanta Elite Investment Properties',
  description: 'Read real testimonials from Atlanta homeowners who sold their houses fast with Atlanta Elite Investment Properties. See why our clients love working with us.',
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

