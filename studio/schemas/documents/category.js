const categoryTemplates = [
  { title: 'Standard Category', value: 'category' },
  { title: 'Vehicles For Sale', value: 'vehicles-for-sale' }
]

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      title: 'Template',
      name: 'template',
      type: 'string',
      of: [{ type: 'string' }],
      options: {
        list: categoryTemplates
      }
    }
  ]
}
