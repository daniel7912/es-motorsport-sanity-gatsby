export const carouselSlide = {
  type: 'object',
  name: 'carouselSlide',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
      options: { hotspot: true }
    }
  ],
  preview: {
    select: {
      title: 'slide.title'
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
