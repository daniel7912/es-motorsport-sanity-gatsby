export const carourselSettings = {
  type: 'object',
  name: 'carouselSettings',
  fields: [
    {
      title: 'Containered?',
      name: 'containered',
      type: 'boolean',
      description:
        'Enable this option to display the carousel in a container. Leave disabled for a full width carousel.'
    },
    {
      title: 'Hide Carousel Content?',
      name: 'hideContent',
      type: 'boolean',
      description: 'Enable this option to hide all content and only show an image'
    }
  ]
}

export const carouselSlide = {
  type: 'object',
  name: 'carouselSlide',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'text',
      rows: 3
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
      rows: 3
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
      options: { hotspot: true }
    },
    {
      name: 'link',
      type: 'array',
      title: 'Link',
      of: [{ type: 'menuReferencedItem' }, { type: 'menuAbsoluteItem' }],
      validation: Rule => Rule.length(1)
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}

export const carousel = {
  name: 'carousel',
  type: 'object',
  title: 'Carousel',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [{ type: 'carouselSlide' }]
    },
    {
      title: 'Carousel Settings',
      type: 'carouselSettings',
      name: 'carouselSettings'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
