'use client'

import { useState } from 'react'
import type { Faq } from '@/payload-types'
import RichText from '@/components/RichText'
import { trackFAQInteraction, trackPhoneClick } from '@/lib/analytics/events'

interface FAQSectionProps {
  faqs: Faq[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    const faq = faqs[index]
    if (faq && openIndex !== index) {
      trackFAQInteraction(faq.question)
    }
    setOpenIndex(openIndex === index ? null : index)
  }

  // Group FAQs by category
  const faqsByCategory = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = []
    }
    acc[faq.category].push(faq)
    return acc
  }, {} as Record<string, Faq[]>)

  const categoryLabels = {
    eligibility: 'Eligibility',
    process: 'Process',
    compensation: 'Compensation',
    medical: 'Medical',
    legal: 'Legal',
    support: 'Support',
    general: 'General',
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about becoming a surrogate
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-trust-600 border-b-2 border-trust-200 pb-2">
                {categoryLabels[category as keyof typeof categoryLabels] || category}
              </h3>
              
              <div className="space-y-4">
                {categoryFaqs.map((faq, index) => {
                  const globalIndex = faqs.findIndex(f => f.id === faq.id)
                  const isOpen = openIndex === globalIndex
                  
                  return (
                    <div
                      key={faq.id}
                      className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <div className="pt-4 prose prose-gray max-w-none">
                            <RichText content={faq.answer} />
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:+1-800-XXX-XXXX"
            onClick={() => trackPhoneClick('+1-800-XXX-XXXX')}
            className="inline-block bg-trust-500 hover:bg-trust-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 mr-4"
          >
            Call Us Today
          </a>
          <a
            href="/contact"
            className="inline-block bg-transparent border-2 border-trust-500 text-trust-500 hover:bg-trust-500 hover:text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}