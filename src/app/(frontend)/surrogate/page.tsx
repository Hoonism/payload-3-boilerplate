import { getLandingPageData } from '@/lib/api/landing-page'
import { HeroSection } from '@/components/landing/HeroSection'
import { TrustIndicators } from '@/components/landing/TrustIndicators'
import { AboutSection } from '@/components/landing/AboutSection'
import { BenefitsSection } from '@/components/landing/BenefitsSection'
import { ApplicationProcess } from '@/components/landing/ApplicationProcess'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { FAQSection } from '@/components/landing/FAQSection'
import { ContactSection } from '@/components/landing/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Surrogate Mother | Patriot Conceptions',
  description: 'Give the gift of family while earning up to $70,000. Join Patriot Conceptions as a surrogate mother with full medical coverage and 24/7 support.',
  openGraph: {
    title: 'Become a Surrogate Mother | Patriot Conceptions',
    description: 'Give the gift of family while earning up to $70,000. Join our supportive community of surrogate mothers.',
    images: ['/surrogate-hero.jpg'],
  },
}

export default async function SurrogateLandingPage() {
  const { landingPage, testimonials, faqs, benefits, applicationSteps } = await getLandingPageData()

  return (
    <main className="min-h-screen">
      <HeroSection data={landingPage} />
      <TrustIndicators data={landingPage} />
      <AboutSection data={landingPage} />
      <BenefitsSection benefits={benefits} />
      <ApplicationProcess steps={applicationSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={faqs} />
      <ContactSection data={landingPage} />
    </main>
  )
}