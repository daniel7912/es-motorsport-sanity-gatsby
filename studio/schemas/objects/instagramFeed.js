export default {
  name: 'instagramFeed',
  type: 'object',
  title: 'Instagram Feed',
  fields: [
    { title: 'Title', name: 'title', type: 'string', description: 'E.g. My Instagram Feed' }
    // {
    //   title: 'Instagram User ID',
    //   name: 'instagramUserId',
    //   type: 'string',
    //   description:
    //     'This must be your user ID, not your username. You can find your user ID here - https://www.instafollowers.co/find-instagram-user-id'
    // }
  ],
  preview: {
    prepare() {
      return {
        title: 'Instagram Feed'
      }
    }
  }
}
