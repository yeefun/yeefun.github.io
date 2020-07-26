import * as React from 'react';
import Helmet from 'react-helmet';

const {
  title: defaultTitle,
  description: defaultDescription,
  author,
  language,
  siteUrl,
} = require('../../config');
const defaultOgImage = require('../images/og-default.png');

export interface SEOPropsType {
  meta: any[];
  title: string;
  description: string;
  pathname: string;
  ogImage: string;
}

function SEO(props: SEOPropsType) {
  const metaTitle = props.title !== defaultTitle ?
    `${props.title} | ${defaultTitle}` :
    props.title

  const ogUrl = `${siteUrl}${props.pathname}`
  const metaOg = [
    {
      property: 'og:title',
      content: metaTitle,
    },
    {
      property: 'og:description',
      content: props.description,
    },
    {
      property: 'og:url',
      content: ogUrl,
    },
    {
      property: 'og:image',
      content: props.ogImage,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:locale',
      content: language !== 'zh-Hant' ? language : 'zh_TW',
    },
  ]
  const metaTwitter = [
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: metaTitle,
    },
    {
      name: 'twitter:description',
      content: props.description,
    },
  ]
  const metaWebApp = [
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: props.description,
        },
        ...metaOg,
        ...metaTwitter,
        ...metaWebApp,
      ].concat(props.meta)}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  title: defaultTitle,
  description: defaultDescription,
  pathname: '',
  ogImage: defaultOgImage,
};

export default SEO;
