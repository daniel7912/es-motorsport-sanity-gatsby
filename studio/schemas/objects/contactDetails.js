export const phoneNumber = {
  name: 'phoneNumber',
  type: 'object',
  title: 'Phone Number',
  fields: [
    { name: 'phoneNumber', title: 'Phone Number', type: 'string' },
    { name: 'phoneNumberDisplay', title: 'Phone Number (Display)', type: 'string' }
  ]
}

export const contactDetails = {
  name: 'contactDetails',
  type: 'object',
  title: 'Contact Details',
  fields: [
    { name: 'phoneNumber', title: 'Phone Number', type: 'phoneNumber' },
    { name: 'emailAddress', title: 'Email Address', type: 'string' },
    { name: 'address', title: 'Address', type: 'bodyPortableText' }
  ]
}
