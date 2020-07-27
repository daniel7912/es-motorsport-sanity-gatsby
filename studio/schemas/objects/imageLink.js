export default {
  name: 'imageLink',
  type: 'object',
  title: 'Image Link',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Image', name: 'image', type: 'mainImage' },
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
