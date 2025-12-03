'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'How quickly can I get a cash offer?',
      answer: 'We typically provide a cash offer within 24 hours of receiving your property information. Once you accept, we can close in as little as 7 days, or on a timeline that works for you.',
    },
    {
      question: 'Do I need to make repairs before selling?',
      answer: 'No! We buy houses in any condition. Whether your property needs major repairs, has damage, or is in perfect condition, we\'ll make you a fair cash offer as-is.',
    },
    {
      question: 'Are there any fees or commissions?',
      answer: 'No. There are no agent commissions, no closing costs, and no hidden fees. The offer we give you is the amount you\'ll receive at closing.',
    },
    {
      question: 'What types of properties do you buy?',
      answer: 'We buy all types of residential properties in the Atlanta area, including single-family homes, condos, townhouses, and multi-family properties, in any condition.',
    },
    {
      question: 'How do you determine the offer amount?',
      answer: 'We evaluate your property based on its location, condition, market value, and our ability to make a quick purchase. We provide fair, competitive cash offers based on current market conditions.',
    },
    {
      question: 'What if I change my mind?',
      answer: 'There\'s no obligation until you sign the closing documents. You can walk away at any time before closing with no penalties or fees.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-secondary">Frequently Asked Questions</h2>
        <p className="text-body max-w-2xl mx-auto">
          Have questions? We&apos;ve got answers. Here are the most common questions we receive.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-lg text-gray-900 pr-8">
                {faq.question}
              </span>
              <span className="text-primary-600 text-2xl font-bold flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

