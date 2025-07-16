'use client'

import { Media } from '@/components/Media'
import type { LandingPage } from '@/payload-types'

interface CompensationBreakdownProps {
  data: LandingPage
}

export function CompensationBreakdown({ data }: CompensationBreakdownProps) {
  const compensationItems = data.compensationItems && data.compensationItems.length > 0 
    ? data.compensationItems.map((item: any) => ({
        title: item.title,
        description: item.description,
      }))
    : [
        {
          title: 'Base Compensation:',
          description: 'This forms the bulk of the surrogate\'s pay, typically ranging from $30,000 to $60,000 for first time surrogate and up to $100,000 for experienced surrogates.',
        },
        {
          title: 'Monthly Allowance:',
          description: 'Covers pregnancy-related expenses, usually around $200-$300 per month.',
        },
        {
          title: 'Maternity Clothing Allowance:',
          description: 'Often a one-time payment of $500-$1,000.',
        },
        {
          title: 'Medical Procedure Compensation:',
          description: 'Additional payments for embryo transfers, invasive procedures, etc.',
        },
        {
          title: 'Multiple Birth Compensation:',
          description: 'Extra pay for carrying twins or triplets, usually $5,000-$10,000 per additional baby.',
        },
        {
          title: 'Lost Wages Coverage:',
          description: 'Reimbursement for work missed due to surrogacy-related appointments or bed rest.',
        },
      ]

  const additionalBenefits = data.additionalBenefits && data.additionalBenefits.length > 0 
    ? data.additionalBenefits.map((benefit: any) => benefit.benefit)
    : [
        'Comprehensive health insurance coverage',
        'Life insurance policy',
        'Travel and accommodation expenses for medical appointments',
        'Post-birth recovery support',
      ]

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Compensation Breakdown */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="flex justify-center order-2 lg:order-1">
              {data.compensationImage && typeof data.compensationImage === 'object' ? (
                <Media
                  resource={data.compensationImage}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              ) : (
                <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Compensation image placeholder</span>
                </div>
              )}
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">
                {data.compensationBreakdownTitle || 'Compensation Breakdown:'}
              </h2>
              
              <div className="space-y-6">
                {compensationItems.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8">
                {data.additionalBenefitsTitle || 'Additional Benefits:'}
              </h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  {additionalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              {data.additionalBenefitsImage && typeof data.additionalBenefitsImage === 'object' ? (
                <Media
                  resource={data.additionalBenefitsImage}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              ) : (
                <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Benefits image placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}