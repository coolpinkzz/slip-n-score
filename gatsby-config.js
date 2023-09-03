/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `SlipNScore`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    },
        {
            resolve: `gatsby-plugin-theme-ui`,
            options: {
                preset: "@theme-ui/preset-funk",
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `'Architects Daughter', cursive`,
                        file: `https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap`,
                    },
                    {
                        name: `Bubblegum Sans', cursive`,
                        file: `https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap`,
                    },
                    {
                        name: `'Roboto Slab', serif`,
                        file: `https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap`
                    }
                ],
            }
        }
    ]
};