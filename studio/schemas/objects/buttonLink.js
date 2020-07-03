export default {
  name: 'buttonLink',
  type: 'object',
  title: 'Button Link',
  fields: [
    { name: 'label', type: 'string', title: 'Label' },
    { name: 'url', type: 'string', title: 'URL' }
  ],
  preview: {
    select: {
      title: 'label'
    }
  }
}
