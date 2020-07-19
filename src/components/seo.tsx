import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SEOPropsType {
  description: string;
  lang: string;
  meta: any[];
  title: string;
}

function SEO(props: SEOPropsType) {
  const { description, lang, meta, title } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            language
          }
        }
      }
    `
  );

  const metaDescription = description ?? site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.language ?? lang,
      }}
      title={title}
      titleTemplate={title === 'Home' ? site.siteMetadata.title : `%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
