export default function WhyUs() {
  const benefits = [
    {
      icon: '✓',
      title: 'Offer Within 24 Hours',
      description: 'Receive your cash offer right after we review your property. No waiting, no delays.',
    },
    {
      icon: '✓',
      title: 'Buy As-Is, No Repairs',
      description: 'We see potential in every property. Sell your house exactly as it is - we handle everything.',
    },
    {
      icon: '✓',
      title: 'We Pay Closing Costs',
      description: 'Our services are completely free. We cover all closing costs - you keep more money.',
    },
    {
      icon: '✓',
      title: 'No Realtors or Commissions',
      description: 'Skip the middlemen and hidden fees. Work directly with us - no agents, no commissions.',
    },
    {
      icon: '✓',
      title: 'No Need to Clean',
      description: 'Leave everything as-is. We\'ll handle the cleanup - you don\'t have to lift a finger.',
    },
    {
      icon: '✓',
      title: 'Beat Your Current Offer',
      description: 'Already got an offer? Let us try to beat it. We\'re confident we can offer competitive prices.',
    },
  ]

  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-secondary">Why Choose Atlanta Elite Investment Properties</h2>
        <p className="text-body max-w-2xl mx-auto">
          We make selling your house simple, fast, and stress-free. Here&apos;s what sets us apart from the competition.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-primary-50 hover:to-primary-100/50 transition-all duration-300 border border-gray-200 hover:border-primary-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-lg group-hover:bg-primary-700 transition-colors shadow-md">
              {benefit.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block bg-primary-50 rounded-2xl p-8 border-2 border-primary-200">
          <p className="text-xl font-semibold text-gray-900 mb-2">
            We&apos;ll do our very best to bring you an offer that works.
          </p>
          <p className="text-gray-600">
            No obligation, no pressure, just a fair cash offer for your property.
          </p>
        </div>
      </div>
    </section>
  )
}

