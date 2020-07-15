const sharedFormFields = [
  {
    title: 'Label',
    name: 'label',
    type: 'string',
    validation: Rule => Rule.required()
  },
  {
    title: 'Placeholder',
    name: 'placeholder',
    type: 'string'
  },
  {
    title: 'Required',
    name: 'required',
    type: 'boolean'
  }
]

export const formEmailInputField = {
  type: 'object',
  title: 'Email Field',
  name: 'formEmailInputField',
  fields: [...sharedFormFields],
  preview: {
    select: {
      title: 'label'
    }
  }
}

export const formTextInputField = {
  type: 'object',
  title: 'Text Input Field',
  name: 'formTextInputField',
  fields: [...sharedFormFields],
  preview: {
    select: {
      title: 'label'
    }
  }
}

export const formTextAreaInputField = {
  type: 'object',
  title: 'Text Area Field (Multiline)',
  name: 'formTextAreaInputField',
  fields: [
    ...sharedFormFields,
    {
      title: 'Rows',
      name: 'rows',
      description: 'How many lines should be visible at any one time?',
      type: 'number',
      validation: Rule => Rule.min(1).max(8)
    }
  ],
  preview: {
    select: {
      title: 'label'
    }
  }
}

export const form = {
  name: 'form',
  type: 'object',
  title: 'Form',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Submit Button Text',
      name: 'submitButtonText',
      description: "If left blank, the default is 'submit'",
      type: 'string'
    },
    {
      title: 'Show Labels on Form',
      name: 'showLabels',
      type: 'boolean'
    },
    {
      title: 'Form Fields',
      name: 'formFields',
      type: 'array',
      of: [
        { type: 'formEmailInputField' },
        { type: 'formTextInputField' },
        { type: 'formTextAreaInputField' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
