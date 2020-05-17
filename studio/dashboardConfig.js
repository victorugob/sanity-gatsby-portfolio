export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ec0daf25ae70a9b1d859a47',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n3y9yr3u',
                  apiId: 'd9222fb8-3867-470b-ba7e-90f25c21bbbe'
                },
                {
                  buildHookId: '5ec0daf29a0850ea7fe50aa1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7qetz442',
                  apiId: 'c431a929-d876-4999-8c36-c5ddbd55c57f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/victorugob/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7qetz442.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
