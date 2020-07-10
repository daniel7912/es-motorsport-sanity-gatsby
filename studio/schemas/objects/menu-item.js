export const menuReferencedItem = {
  name: 'menuReferencedItem',
  type: 'object',
  title: 'Menu Item (Referenced)',
  fields: [
    {
      name: 'referencedItem',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'category' }, { type: 'page' }]
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'Set this to override the default label (referenced page name)'
    }
  ],
  preview: {
    select: {
      title: 'label',
      referenceTitle: 'referencedItem.title'
    },
    prepare({ title, referenceTitle }) {
      return {
        title: title || referenceTitle
      }
    }
  }
}

export const menuAbsoluteItem = {
  name: 'menuAbsoluteItem',
  type: 'object',
  title: 'Menu Item (Absolute)',
  fields: [
    { name: 'url', type: 'url', title: 'URL' },
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'openInNewWindow', type: 'boolean', title: 'Open in new window?' }
  ]
}
