import Link from 'next/link'

export default function Footer() {
  const areas = ['Atlanta', 'Alpharetta', 'Decatur', 'Sandy Springs', 'Roswell', 'Marietta', 'Kennesaw', 'Smyrna']

  return (
    <footer className="bg-navy-900 text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Atlanta Elite Investment Properties</h3>
            <p className="text-gray-400 mb-4">
              We buy houses fast for cash in Atlanta and surrounding areas. No repairs, no fees, no hassle.
            </p>
            <div className="flex items-center gap-2 text-primary-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+14046665583" className="font-semibold hover:text-primary-200 transition-colors">
                (404) 666-5583
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:atlantaeliteoffers@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  atlantaeliteoffers@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+14046665583" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (404) 666-5583
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Areas We Serve</h4>
            <ul className="space-y-2 text-gray-400">
              {areas.map((area, index) => (
                <li key={index}>
                  <span className="hover:text-white transition-colors cursor-default">{area}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/get-offer" className="text-gray-400 hover:text-white transition-colors">
                  Get Your Offer
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atlanta Elite Investment Properties. All rights reserved.</p>
          <p className="mt-2 text-sm">We are a real estate solutions and investment firm specializing in helping homeowners sell their houses fast.</p>
        </div>
      </div>
    </footer>
  )
}

