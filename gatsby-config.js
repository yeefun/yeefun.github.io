const config = require('./config');
const { title, description, author, googleAnalytics, siteUrl, language } = config;

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
              aliases: {},
              showLineNumbers: false,
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
        theme_color: '#fff',
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
        output: '/sitemap.xml',
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
      }`,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map(edge => {
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
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
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
        host: siteUrl,
        sitemap: `${siteUrl}${siteUrl[siteUrl.length - 1] !== '/' ? '/' : ''}sitemap.xml`,
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
