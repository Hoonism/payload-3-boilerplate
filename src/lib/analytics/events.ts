'use client'

// Application tracking events
export const trackApplicationStart = (source: string) => {
  // Google Analytics 4 event tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'application_start', {
      event_category: 'application',
      event_label: source,
      value: 1,
    })
  }

  // Facebook Pixel tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Surrogate Application',
      content_category: 'application',
      source: source,
    })
  }

  // Console log for development
  console.log('Application start tracked:', { source })
}

export const trackPhoneClick = (phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'contact',
      event_label: phoneNumber,
    })
  }

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Phone Click',
      phone_number: phoneNumber,
    })
  }

  console.log('Phone click tracked:', { phoneNumber })
}

export const trackFormSubmission = (formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'form',
      event_label: formType,
    })
  }

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Form Submission',
      form_type: formType,
    })
  }

  console.log('Form submission tracked:', { formType })
}

export const trackFAQInteraction = (question: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'faq_interaction', {
      event_category: 'engagement',
      event_label: question,
    })
  }

  console.log('FAQ interaction tracked:', { question })
}

export const trackTestimonialView = (testimonialId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'testimonial_view', {
      event_category: 'engagement',
      event_label: testimonialId,
    })
  }

  console.log('Testimonial view tracked:', { testimonialId })
}

// Type declarations for global gtag and fbq
declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters?: any) => void
    fbq?: (command: string, event: string, parameters?: any) => void
  }
}