import * as React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import MobileDetect from 'mobile-detect';
import {
  config as FaConfig,
  dom as FaDom,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import './layout.scss';
import Header from '../Header';
import { actionCreators } from '../../state/actions';
import config from '../../../config';
import throttle from 'lodash/throttle';

FaConfig.autoAddCss = false;

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout = (props: LayoutPropsType) => {
  const { children } = props;
  const [isTop, setIsTop] = useState(true);
  const dispatch = useDispatch();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const setTop = useCallback(
    throttle(() => setIsTop(window.pageYOffset < window.innerHeight / 2), 250),
    []
  );

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      dispatch(actionCreators.setIsMobile(true));
    }

    document.addEventListener('scroll', setTop);
    return () => document.removeEventListener('scroll', setTop);
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Serif:wght@400;600;700&family=Rubik:wght@300&display=swap"
          rel="stylesheet"
        />
        <script>
          {`
            (function(d) {
              var config = {
                kitId: 'hfy8uue',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
          `}
        </script>
        <meta
          name="google-site-verification"
          content={config.googleSearchConsole ?? ''}
        />
        <style>{FaDom.css()}</style>
      </Helmet>

      <div id="layout">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="content">
          <main>{children}</main>
          <footer>
            <span>{`© ${new Date().getFullYear()} ${
              data.site.siteMetadata.author
            } | Theme by `}</span>
            <a href="https://github.com/junhobaik">JunhoBaik</a>
            <span>{` | Built with `}</span>
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>

        <div
          id="top"
          style={{
            opacity: isTop ? '0' : '1',
            pointerEvents: isTop ? 'none' : 'all',
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Fa icon={faAngleDoubleUp} />
        </div>
      </div>
    </>
  );
};

export default Layout;
