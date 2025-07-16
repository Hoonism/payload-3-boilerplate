import type { CollectionConfig } from 'payload'

export const ApplicationSteps: CollectionConfig = {
  slug: 'application-steps',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    {
      name: 'stepNumber',
      label: 'Step Number',
      type: 'number',
      required: true,
      admin: {
        description: 'The order of this step in the process',
      },
    },
    {
      name: 'title',
      label: 'Step Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'requirements',
      label: 'Requirements',
      type: 'array',
      fields: [
        {
          name: 'requirement',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'List any specific requirements for this step',
      },
    },
    {
      name: 'timeEstimate',
      label: 'Time Estimate',
      type: 'text',
      admin: {
        description: 'e.g., "1-2 weeks", "Same day"',
      },
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'select',
      options: [
        { label: 'Form', value: 'form' },
        { label: 'Phone', value: 'phone' },
        { label: 'Medical', value: 'medical' },
        { label: 'Document', value: 'document' },
        { label: 'Meeting', value: 'meeting' },
        { label: 'Checkmark', value: 'check' },
        { label: 'Heart', value: 'heart' },
        { label: 'Legal', value: 'legal' },
      ],
    },
  ],
}