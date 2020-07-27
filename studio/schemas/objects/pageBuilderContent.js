export default {
  name: 'pageBuilderContent',
  type: 'object',
  title: 'Content',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'For page builder reference only',
      validation: Rule => Rule.error('You have to fill out the title.').required()
    },
    { name: 'body', type: 'bodyPortableText', title: 'Body' }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Content'
      }
    }
  }
}
