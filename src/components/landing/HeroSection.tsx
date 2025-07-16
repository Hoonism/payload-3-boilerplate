'use client'

import Link from 'next/link'
import { Media } from '@/components/Media'
import type { LandingPage } from '@/payload-types'
import { trackApplicationStart } from '@/lib/analytics/events'

interface HeroSectionProps {
  data: LandingPage
}

export function HeroSection({ data }: HeroSectionProps) {
  const hasVideo = data.heroVideo && typeof data.heroVideo === 'object'
  const hasImage = data.heroBackgroundImage && typeof data.heroBackgroundImage === 'object'

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {hasVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={(data.heroVideo as any).url} type="video/mp4" />
          </video>
        ) : hasImage ? (
          <Media
            resource={data.heroBackgroundImage}
            priority
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {data.heroHeadline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {data.heroSubheadline}
        </p>
        
        <Link
          href={data.heroCTALink}
          onClick={() => trackApplicationStart('hero')}
          className="inline-block bg-warmth-500 hover:bg-warmth-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {data.heroCTAText}
        </Link>

        {/* Quick Benefits */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <span className="text-2xl font-bold">$50-70k</span>
            <p className="text-sm">Compensation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <span className="text-2xl font-bold">100%</span>
            <p className="text-sm">Medical Coverage</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <span className="text-2xl font-bold">24/7</span>
            <p className="text-sm">Support</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <span className="text-2xl font-bold">Legal</span>
            <p className="text-sm">Protection</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}