const columnSizes = [
  { title: 'Full', value: '1' },
  { title: 'Half', value: '2' },
  { title: 'One Third', value: '3' },
  { title: 'One Quarter', value: '4' }
]

const screenSizes = [
  { title: 'Mobile', value: 'xs' },
  { title: 'Tablet', value: 'sm' },
  { title: 'Desktop', value: 'md' },
  { title: 'Widescreen', value: 'lg' },
  { title: 'Full HD', value: 'xl' }
]

export const gridSettings = {
  title: 'Grid Settings',
  name: 'gridSettings',
  type: 'object',
  fields: screenSizes.map(size => ({
    title: size.title,
    name: size.value,
    type: 'string',
    of: [{ type: 'string' }],
    options: {
      list: columnSizes
    }
  }))
}

export const gridColumn = {
  name: 'gridColumn',
  type: 'array',
  title: 'Grid Column',
  of: [{ type: 'card' }]
}

export const grid = {
  name: 'grid',
  type: 'object',
  title: 'Grid',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { name: 'sectionTitles', type: 'sectionTitles' },
    { title: 'Columns', name: 'columns', type: 'gridColumn' },
    {
      title: 'Settings',
      name: 'settings',
      type: 'gridSettings'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
