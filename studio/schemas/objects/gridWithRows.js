export const gridRow = {
  name: 'gridRow',
  type: 'object',
  title: 'Grid Row',
  fields: [{ title: 'Columns', name: 'columns', type: 'gridColumn' }]
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
  fields: [{ title: 'Rows', name: 'rows', type: 'array', of: [{ type: 'gridRow' }] }],
  preview: {
    select: {
      title: 'title'
    }
  }
}
