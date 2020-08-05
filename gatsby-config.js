module.exports = {
  siteMetadata: {
    title: `Centrum Rehabilitacji Bartosz Burzyński`,
    description: `Proponujemy fizjoterapię, którą przeprowadzamy w profesjonalnym gabinecie oraz w domu pacjenta. Terapia prowadzona jest przez wyspecjalizowanych fizjoterapeutów każdorazowo ma ona charakter kompleksowy oraz indywidualny.`,
    author: `karol.zeluk@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Centrum Rehabilitacji Bartosz Burzyński`,
        short_name: `Centrum Reh`,
        start_url: `/`,
        background_color: `#f1f2f4`,
        theme_color: `#1b1f4c`,
        display: `standalone`,
        icon: `src/images/logo2.png`,
        cache_busting_mode: `none`
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/layout.css", "src/css/style.css"]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
