/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Slip N Score Soap Football`,
        siteUrl: `https://www.slipnscore.in`,
        image: `/logo.png`,
        description: `Slip N Score are your ultimate destination for an unforgettable fusion of football and slipperiness. Our one-of-a-kind arena invites thrill-seekers, sports enthusiasts, and anyone up for a unique adventure to experience the joy of football on a soapy stage. Our Arena: Step into our vibrant, action-packed arena where the rules of the game are simple: Slip, slide, score! Our specially designed, soapy surface promises endless hours of laughter, challenge, and excitement.`,
    },
    plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-robots-txt", {
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
        },

        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-8Q1WHL6H48",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "example.com",
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.slipnscore.in',
                sitemap: 'https://www.slipnscore.in/sitemap.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        }

    ]
};