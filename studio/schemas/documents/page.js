import { format } from 'date-fns'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'hideTitle',
      title: 'Hide Page Title?',
      description:
        "Enable this option if you don't want the page title to be displayed. For example, on the home page.",
      type: 'boolean'
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    }
  }
}
