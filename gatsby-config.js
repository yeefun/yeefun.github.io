const config = require('./config');
const {
  title,
  description,
  author,
  googleAnalytics,
  siteUrl,
  language,
} = config;

const gatsbyConfig = {
  siteMetadata: { title, description, author, siteUrl, language },

  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleAnalytics,
      },
    },

    'gatsby-plugin-react-helmet',

    'gatsby-plugin-typescript',

    'gatsby-plugin-theme-ui',

    'gatsby-plugin-sass',

    'gatsby-transformer-sharp',

    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/_posts`,
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        pedantic: false,
        commonmark: false,
        tableOfContents: {
          maxDepth: 3,
        },
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              showCaptions: true,
              markdownCaptions: ['title'],
              backgroundColor: 'transparent',
              srcSetBreakpoints: [590, 1180],
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
              aliases: {
                react: 'jsx',
                javascriptreact: 'jsx',
                'javascript react': 'jsx',
                typescriptreact: 'tsx',
                'typescript react': 'tsx',
              },
            },
          },
          'gatsby-remark-external-links',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        description,
        start_url: '/',
        lang: language,
        background_color: '#fff',
        theme_color: '#6a737d',
        display: 'standalone',
        icon: 'src/images/icon.svg',
      },
    },

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
        omitGoogleFont: true,
      },
    },

    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                  context {
                    lastmod
                  }
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: 'daily',
              lastmod: edge.node.context.lastmod,
              priority: 0.7,
            };
          });
        },
      },
    },

    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                const fullUrl =
                  site.siteMetadata.siteUrl + edge.node.fields.slug;

                return Object.assign({}, edge.node.frontmatter, {
                  url: fullUrl,
                  guid: fullUrl,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }, limit: 10
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        description
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `${title} | Feed`,
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};

if (process.env.NODE_ENV === 'development') {
  gatsbyConfig.plugins.push({
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/_drafts`,
      name: 'markdown-pages',
    },
  });
}

module.exports = gatsbyConfig;
