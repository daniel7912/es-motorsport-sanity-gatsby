export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [{ type: 'menuReferencedItem' }, { type: 'menuAbsoluteItem' }]
    }
  ]
}
