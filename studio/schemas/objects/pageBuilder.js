export default {
  name: 'pageBuilder',
  type: 'array',
  title: 'Page Builder',
  of: [
    {
      type: 'mainImage',
      options: { hotspot: true }
    },
    {
      type: 'pageBuilderContent',
      title: 'Content'
    },
    {
      type: 'carousel',
      title: 'Carousel'
    },
    {
      type: 'featureBlock',
      title: 'Feature Block'
    },
    {
      type: 'grid',
      title: 'Grid'
    }
  ]
}