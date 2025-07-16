'use client'

import { useState } from 'react'
import type { Testimonial } from '@/payload-types'
import { Media } from '@/components/Media'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (testimonials.length === 0) return null

  return (
    <section className="py-16 lg:py-24 bg-warmth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Stories from Our Surrogates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from women who have experienced the joy of helping families grow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="flex-shrink-0">
                {testimonials[currentIndex].image && typeof testimonials[currentIndex].image === 'object' ? (
                  <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
                    <Media
                      resource={testimonials[currentIndex].image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-warmth-100 flex items-center justify-center">
                    <svg className="w-16 h-16 text-warmth-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-grow text-center lg:text-left">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-warmth-400 mx-auto lg:mx-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-lg lg:text-xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].testimonial}"
                </p>

                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  {testimonials[currentIndex].location && (
                    <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                  )}
                  {testimonials[currentIndex].journeyDetails && (
                    <p className="text-sm text-warmth-600 mt-1">
                      {testimonials[currentIndex].journeyDetails.numberOfJourneys}x Surrogate
                      {testimonials[currentIndex].journeyDetails.yearStarted && 
                        ` • Started ${testimonials[currentIndex].journeyDetails.yearStarted}`
                      }
                    </p>
                  )}
                </div>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-warmth-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}