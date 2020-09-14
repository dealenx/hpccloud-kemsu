module.exports = {
  base: '/hpccloud-kemsu/',
  head: [['link', { rel: 'icon', href: '/icon/favicon-196x196.png' }]],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'ru-RU',
      title: 'HPCCloud Kemsu',
      description: 'Документация по веб-платформе HPCCloud',
    },
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'HPCCloud Kemsu',
      description: 'Simplify HPC workflows and infrastructure management',
    },
  },

  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Языки',
        // label for this locale in the language dropdown
        label: 'Русский',

        // Aria Label for locale in the dropdown
        ariaLabel: 'Языки',
        lastUpdated: 'Последнее обновление', // string | boolean
        nav: [
          { text: 'Документация', link: '/general/introduction' },
          {
            text: 'Github',
            link: 'https://github.com/dealenx/hpccloud-kemsu',
          },
        ],
        sidebar: [
          {
            title: 'Основы',
            collapsable: false,
            children: [
              '/general/introduction',
              '/general/installation',
              '/general/getting-started',
              '/general/troubleshooting',
              '/general/glossary',
            ],
          },
          {
            title: 'Руководство пользователя',
            collapsable: false,
            children: [
              '/usage/create-account',
              '/usage/trad-cluster',
              /*'/usage/aws-profiles',*/
              /*'/usage/ebs-volumes',*/
              '/usage/creating',
              /*'/usage/simput',*/
              '/usage/running',
              '/usage/sharing',
            ],
          },
        ],
      },
      '/en/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',

        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        lastUpdated: 'Last updated', // string | boolean

        nav: [
          { text: 'Documentation', link: '/en/general/introduction' },
          {
            text: 'Github',
            link: 'https://github.com/dealenx/hpccloud-kemsu',
          },
        ],
        sidebar: [
          {
            title: 'Basics',
            collapsable: false,
            children: [
              '/en/general/introduction',
              '/en/general/getting-started',
              '/en/general/troubleshooting',
              '/en/general/glossary',
            ],
          },
          {
            title: 'Usage',
            collapsable: false,
            children: [
              '/en/usage/create-account',
              '/en/usage/trad-cluster',
              '/en/usage/aws-profiles',
              '/en/usage/ebs-volumes',
              '/en/usage/creating',
              '/en/usage/simput',
              '/en/usage/running',
              '/en/usage/sharing',
            ],
          },
          /*{
            title: 'Development',
            collapsable: false,
            children: [
              '/en/development/dev-intro',
              '/en/development/panels',
              '/en/development/redux',
              '/en/development/tools',
            ],
          },
          {
            title: 'Workflow',
            collapsable: false,
            children: [
              '/en/workflows/introduction',
              '/en/workflows/adding',
              '/en/workflows/pages',
            ],
          },*/
        ],
      },
    },
  },
};
