export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Your Property',
      description: 'Fill out our simple form with your property details. No commitment required.',
      icon: '📝',
    },
    {
      number: '2',
      title: 'Get Your Cash Offer',
      description: 'We\'ll review your property and send you a fair cash offer within 24 hours.',
      icon: '💰',
    },
    {
      number: '3',
      title: 'Close on Your Timeline',
      description: 'Choose your closing date. We handle all the paperwork. Get paid fast.',
      icon: '🏠',
    },
  ]

  return (
    <section id="how-it-works" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="heading-secondary">How It Works</h2>
        <p className="text-body max-w-2xl mx-auto">
          Selling your house has never been easier. Our simple 3-step process gets you cash in hand fast.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-6xl mb-4 text-center">{step.icon}</div>
            <div className="text-5xl font-bold text-primary-600 mb-4 text-center">{step.number}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
            <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

