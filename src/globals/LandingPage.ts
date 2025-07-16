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
          label: 'What is a Surrogate?',
          fields: [
            {
              name: 'surrogateDefinitionTitle',
              label: 'Section Title',
              type: 'text',
              required: true,
              defaultValue: 'What is a Surrogate?',
            },
            {
              name: 'surrogateDefinition',
              label: 'Surrogate Definition',
              type: 'textarea',
              required: true,
              defaultValue: 'A surrogate, also known as a gestational carrier, is a woman who carries and delivers a baby for intended parents who are unable to conceive or carry a pregnancy themselves.',
            },
            {
              name: 'surrogateDefinitionImage',
              label: 'Section Image',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          label: 'Key Points About Surrogacy',
          fields: [
            {
              name: 'keyPointsTitle',
              label: 'Section Title',
              type: 'text',
              required: true,
              defaultValue: 'Key Points About Surrogacy:',
            },
            {
              name: 'keyPoints',
              label: 'Key Points',
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
              ],
              defaultValue: [
                {
                  title: 'Gestational Surrogacy:',
                  description: 'The surrogate has no genetic connection to the baby. The embryo is created using eggs and sperm from the intended parents or donors.',
                },
                {
                  title: 'Helping Families:',
                  description: 'Surrogates play a crucial role in helping individuals and couples, including same-sex partners, single parents, and those facing fertility challenges, to build their families.',
                },
                {
                  title: 'Medical Process:',
                  description: 'The surrogate undergoes in vitro fertilization (IVF) to become pregnant with the intended parents\' embryo.',
                },
                {
                  title: 'Legal Agreements:',
                  description: 'Surrogacy involves carefully crafted legal contracts to protect all parties involved.',
                },
                {
                  title: 'Emotional Journey:',
                  description: 'While rewarding, surrogacy is an emotional commitment that requires careful consideration and support.',
                },
              ],
            },
          ],
        },
        {
          label: 'Surrogate Process and Compensation',
          fields: [
            {
              name: 'processCompensationTitle',
              label: 'Section Title',
              type: 'text',
              required: true,
              defaultValue: 'The Surrogate Process and Compensation',
            },
            {
              name: 'processCompensationDescription',
              label: 'Section Description',
              type: 'textarea',
              required: true,
              defaultValue: 'The surrogacy journey involves several stages, each with its own compensation milestones. Understanding this process can help potential surrogates know what to expect financially throughout their journey.',
            },
            {
              name: 'processCompensationImage',
              label: 'Section Image',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'processOverviewTitle',
              label: 'Process Overview Title',
              type: 'text',
              required: true,
              defaultValue: 'Surrogate Process Overview:',
            },
            {
              name: 'processSteps',
              label: 'Process Steps',
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
              ],
              defaultValue: [
                {
                  title: 'Application and Screening:',
                  description: 'Initial compensation may be provided after passing medical and psychological screenings.',
                },
                {
                  title: 'Matching with Intended Parents:',
                  description: 'A small fee might be given upon successful matching.',
                },
                {
                  title: 'Medical Procedures:',
                  description: 'Compensation for medical appointments, embryo transfer, and related procedures.',
                },
                {
                  title: 'Pregnancy:',
                  description: 'Monthly payments typically begin once pregnancy is confirmed.',
                },
                {
                  title: 'Delivery:',
                  description: 'Final compensation is usually provided after the birth of the baby.',
                },
              ],
            },
            {
              name: 'processImage',
              label: 'Process Image',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          label: 'Compensation Breakdown',
          fields: [
            {
              name: 'compensationBreakdownTitle',
              label: 'Section Title',
              type: 'text',
              required: true,
              defaultValue: 'Compensation Breakdown:',
            },
            {
              name: 'compensationItems',
              label: 'Compensation Items',
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
              ],
              defaultValue: [
                {
                  title: 'Base Compensation:',
                  description: 'This forms the bulk of the surrogate\'s pay, typically ranging from $30,000 to $60,000 for first time surrogate and up to $100,000 for experienced surrogates.',
                },
                {
                  title: 'Monthly Allowance:',
                  description: 'Covers pregnancy-related expenses, usually around $200-$300 per month.',
                },
                {
                  title: 'Maternity Clothing Allowance:',
                  description: 'Often a one-time payment of $500-$1,000.',
                },
                {
                  title: 'Medical Procedure Compensation:',
                  description: 'Additional payments for embryo transfers, invasive procedures, etc.',
                },
                {
                  title: 'Multiple Birth Compensation:',
                  description: 'Extra pay for carrying twins or triplets, usually $5,000-$10,000 per additional baby.',
                },
                {
                  title: 'Lost Wages Coverage:',
                  description: 'Reimbursement for work missed due to surrogacy-related appointments or bed rest.',
                },
              ],
            },
            {
              name: 'compensationImage',
              label: 'Compensation Image',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'additionalBenefitsTitle',
              label: 'Additional Benefits Title',
              type: 'text',
              required: true,
              defaultValue: 'Additional Benefits:',
            },
            {
              name: 'additionalBenefits',
              label: 'Additional Benefits',
              type: 'array',
              fields: [
                {
                  name: 'benefit',
                  type: 'text',
                  required: true,
                },
              ],
              defaultValue: [
                { benefit: 'Comprehensive health insurance coverage' },
                { benefit: 'Life insurance policy' },
                { benefit: 'Travel and accommodation expenses for medical appointments' },
                { benefit: 'Post-birth recovery support' },
              ],
            },
            {
              name: 'additionalBenefitsImage',
              label: 'Additional Benefits Image',
              type: 'upload',
              relationTo: 'media',
              required: false,
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