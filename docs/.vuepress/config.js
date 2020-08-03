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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'github', link: 'https://github.com/realgoways/TIL', target: '_blank' }
    ],
    sidebar: [
      {
        title: 'Today I Learned',
        path: '/about/',
        collapsable: false,
      },
      {
        title: 'Git',
        children: CONST.GitList,
        collapsable: false,
      }
    ],
  },
  plugins: ['@vuepress/back-to-top']
}