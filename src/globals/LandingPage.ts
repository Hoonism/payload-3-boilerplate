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