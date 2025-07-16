'use client'

import type { LandingPage } from '@/payload-types'

interface KeyPointsProps {
  data: LandingPage
}

export function KeyPoints({ data }: KeyPointsProps) {
  const keyPoints = data.keyPoints && data.keyPoints.length > 0 
    ? data.keyPoints.map((point: any) => ({
        title: point.title,
        description: point.description,
      }))
    : [
        {
          title: 'Gestational Surrogacy:',
          description: 'The surrogate has no genetic connection to the baby. The embryo is created using eggs and sperm from the intended parents or donors.',
        },
        {
          title: 'Helping Families:',
          description: 'Surrogates play a crucial role in helping individuals and couples, including same-sex partners, single parents, and those facing fertility challenges, to build their families.',
        },
        {
          title: 'Medical Process:',
          description: 'The surrogate undergoes in vitro fertilization (IVF) to become pregnant with the intended parents\' embryo.',
        },
        {
          title: 'Legal Agreements:',
          description: 'Surrogacy involves carefully crafted legal contracts to protect all parties involved.',
        },
        {
          title: 'Emotional Journey:',
          description: 'While rewarding, surrogacy is an emotional commitment that requires careful consideration and support.',
        },
      ]

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-12">
            {data.keyPointsTitle || 'Key Points About Surrogacy:'}
          </h2>
          
          <div className="space-y-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}