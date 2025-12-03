export default function AreasServed() {
  const areas = [
    'Atlanta',
    'Alpharetta',
    'Decatur',
    'Sandy Springs',
    'Roswell',
    'Marietta',
    'Kennesaw',
    'Smyrna',
    'Norcross',
    'Douglasville',
    'Newnan',
    'McDonough',
    'Stockbridge',
    'Jonesboro',
    'Riverdale',
    'Cartersville',
    'Augusta',
    'Ellenwood',
  ]

  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-12">
        <h2 className="heading-secondary">Areas We Serve</h2>
        <p className="text-body max-w-2xl mx-auto">
          We buy houses throughout Atlanta and surrounding Georgia areas. Don&apos;t see your area? Contact us anyway - we may still be able to help!
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary-600 font-semibold">{area}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Serving all of Georgia and surrounding areas</p>
          <a
            href="tel:+14046665583"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (404) 666-5583 to see if we serve your area
          </a>
        </div>
      </div>
    </section>
  )
}

