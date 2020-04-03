const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: .env.'${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentstack starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-contentstack',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key': process.env.CONTENTSTACK_API_KEY,
        'delivery_token': process.env.CONTENTSTACK_DELIVERY_TOKEN,
        'environment': process.env.CONTENTSTACK_ENVIRONMENT,
	      'cdn': process.env.CONTENTSTACK_CDN      
      },
    },
    'gatsby-plugin-offline',
  ],
}
