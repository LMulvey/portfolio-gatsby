module.exports = {
  pathPrefix: '/img',
  siteMetadata: {
    title: 'Lee Mulvey | Web Developer',
    meta: [
      {
        name: 'description',
        content:
          'Lee Mulvey is a web developer from Calgary, Alberta with experience in full-stack development including JavaScript, React, Redux, React Native, ES6, HTML, CSS, NextJS',
      },
      {
        name: 'keywords',
        content:
          'web developer, developer, freelance, react, redux, node, javascript, css, html, ruby, rails, postgresql, mongodb, gatsby',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-remark',
    'custom-projects',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
  ],
}
