import { getLandingPageData } from '@/lib/api/landing-page'
import { HeroSection } from '@/components/landing/HeroSection'
import { VideoSection } from '@/components/landing/VideoSection'
import { ApplicationProcess } from '@/components/landing/ApplicationProcess'
import { SurrogateGallery } from '@/components/landing/SurrogateGallery'
import { AboutSection } from '@/components/landing/AboutSection'
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
  const { landingPage, applicationSteps } = await getLandingPageData()

  return (
    <main className="min-h-screen">
      <HeroSection data={landingPage} />
      <VideoSection data={landingPage} />
      <ApplicationProcess data={landingPage} applicationSteps={applicationSteps} />
      <SurrogateGallery />
      <AboutSection />
    </main>
  )
}