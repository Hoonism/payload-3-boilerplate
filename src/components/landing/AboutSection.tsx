import type { LandingPage } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

interface AboutSectionProps {
  data: LandingPage
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="order-2 lg:order-1">
            {data.aboutImages && data.aboutImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {data.aboutImages.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg shadow-lg ${
                      index === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                  >
                    {item.image && typeof item.image === 'object' && (
                      <Media
                        resource={item.image}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                        {item.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              {data.aboutTitle}
            </h2>
            <div className="prose prose-lg max-w-none">
              <RichText content={data.aboutDescription} />
            </div>
            
            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-trust-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Highest compensation packages in the industry</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-trust-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Complete medical coverage from day one</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-trust-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Personal care coordinator throughout your journey</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-trust-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Legal protection with experienced attorneys</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}