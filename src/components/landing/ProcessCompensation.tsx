'use client'

import { Media } from '@/components/Media'
import type { LandingPage } from '@/payload-types'

interface ProcessCompensationProps {
  data: LandingPage
}

export function ProcessCompensation({ data }: ProcessCompensationProps) {
  const processSteps = data.processSteps && data.processSteps.length > 0 
    ? data.processSteps.map((step: any) => ({
        title: step.title,
        description: step.description,
      }))
    : [
        {
          title: 'Application and Screening:',
          description: 'Initial compensation may be provided after passing medical and psychological screenings.',
        },
        {
          title: 'Matching with Intended Parents:',
          description: 'A small fee might be given upon successful matching.',
        },
        {
          title: 'Medical Procedures:',
          description: 'Compensation for medical appointments, embryo transfer, and related procedures.',
        },
        {
          title: 'Pregnancy:',
          description: 'Monthly payments typically begin once pregnancy is confirmed.',
        },
        {
          title: 'Delivery:',
          description: 'Final compensation is usually provided after the birth of the baby.',
        },
      ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Title and Description */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
                {data.processCompensationTitle || 'The Surrogate Process and Compensation'}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {data.processCompensationDescription || 'The surrogacy journey involves several stages, each with its own compensation milestones. Understanding this process can help potential surrogates know what to expect financially throughout their journey.'}
              </p>
            </div>
            <div className="flex justify-center">
              {data.processCompensationImage && typeof data.processCompensationImage === 'object' ? (
                <Media
                  resource={data.processCompensationImage}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              ) : (
                <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
              )}
            </div>
          </div>

          {/* Process Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8">
                {data.processOverviewTitle || 'Surrogate Process Overview:'}
              </h3>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-pink-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              {data.processImage && typeof data.processImage === 'object' ? (
                <Media
                  resource={data.processImage}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              ) : (
                <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Process image placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}