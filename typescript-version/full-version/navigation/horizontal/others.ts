export default [
  {
    title: 'Others',
    icon: { icon: 'ri-more-line' },
    children: [
      {
        title: 'Access Control',
        icon: { icon: 'ri-shield-line' },
        to: 'access-control',
        action: 'read',
        subject: 'AclDemo',
      },
      {
        title: 'Nav Levels',
        icon: { icon: 'ri-menu-line' },
        children: [
          {
            title: 'Level 2.1',
            to: null,
          },
          {
            title: 'Level 2.2',
            children: [
              {
                title: 'Level 3.1',
                to: null,
              },
              {
                title: 'Level 3.2',
                to: null,
              },
            ],
          },
        ],
      },
      {
        title: 'Disabled Menu',
        to: null,
        icon: { icon: 'ri-eye-off-line' },
        disable: true,
      },
      {
        title: 'Raise Support',
        href: 'https://themeselection.com/support/',
        icon: { icon: 'ri-lifebuoy-line' },
        target: '_blank',
      },
      {
        title: 'Documentation',
        href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/',
        icon: { icon: 'ri-article-line' },
        target: '_blank',
      },
    ],
  },
]
