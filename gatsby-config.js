module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-catch-links',
            {
               resolve:'gatsby-source-filesystem',
               options: {
                  path: '/home/joey/Documents/Gits/myBlog/src/pages',
                  name: 'pages',
               },
            },

            `gatsby-transformer-remark`,
            {
              resolve: `gatsby-transformer-remark`,
                options: {
                  plugins: [
                    `gatsby-remark-prismjs`,
                  ],
                },
            },
         ],
};
