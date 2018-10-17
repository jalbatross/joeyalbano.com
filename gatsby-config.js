module.exports = {
  siteMetadata: {
    title: 'Joey Albano',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-catch-links',
            {
               resolve:'gatsby-source-filesystem',
               options: {
                  path: `${__dirname}/src/pages`,
                  name: 'pages',
               },
            },
            `gatsby-plugin-sharp`,

            `gatsby-transformer-remark`,
            {
              resolve: `gatsby-transformer-remark`,
                options: 
                {
                  plugins: 
                  [
                    {
                      resolve: `gatsby-remark-images`,
                      options: {
                        maxWidth: 500,
                      }
                    },
                    "gatsby-remark-prismjs", 
                    "gatsby-remark-copy-linked-files",
                  ],
                },
            },
         ],
};
