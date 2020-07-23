import * as React from 'react';
import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import MobileDetect from 'mobile-detect';
import { config as FaConfig, dom as FaDom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { useColorMode } from 'theme-ui';

import Header from '../Header';
import './layout.scss';

FaConfig.autoAddCss = false;

export interface LayoutPropsType {
  children: Object;
  isMobile: boolean;
  setIsMobile: Function;
}

const Layout = (props: LayoutPropsType) => {
  const { children, setIsMobile } = props;
  const [isTop, setIsTop] = useState(true);
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      setIsMobile(true);
    }

    const setTop = () => {
      if (window.pageYOffset < window.innerHeight / 2) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    document.addEventListener('scroll', setTop);
    return () => document.removeEventListener('scroll', setTop);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Serif:wght@400;600;700&family=Rubik:wght@300&display=swap" rel="stylesheet" />
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
        <meta name="google-site-verification" content={require('../../../config').googleSearchConsole ?? ''} />
        <style>{FaDom.css()}</style>
      </Helmet>

      <div id="layout" className={isDark ? 'dark' : 'light'}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="content">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} JunhoBaik, Built with
            {' '}
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

const mapStateToProps = ({ isMobile }: { isMobile: boolean }) => {
  return { isMobile };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsMobile: (isMobile: boolean) => dispatch({ type: 'SET_IS_MOBILE', isMobile }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
