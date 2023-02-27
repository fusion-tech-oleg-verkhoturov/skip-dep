import Link from 'next/link';

import { ROUTES, URLS } from '@/utils/constants';
import HeaderContainer from './index.style';
import Button from '../Button';
import NavigationLinks from '../NavigationLinks';

const Header = () => (
  <HeaderContainer className="header">
    <div className="header__container">
      <div className="header__left">
        <NavigationLinks />
      </div>
      <div className="header__right">
        <Link
            className="header__link"
            href={{ pathname: `${URLS.mainAppURL}${ROUTES.logIn}` } }
            passHref
            target="_blank"
          >
          Log In
        </Link>
        <Link
            href={{ pathname: `${URLS.mainAppURL}${ROUTES.signUp}` } }
            passHref
            target="_blank"
          >
          <Button type="button">
            SIGN UP
          </Button>
        </Link>
      </div>
    </div>
  </HeaderContainer>
);

export default Header;
