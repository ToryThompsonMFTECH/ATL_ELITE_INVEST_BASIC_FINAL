export default function Situations() {
  const situations = [
    {
      icon: '🏦',
      title: 'Facing Foreclosure?',
      description: 'Stop foreclosure and avoid damage to your credit. We can close fast and help you move forward.',
    },
    {
      icon: '🏛️',
      title: 'Inherited Property?',
      description: 'Don&apos;t want to deal with an inherited house? We&apos;ll buy it as-is, no questions asked.',
    },
    {
      icon: '💔',
      title: 'Going Through Divorce?',
      description: 'Need to sell quickly to split assets? We make the process simple and stress-free.',
    },
    {
      icon: '🏘️',
      title: 'Tired Landlord?',
      description: 'Sell your rental property fast. No need to wait for tenants to move out.',
    },
    {
      icon: '💰',
      title: 'Behind on Taxes?',
      description: 'Facing tax liens or code violations? We buy houses in any situation.',
    },
    {
      icon: '📦',
      title: 'Relocating?',
      description: 'Need to sell fast for a job move? We can close on your timeline.',
    },
  ]

  return (
    <section className="section-container bg-primary-600 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          We Buy Houses in Any Situation
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          No matter your circumstances, we can help. We&apos;ve seen it all and we&apos;re here to make selling easy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {situations.map((situation, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="text-5xl mb-4 flex justify-center">{situation.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{situation.title}</h3>
            <p className="text-white/90 leading-relaxed">{situation.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-white/90 mb-6 text-lg">
          Whatever your situation, we can help. Get your free cash offer today.
        </p>
        <a
          href="/#offer-form"
          className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          style={{
            boxShadow: '0 12px 35px rgba(255, 255, 255, 0.4), 0 5px 15px rgba(255, 255, 255, 0.3), 0 0 25px rgba(255, 255, 255, 0.2), 0 4px 10px rgba(0, 0, 0, 0.2)',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        >
          Get Your Free Offer
        </a>
      </div>
    </section>
  )
}

