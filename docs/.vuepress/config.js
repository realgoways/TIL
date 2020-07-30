const CONST = require("./const");

module.exports = {
  title: `realgo's TIL`,
  description: 'Today I Learned',
  base: "/TIL/",
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ],

  },
  sidebar: [
    {
      title: 'Git',
      path: '/git/',
      children: CONST.GitList
    }
  ],
  plugins: ['@vuepress/back-to-top']
}