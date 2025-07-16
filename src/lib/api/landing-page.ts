import { getPayload } from 'payload'
import config from '@payload-config'
import type { Testimonial, Faq, Benefit, ApplicationStep, LandingPage } from '@/payload-types'

export async function getLandingPageData() {
  const payload = await getPayload({ config })

  try {
    // Fetch the landing page global
    const landingPage = await payload.findGlobal({
      slug: 'landing-page',
    })

    // Fetch testimonials
    const testimonials = await payload.find({
      collection: 'testimonials',
      where: {
        featured: {
          equals: true,
        },
      },
      sort: 'order',
      limit: 6,
    })

    // Fetch FAQs
    const faqs = await payload.find({
      collection: 'faqs',
      sort: 'order',
      limit: 10,
    })

    // Fetch benefits
    const benefits = await payload.find({
      collection: 'benefits',
      sort: 'order',
    })

    // Fetch application steps
    const applicationSteps = await payload.find({
      collection: 'application-steps',
      sort: 'stepNumber',
    })

    return {
      landingPage: landingPage as LandingPage,
      testimonials: testimonials.docs as Testimonial[],
      faqs: faqs.docs as Faq[],
      benefits: benefits.docs as Benefit[],
      applicationSteps: applicationSteps.docs as ApplicationStep[],
    }
  } catch (error) {
    console.error('Error fetching landing page data:', error)
    throw error
  }
}

export async function getAllTestimonials() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'testimonials',
    sort: '-createdAt',
    limit: 20,
  })

  return result.docs as Testimonial[]
}

export async function getAllFAQs() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'faqs',
    sort: 'order',
    limit: 100,
  })

  return result.docs as Faq[]
}

export async function getFAQsByCategory(category: string) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'faqs',
    where: {
      category: {
        equals: category,
      },
    },
    sort: 'order',
  })

  return result.docs as Faq[]
}