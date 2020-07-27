export default {
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    { title: 'Image', name: 'image', type: 'mainImage' },
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Body', name: 'body', type: 'bodyPortableText' },
    {
      name: 'link',
      type: 'array',
      title: 'Button Links',
      of: [{ type: 'menuReferencedItem' }, { type: 'menuAbsoluteItem' }]
    },
    {
      name: 'imageLinks',
      type: 'array',
      title: 'Image Hover Links',
      description: 'Add extra links that are visible when the user hovers over the card image',
      of: [{ type: 'menuReferencedItem' }, { type: 'menuAbsoluteItem' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
