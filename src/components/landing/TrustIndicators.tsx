import type { LandingPage } from '@/payload-types'
import { Media } from '@/components/Media'

interface TrustIndicatorsProps {
  data: LandingPage
}

export function TrustIndicators({ data }: TrustIndicatorsProps) {
  return (
    <section className="bg-trust-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-trust-600">
              {data.yearsInBusiness}+
            </span>
            <span className="text-sm md:text-base text-gray-700 mt-1">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-trust-600">
              {data.successfulJourneys}+
            </span>
            <span className="text-sm md:text-base text-gray-700 mt-1">Successful Journeys</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-trust-600">A+</span>
            <span className="text-sm md:text-base text-gray-700 mt-1">BBB Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-trust-600">24/7</span>
            <span className="text-sm md:text-base text-gray-700 mt-1">Support Available</span>
          </div>
        </div>

        {/* Certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
            {data.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                {cert.logo && typeof cert.logo === 'object' && (
                  <Media
                    resource={cert.logo}
                    className="h-12 w-auto object-contain"
                  />
                )}
                <span className="text-sm text-gray-600">{cert.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}