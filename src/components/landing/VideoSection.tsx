'use client'

import type { LandingPage } from '@/payload-types'

interface VideoSectionProps {
  data: LandingPage
}

export function VideoSection({ data }: VideoSectionProps) {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {data.videoSectionTitle || 'Help People from around the World'}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={data.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
                title={data.videoTitle || 'What Motivates You to Become a Surrogate?'}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {data.videoTitle || 'What Motivates You to Become a Surrogate?'}
              </h3>
              <p className="text-gray-600">
                {data.videoDescription || 'Hear from our surrogates about their rewarding experiences helping families grow.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}