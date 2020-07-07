export default {
  name: 'featureBlock',
  type: 'object',
  title: 'Feature Block',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Image', name: 'image', type: 'mainImage' },
    { title: 'Body', name: 'body', type: 'bodyPortableText' },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Image On Left', value: 'left' },
          { title: 'Image On Right', value: 'right' }
        ]
      }
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
