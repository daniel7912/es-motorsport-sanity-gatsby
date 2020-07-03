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
      title: 'Link Button',
      name: 'link',
      type: 'buttonLink'
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
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
