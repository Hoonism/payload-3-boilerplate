'use client'

import { useState } from 'react'
import { Media } from '@/components/Media'
import type { LandingPage } from '@/payload-types'
import { trackApplicationStart, trackFormSubmission } from '@/lib/analytics/events'

interface HeroSectionProps {
  data: LandingPage
}

export function HeroSection({ data }: HeroSectionProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      trackFormSubmission('hero-inquiry')
      trackApplicationStart('hero-form')
      
      // Reset form
      setFormData({ firstName: '', lastName: '', email: '', phone: '' })
      alert('Thank you! We will contact you soon.')
    } catch (error) {
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const hasVideo = data.heroVideo && typeof data.heroVideo === 'object'
  const hasImage = data.heroBackgroundImage && typeof data.heroBackgroundImage === 'object'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-white" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
              Surrogate
              <br />
              Mothers
              <br />
              <span className="text-pink-600">Needed!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-gray-600 font-light">
              Rewarding Compensation
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Up to $120K!!
            </p>
            
            <button
              onClick={() => trackApplicationStart('hero')}
              className="inline-block bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn more
            </button>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 max-w-md w-full">
            <div className="bg-pink-100/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Ready to discuss further with
                <br />
                one of our admission
                <br />
                specialists?
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Please enter your 10-digit phone number"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white/80"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 mt-6"
                >
                  {isSubmitting ? 'Submitting...' : 'Next'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-600"
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