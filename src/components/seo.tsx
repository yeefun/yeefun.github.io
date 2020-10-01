/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import Helmet from 'react-helmet';

import {
  title as defaultTitle,
  description as defaultDescription,
  author,
  language,
  siteUrl,
} from '../../config';

interface SEOPropsType {
  meta: any[];
  title: string;
  description: string;
  pathname: string;
  ogImage: string;
  ogType: string;
}

function SEO(props: SEOPropsType) {
  const metaTitle =
    props.title !== defaultTitle
      ? `${props.title} | ${defaultTitle}`
      : props.title;

  const ogUrl = `${siteUrl}${props.pathname}`;
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
      content: props.ogType,
    },
    {
      property: 'og:locale',
      content: language !== 'zh-Hant' ? language : 'zh_TW',
    },
  ];
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
  ];
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
  ];

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
  ogImage: '/og-default.png',
  ogType: 'website',
};

export default SEO;
