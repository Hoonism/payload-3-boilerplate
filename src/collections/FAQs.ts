import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    group: 'Content',
  },
  fields: [
    {
      name: 'question',
      label: 'Question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      label: 'Answer',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: [
        { label: 'Eligibility', value: 'eligibility' },
        { label: 'Process', value: 'process' },
        { label: 'Compensation', value: 'compensation' },
        { label: 'Medical', value: 'medical' },
        { label: 'Legal', value: 'legal' },
        { label: 'Support', value: 'support' },
        { label: 'General', value: 'general' },
      ],
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first within each category',
      },
    },
    {
      name: 'featured',
      label: 'Featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this FAQ prominently',
      },
    },
  ],
}