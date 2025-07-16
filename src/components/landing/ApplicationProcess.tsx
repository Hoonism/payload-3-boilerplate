'use client'

import Link from 'next/link'
import { trackApplicationStart } from '@/lib/analytics/events'

export function ApplicationProcess() {
  const steps = [
    {
      number: "01",
      title: "Submit the Surrogate Mother Intake Form",
      description: "Complete your initial application",
      icon: "form"
    },
    {
      number: "02", 
      title: "Submit the Surrogate Full Application Form",
      description: "Provide detailed information about your background",
      icon: "document"
    },
    {
      number: "03",
      title: "Submit the Background Check Authorization", 
      description: "Authorization for background verification",
      icon: "check"
    },
    {
      number: "04",
      title: "Submit the Medical Record Authorization",
      description: "Allow access to your medical history",
      icon: "medical"
    }
  ]

  const requirements = [
    "21-36 years of age",
    "have delivered one or more children",
    "live in one of the",
    "surrogacy-friendly states",
    "BMI of 30 or less"
  ]

  const matchSteps = [
    {
      title: "Match with an Intended Parent",
      description: "We will match you with the intended parents when the medical screening is passed. We will prepare you for medical clearance, legal consultation, and everything to get you ready for surrogacy",
      icon: "👥"
    },
    {
      title: "Medical Clearance", 
      description: "Complete medical evaluation and clearance",
      icon: "🏥"
    },
    {
      title: "The Legal Process",
      description: "Legal contracts and documentation",
      icon: "📋"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Apply Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                APPLY
              </h3>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Step {step.number}: {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:order-1">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                If you are:
              </h4>
              <ul className="space-y-2">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                SELECT
              </h3>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  We will reach out to you for getting to know each other and see if you are qualified to be a surrogate.
                </p>
                
                <div className="bg-pink-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Requirements</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span className="text-gray-600">Between 21-36 years old</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span className="text-gray-600">US Citizen or Legal Alien</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span className="text-gray-600">BMI Between 18-30</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span className="text-gray-600">Have given a healthy and uncomplicated birth at least once...</span>
                    </li>
                  </ul>
                  
                  <button className="mt-6 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-pink-100 rounded-full p-8">
                <svg className="w-16 h-16 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Match Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                MATCH
              </h3>
              
              <div className="text-center">
                <p className="text-gray-600 mb-8">
                  We will match you with the intended parents when the medical screening is passed. We will prepare you for medical clearance, legal consultation, and everything to get you ready for surrogacy
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {matchSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Step {index + 1}: {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}