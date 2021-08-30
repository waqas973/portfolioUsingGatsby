/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    title: 'Webdev portfolio',
    description: 'This is  web portfolio site',
    author: 'Waqas',
},
  plugins: [ 
    `gatsby-plugin-react-helmet`,
   
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: [ "400", "700"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
            {
              family : 'Open Sans'
            }
          ],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `hero_img`,
      path: `${__dirname}/src/assets/`,
    },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000, // Defaults to 100
      collectionTypes: [`Jobs`,`Projects`,`Blogs`],
      singleTypes: [`About`],
    },
  },
],
}
