import type { CollectionConfig } from 'payload'

export const Benefits: CollectionConfig = {
  slug: 'benefits',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      label: 'Benefit Title',
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
      name: 'icon',
      label: 'Icon',
      type: 'select',
      required: true,
      options: [
        { label: 'Heart', value: 'heart' },
        { label: 'Dollar Sign', value: 'dollar' },
        { label: 'Shield', value: 'shield' },
        { label: 'Users', value: 'users' },
        { label: 'Calendar', value: 'calendar' },
        { label: 'Medical', value: 'medical' },
        { label: 'Support', value: 'support' },
        { label: 'Home', value: 'home' },
        { label: 'Star', value: 'star' },
      ],
    },
    {
      name: 'detailedContent',
      label: 'Detailed Content',
      type: 'richText',
      admin: {
        description: 'Optional expanded content for this benefit',
      },
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'highlighted',
      label: 'Highlighted',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this benefit with special emphasis',
      },
    },
  ],
}