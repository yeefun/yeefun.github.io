import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faTags, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import './header.scss';
import { RootState } from '../../state/reducer';
import { actionCreators } from '../../state/actions';
import config from '../../../config';

interface headerPropsType {
  siteTitle: string;
}

const Header = (props: headerPropsType) => {
  const { siteTitle } = props;
  const { isMobile, path, size } = useSelector((state: RootState) => state);
  const [, setYPos] = useState(0);
  const [isHide, setIsHide] = useState(false);
  const dispatch = useDispatch();

  const setPath = useCallback(
    (path: string, size?: string) =>
      dispatch(actionCreators.setPath(path, size)),
    []
  );

  useEffect(() => {
    const bio: HTMLDivElement | null = document.querySelector('.bio');
    if (bio) {
      if (isHide === true) {
        bio.style.opacity = '0';
        bio.style.pointerEvents = 'none';
      } else {
        bio.style.opacity = '1';
        bio.style.pointerEvents = 'all';
      }
    }
  }, [isHide]);

  useEffect(() => {
    const profile: HTMLImageElement | null = document.querySelector(
      '.header-profile-image-wrap>img'
    );

    const prevPath: string = path;
    const currPath: string = location.pathname;

    if (profile) {
      if (currPath === prevPath) {
        setPath(location.pathname, currPath !== '/' ? '25px' : '50px');
      }

      if (prevPath !== '/' && currPath === '/') {
        setPath(location.pathname, '50px');
      }

      if (prevPath === '/' && currPath !== '/') {
        setPath(location.pathname, '25px');
      }

      if (prevPath !== '/' && currPath !== '/') {
        setPath(location.pathname);
      }
    } else {
      setPath(location.pathname);
    }

    const setVisible = () => {
      setYPos((prevYPos) => {
        const currentYPos = window.pageYOffset;

        if (currentYPos > 0) setIsHide(prevYPos < currentYPos);

        return currentYPos;
      });
    };
    document.addEventListener('scroll', setVisible);
    return () => document.removeEventListener('scroll', setVisible);
  }, []);

  return (
    <header
      id="Header"
      className={`${isHide ? 'hide' : 'show'} ${isMobile ? 'mobile' : ''}`}
    >
      <div className="header-title">
        <Link to="/">
          <div className="header-profile-image-wrap">
            <img
              src={require(`../../images/${config.profileImageFileName}`)}
              alt="title profile picture"
              width={size || '25px'}
              height={size || '25px'}
            />
          </div>
        </Link>

        <Link to="/">
          <h1 className="header-title-text">{siteTitle}</h1>
        </Link>
      </div>

      <nav id="nav">
        <ul>
          <li>
            <div className="tag-wrap">
              <Link to="/tags">
                <Fa icon={faTags} />
              </Link>
            </div>
          </li>

          <li>
            <div className="search-wrap">
              <Link to="/search" className="search">
                <Fa icon={faSearch} />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
