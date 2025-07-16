import type { GlobalConfig } from 'payload'

export const LandingPage: GlobalConfig = {
  slug: 'landing-page',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroHeadline',
              label: 'Hero Headline',
              type: 'text',
              required: true,
              defaultValue: 'Become a Surrogate Mother',
            },
            {
              name: 'heroSubheadline',
              label: 'Hero Subheadline',
              type: 'textarea',
              required: true,
              defaultValue: 'Give the gift of family while earning up to $70,000',
            },
            {
              name: 'heroCTAText',
              label: 'Hero CTA Button Text',
              type: 'text',
              required: true,
              defaultValue: 'Start Your Application',
            },
            {
              name: 'heroCTALink',
              label: 'Hero CTA Link',
              type: 'text',
              required: true,
              defaultValue: '/apply',
            },
            {
              name: 'heroBackgroundImage',
              label: 'Hero Background Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'heroVideo',
              label: 'Hero Background Video (Optional)',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'If provided, will be used instead of background image',
              },
            },
          ],
        },
        {
          label: 'Video Section',
          fields: [
            {
              name: 'videoSectionTitle',
              label: 'Video Section Title',
              type: 'text',
              required: true,
              defaultValue: 'Help People from around the World',
            },
            {
              name: 'videoUrl',
              label: 'Video URL',
              type: 'text',
              required: true,
              defaultValue: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            },
            {
              name: 'videoTitle',
              label: 'Video Title',
              type: 'text',
              required: true,
              defaultValue: 'What Motivates You to Become a Surrogate?',
            },
            {
              name: 'videoDescription',
              label: 'Video Description',
              type: 'textarea',
              required: true,
              defaultValue: 'Hear from our surrogates about their rewarding experiences helping families grow.',
            },
          ],
        },
        {
          label: 'Application Process',
          fields: [
            {
              name: 'applicationProcessTitle',
              label: 'Application Process Title',
              type: 'text',
              required: true,
              defaultValue: 'How It Works',
            },
            {
              name: 'applicationRequirements',
              label: 'Application Requirements',
              type: 'array',
              fields: [
                {
                  name: 'requirement',
                  type: 'text',
                  required: true,
                },
              ],
              defaultValue: [
                { requirement: '21-36 years of age' },
                { requirement: 'have delivered one or more children' },
                { requirement: 'live in one of the surrogacy-friendly states' },
                { requirement: 'BMI of 30 or less' },
              ],
            },
            {
              name: 'requirementsTitle',
              label: 'Requirements Section Title',
              type: 'text',
              required: true,
              defaultValue: 'If you are:',
            },
            {
              name: 'selectSectionTitle',
              label: 'Select Section Title',
              type: 'text',
              required: true,
              defaultValue: 'SELECT',
            },
            {
              name: 'selectSectionDescription',
              label: 'Select Section Description',
              type: 'textarea',
              required: true,
              defaultValue: 'We will reach out to you for getting to know each other and see if you are qualified to be a surrogate.',
            },
            {
              name: 'matchSectionTitle',
              label: 'Match Section Title',
              type: 'text',
              required: true,
              defaultValue: 'MATCH',
            },
            {
              name: 'matchSectionDescription',
              label: 'Match Section Description',
              type: 'textarea',
              required: true,
              defaultValue: 'We will match you with the intended parents when the medical screening is passed. We will prepare you for medical clearance, legal consultation, and everything to get you ready for surrogacy',
            },
            {
              name: 'matchSteps',
              label: 'Match Steps',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'text',
                  required: true,
                },
              ],
              defaultValue: [
                {
                  title: 'Match with an Intended Parent',
                  description: 'We will match you with the intended parents when the medical screening is passed. We will prepare you for medical clearance, legal consultation, and everything to get you ready for surrogacy',
                  icon: '👥',
                },
                {
                  title: 'Medical Clearance',
                  description: 'Complete medical evaluation and clearance',
                  icon: '🏥',
                },
                {
                  title: 'The Legal Process',
                  description: 'Legal contracts and documentation',
                  icon: '📋',
                },
              ],
            },
            {
              name: 'detailedRequirements',
              label: 'Detailed Requirements',
              type: 'array',
              fields: [
                {
                  name: 'requirement',
                  type: 'text',
                  required: true,
                },
              ],
              defaultValue: [
                { requirement: 'Between 21-36 years old' },
                { requirement: 'US Citizen or Legal Alien' },
                { requirement: 'BMI Between 18-30' },
                { requirement: 'Have given a healthy and uncomplicated birth at least once...' },
              ],
            },
          ],
        },
        {
          label: 'Trust Indicators',
          fields: [
            {
              name: 'yearsInBusiness',
              label: 'Years in Business',
              type: 'number',
              required: true,
              defaultValue: 10,
            },
            {
              name: 'successfulJourneys',
              label: 'Number of Successful Journeys',
              type: 'number',
              required: true,
              defaultValue: 500,
            },
            {
              name: 'certifications',
              label: 'Certifications',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
        {
          label: 'About Section',
          fields: [
            {
              name: 'aboutTitle',
              label: 'About Section Title',
              type: 'text',
              required: true,
              defaultValue: 'Why Choose Patriot Conceptions?',
            },
            {
              name: 'aboutDescription',
              label: 'About Description',
              type: 'richText',
              required: true,
            },
            {
              name: 'aboutImages',
              label: 'About Section Images',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Contact Information',
          fields: [
            {
              name: 'phoneNumber',
              label: 'Phone Number',
              type: 'text',
              required: true,
            },
            {
              name: 'email',
              label: 'Email Address',
              type: 'email',
              required: true,
            },
            {
              name: 'officeAddress',
              label: 'Office Address',
              type: 'textarea',
              required: true,
            },
            {
              name: 'businessHours',
              label: 'Business Hours',
              type: 'textarea',
              admin: {
                description: 'e.g., Monday-Friday: 9AM-5PM PST',
              },
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'socialLinks',
              label: 'Social Media Links',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'YouTube', value: 'youtube' },
                  ],
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            {
              name: 'footerLinks',
              label: 'Footer Links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'category',
                  type: 'select',
                  options: [
                    { label: 'Company', value: 'company' },
                    { label: 'Resources', value: 'resources' },
                    { label: 'Legal', value: 'legal' },
                  ],
                },
              ],
            },
            {
              name: 'footerText',
              label: 'Footer Copyright Text',
              type: 'text',
              defaultValue: '© 2024 Patriot Conceptions. All rights reserved.',
            },
          ],
        },
      ],
    },
  ],
}