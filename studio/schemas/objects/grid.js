const columnSizes = [
  { title: 'Full', value: '1' },
  { title: 'Half', value: '2' },
  { title: 'One Third', value: '3' },
  { title: 'One Quarter', value: '4' },
  { title: 'One Fifth', value: '5' },
  { title: 'One Sixth', value: '6' }
]

const gapSizes = [
  { title: '2', value: '2' },
  { title: '4', value: '4' },
  { title: '6', value: '6' },
  { title: '8', value: '8' },
  { title: '10', value: '10' },
  { title: '12', value: '12' },
  { title: '16', value: '16' },
  { title: '20', value: '20' }
]

const screenSizes = [
  { title: 'Mobile', value: 'xs' },
  { title: 'Tablet', value: 'sm' },
  { title: 'Desktop', value: 'md' },
  { title: 'Widescreen', value: 'lg' },
  { title: 'Full HD', value: 'xl' }
]

export const gridColumnSizes = {
  title: 'Grid Column Sizes',
  name: 'gridColumnSizes',
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

export const gridGapSizes = {
  title: 'Grid Gap Sizes',
  name: 'gridGapSizes',
  type: 'object',
  fields: screenSizes.map(size => ({
    title: size.title,
    name: size.value,
    type: 'string',
    of: [{ type: 'string' }],
    options: {
      list: gapSizes
    }
  }))
}

export const gridColumn = {
  name: 'gridColumn',
  type: 'array',
  title: 'Grid Column',
  of: [{ type: 'card' }, { type: 'imageLink' }]
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
      title: 'Column Sizes',
      name: 'columnSizes',
      type: 'gridColumnSizes'
    },
    {
      title: 'Gap Sizes',
      name: 'gapSizes',
      type: 'gridGapSizes'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
