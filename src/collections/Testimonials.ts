import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
  },
  fields: [
    {
      name: 'name',
      label: 'Surrogate Name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        description: 'City, State',
      },
    },
    {
      name: 'image',
      label: 'Photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'testimonial',
      label: 'Testimonial',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The surrogate\'s story in their own words',
      },
    },
    {
      name: 'videoUrl',
      label: 'Video Testimonial URL',
      type: 'text',
      admin: {
        description: 'Optional YouTube or Vimeo URL',
      },
    },
    {
      name: 'journeyDetails',
      label: 'Journey Details',
      type: 'group',
      fields: [
        {
          name: 'numberOfJourneys',
          label: 'Number of Journeys',
          type: 'number',
          admin: {
            description: 'How many times has this surrogate helped families?',
          },
        },
        {
          name: 'yearStarted',
          label: 'Year Started',
          type: 'number',
        },
      ],
    },
    {
      name: 'featured',
      label: 'Featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this testimonial prominently on the homepage',
      },
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
}