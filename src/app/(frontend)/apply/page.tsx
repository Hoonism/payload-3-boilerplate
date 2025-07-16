import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to Become a Surrogate | Patriot Conceptions',
  description: 'Start your application to become a surrogate mother with Patriot Conceptions. Begin your journey to help families grow.',
}

export default function ApplicationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Start Your Surrogate Application
          </h1>
          <p className="text-xl text-gray-600">
            Thank you for your interest in becoming a surrogate mother. This application will help us learn more about you and your journey.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-trust-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Application Coming Soon
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're currently setting up our comprehensive application system. In the meantime, 
              please contact us directly to begin your surrogate journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-800-XXX-XXXX"
                className="inline-flex items-center justify-center gap-2 bg-warmth-500 hover:bg-warmth-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>

              <a
                href="/surrogate#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-trust-500 text-trust-500 hover:bg-trust-500 hover:text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}