export default {
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    { title: 'Image', name: 'image', type: 'image' },
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Body', name: 'body', type: 'bodyPortableText' },
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
