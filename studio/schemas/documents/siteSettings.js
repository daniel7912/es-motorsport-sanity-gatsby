export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'mainImage'
    },
    {
      name: 'facebookURL',
      type: 'string',
      title: 'Facebook URL'
    },
    {
      name: 'instagramURL',
      type: 'string',
      title: 'Instagram URL'
    },
    {
      name: 'contactDetails',
      type: 'contactDetails',
      title: 'Contact Details'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{ type: 'author' }]
    },
    {
      name: 'mainMenu',
      type: 'reference',
      title: 'Main Menu',
      to: [{ type: 'menu' }]
    },
    {
      name: 'footerMenu1',
      type: 'reference',
      title: 'Footer Menu 1',
      to: [{ type: 'menu' }]
    },
    {
      name: 'footerMenu2',
      type: 'reference',
      title: 'Footer Menu 2',
      to: [{ type: 'menu' }]
    },
    {
      name: 'footerMenu3',
      type: 'reference',
      title: 'Footer Menu 3',
      to: [{ type: 'menu' }]
    }
  ]
}
