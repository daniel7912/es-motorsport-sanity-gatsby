export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'aca8c868-457e-45dd-a0e6-1ae001d1873f',
            buildHookId: '5efcaabf5b24edb22846f659',
            name: 'es-motorsport-sanity-gatsby-studio'
          },
          {
            title: 'Website',
            apiId: 'e661cd48-8a57-4f1c-92d0-6970c7bfb503',
            buildHookId: '5efcaabf8d7d1bb67d8a584b',
            name: 'es-motorsport-sanity-gatsby'
          }
        ]
      }
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: '',
                  apiId: ''
                },
                {
                  buildHookId: '',
                  title: 'Blog Website',
                  name: '',
                  apiId: ''
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daniel7912/es-motorsport-sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: '', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
