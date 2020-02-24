module.exports = {
  siteMetadata: {
    title: 'SESA | Software Engineering Student Association',
    description: `uOttawa SESA strives to enrich student life while building a networking platform in order to aid students in landing real world experiences.`,
    keywords:
      'SESA, uOttawa, Software Engineering Student Association, Club, Society, Events, First Year Advice, Join, University of Ottawa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/resources/images/black-sesa-logo-simple.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
