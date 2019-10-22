require("dotenv").config({
  path: `.env`, //.${process.env.NODE_ENV}
})

module.exports = {
  siteMetadata: {
    title: `SebToombs.com`,
    description: `Seb Toombs is a web developer, digital consultant and UX design enthusiast in Hobart, Tasmania`,
    author: `@sebtoombs`,
  },
  plugins: [
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seb Toombs`,
        short_name: `Seb Toombs`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#EC7155`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },*/
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

      //`gatsby-transformer-strapi-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /*{
      resolve: `gatsby-source-strapi-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: "StrapiTest",
        // This is field under which it's accessible
        fieldName: "strapiTest",
        // Url to query from
        url: "http://localhost:1337/graphql",
      },
    },*/
    /*{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`post`, `tag`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "seb",
          password: "kinXLPWrDcWpH2WbYuCZ",
        },
      },
    },*/
    /*{
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "Strapi",
        // This is field under which it's accessible
        fieldName: "strapi",
        // Url to query from
        url: "http://localhost:1337/graphql",
      },
    },*/

    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qppywcli',
        dataset: 'post',
        token: process.env.SANITY_TOKEN,
      },
    },


    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,



    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },


    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `excerpt`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          SanityPost: {
            title: node => node.title,
            tags: node => node.categories.map(tag=>tag.title),
            slug: node => node.slug,
            excerpt: node => node.excerpt
          },
        },
      },
    },

    /*{
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-TBFRWMK",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        gtmAuth: "EHGGMH3LpJqREJeqeghjWA", //"7jXVC0gaOjs8Nr1Xjc-Njg", //live: EHGGMH3LpJqREJeqeghjWA
        gtmPreview: "env-2"//"env-5", //live: env-2
        /dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    }*/
  ],
}
