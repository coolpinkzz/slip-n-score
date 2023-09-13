/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Slip N Score`,
        siteUrl: `https://www.slipnscore.in`,
        image: `/logo.png`,
        description: `Slip N Score are your ultimate destination for an unforgettable fusion of football and slipperiness. Our one-of-a-kind arena invites thrill-seekers, sports enthusiasts, and anyone up for a unique adventure to experience the joy of football on a soapy stage. Our Arena: Step into our vibrant, action-packed arena where the rules of the game are simple: Slip, slide, score! Our specially designed, soapy surface promises endless hours of laughter, challenge, and excitement.`,
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