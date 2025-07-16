'use client'

import { Media } from '@/components/Media'
import type { LandingPage } from '@/payload-types'

interface SurrogateDefinitionProps {
  data: LandingPage
}

export function SurrogateDefinition({ data }: SurrogateDefinitionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
                {data.surrogateDefinitionTitle || 'What is a Surrogate?'}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {data.surrogateDefinition || 'A surrogate, also known as a gestational carrier, is a woman who carries and delivers a baby for intended parents who are unable to conceive or carry a pregnancy themselves.'}
              </p>
            </div>
            <div className="flex justify-center">
              {data.surrogateDefinitionImage && typeof data.surrogateDefinitionImage === 'object' ? (
                <Media
                  resource={data.surrogateDefinitionImage}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              ) : (
                <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}