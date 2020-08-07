const CONST = require("./const");

module.exports = {
  title: `realgo's TIL`,
  description: 'Today I Learned',
  base: "/TIL/",
  head: [
    ['link', { rel: 'icon', href: '/logo.jpeg' }],
  ],
  themeConfig: {
    logo: '/logo.jpeg',
    author: 'realgo (github.com/realgoways)',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'github', link: 'https://github.com/realgoways/TIL', target: '_blank' }
    ],
    sidebar: [
      {
        title: 'Today I Learned',
        path: '/about/',
      }, {
        title: 'Concept',
        children: CONST.ConceptList,
      }, {
        title: 'Git',
        children: CONST.GitList,
      }, {
        title: 'VuePress',
        children: CONST.VuePressList,
      },
    ],
  },
  plugins: [
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      // publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      // modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      customMeta: (add, context) => {

        const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            siteTitle, title, description, author, tags,
            twitterCard, type, url, image,
        } = context
    },
    }],
  ]
}