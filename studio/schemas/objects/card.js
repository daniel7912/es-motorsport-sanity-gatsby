export default {
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    { title: 'Image', name: 'image', type: 'image' },
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Body', name: 'body', type: 'bodyPortableText' },
    {
      name: 'link',
      type: 'array',
      title: 'Button Links',
      of: [{ type: 'menuReferencedItem' }, { type: 'menuAbsoluteItem' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
