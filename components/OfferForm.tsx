'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const offerFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  propertyAddress: z.string().min(10, 'Please enter a complete property address'),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  askingPrice: z.string().optional(),
  propertyCondition: z.enum(['excellent', 'good', 'fair', 'poor', 'needs-repair'], {
    required_error: 'Please select a property condition',
  }),
  reasonForSelling: z.string().optional(),
})

type OfferFormData = z.infer<typeof offerFormSchema>

interface OfferFormProps {
  className?: string
}

export default function OfferForm({ className = '' }: OfferFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<OfferFormData>({
    resolver: zodResolver(offerFormSchema),
  })

  const propertyAddress = watch('propertyAddress')

  const onSubmit = async (data: OfferFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="offer-form" className={`section-container bg-primary-50 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Get Your Cash Offer Today</h2>
          <p className="text-body">
            Fill out the form below and we'll send you a fair cash offer within 24 hours. No obligation, no hassle.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✓ Thank you! We've received your information and will contact you within 24 hours with your cash offer.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold">
                {errorMessage || 'Something went wrong. Please try again or contact us directly.'}
              </p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                {...register('fullName')}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                placeholder="John Smith"
                aria-invalid={errors.fullName ? 'true' : 'false'}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                placeholder="john@example.com"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                placeholder="(404) 666-5583"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                Property Address *
              </label>
              <input
                id="propertyAddress"
                type="text"
                {...register('propertyAddress')}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.propertyAddress ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                placeholder="123 Main St, Atlanta, GA 30309"
                aria-invalid={errors.propertyAddress ? 'true' : 'false'}
                aria-describedby={errors.propertyAddress ? 'propertyAddress-error' : undefined}
              />
              {errors.propertyAddress && (
                <p id="propertyAddress-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.propertyAddress.message}
                </p>
              )}
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-gray-50">
                {propertyAddress && propertyAddress.length >= 5 ? (
                  <iframe
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(propertyAddress)}&output=embed`}
                    className="w-full"
                    title="Property Location Map"
                  />
                ) : (
                  <div className="h-[300px] flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm">Enter an address above to see the location on the map</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-semibold text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  {...register('bedrooms')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select bedrooms...</option>
                  <option value="0">Studio</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">6+</option>
                </select>
              </div>

              <div>
                <label htmlFor="bathrooms" className="block text-sm font-semibold text-gray-700 mb-2">
                  Bathrooms
                </label>
                <select
                  id="bathrooms"
                  {...register('bathrooms')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select bathrooms...</option>
                  <option value="0.5">0.5</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4+">4+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="askingPrice" className="block text-sm font-semibold text-gray-700 mb-2">
                Asking Price (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  id="askingPrice"
                  type="text"
                  {...register('askingPrice')}
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter asking price (e.g., 250000)"
                  inputMode="numeric"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">If you have a current asking price, please enter it here</p>
            </div>

            <div>
              <label htmlFor="propertyCondition" className="block text-sm font-semibold text-gray-700 mb-2">
                Property Condition *
              </label>
              <select
                id="propertyCondition"
                {...register('propertyCondition')}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.propertyCondition ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white`}
                aria-invalid={errors.propertyCondition ? 'true' : 'false'}
                aria-describedby={errors.propertyCondition ? 'propertyCondition-error' : undefined}
              >
                <option value="">Select condition...</option>
                <option value="excellent">Excellent - Move-in ready</option>
                <option value="good">Good - Minor repairs needed</option>
                <option value="fair">Fair - Some repairs needed</option>
                <option value="poor">Poor - Major repairs needed</option>
                <option value="needs-repair">Needs Significant Repair</option>
              </select>
              {errors.propertyCondition && (
                <p id="propertyCondition-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.propertyCondition.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="reasonForSelling" className="block text-sm font-semibold text-gray-700 mb-2">
                Reason for Selling (Optional)
              </label>
              <textarea
                id="reasonForSelling"
                {...register('reasonForSelling')}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.reasonForSelling ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none`}
                placeholder="Tell us about your situation (e.g., relocation, inherited property, foreclosure, etc.) - Optional"
                aria-invalid={errors.reasonForSelling ? 'true' : 'false'}
                aria-describedby={errors.reasonForSelling ? 'reasonForSelling-error' : undefined}
              />
              {errors.reasonForSelling && (
                <p id="reasonForSelling-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.reasonForSelling.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Cash Offer'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to be contacted by Atlanta Elite Investment Properties. We respect your privacy and will never share your information.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

