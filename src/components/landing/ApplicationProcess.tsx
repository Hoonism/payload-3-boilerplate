'use client'

import type { ApplicationStep } from '@/payload-types'
import Link from 'next/link'
import { trackApplicationStart } from '@/lib/analytics/events'

interface ApplicationProcessProps {
  steps: ApplicationStep[]
}

const iconMap = {
  form: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  phone: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  medical: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-9 1h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  document: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  meeting: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  check: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  heart: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  legal: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
}

export function ApplicationProcess({ steps }: ApplicationProcessProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Your Path to Becoming a Surrogate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to begin your surrogacy journey
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          <div className="relative grid grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative text-center">
                <div className="bg-white rounded-full p-6 shadow-lg mx-auto w-32 h-32 flex items-center justify-center border-4 border-trust-500 relative z-10">
                  <div className="text-trust-600">
                    {iconMap[step.icon as keyof typeof iconMap] || iconMap.document}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg mb-2">Step {step.stepNumber}</h3>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {step.timeEstimate && (
                    <p className="text-xs text-trust-600 mt-2 font-semibold">{step.timeEstimate}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white rounded-full p-4 shadow-lg w-20 h-20 flex items-center justify-center border-4 border-trust-500">
                  <div className="text-trust-600">
                    {iconMap[step.icon as keyof typeof iconMap] || iconMap.document}
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg">Step {step.stepNumber}: {step.title}</h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
                {step.requirements && step.requirements.length > 0 && (
                  <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                    {step.requirements.map((req, idx) => (
                      <li key={idx}>{req.requirement}</li>
                    ))}
                  </ul>
                )}
                {step.timeEstimate && (
                  <p className="text-sm text-trust-600 mt-2 font-semibold">{step.timeEstimate}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/apply"
            onClick={() => trackApplicationStart('process')}
            className="inline-block bg-warmth-500 hover:bg-warmth-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Your Application Today
          </Link>
        </div>
      </div>
    </section>
  )
}