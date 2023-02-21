import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { ROUTES, URLS } from '@/utils/constants';
import HeaderContainer from './index.style';
import DownSVG from '../../../public/images/chevron-down.svg';
import Button from '../Button';

const Header = () => {
  const { pathname } = useRouter();
  const navigation = useMemo(() => {
    const links = [
      { isActive: true,
        component: (
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={181.5}
            height={50}
            priority
          />
        ),
        path: ROUTES.home,
      },
      { isActive: false, component: 'Pricing', path: ROUTES.pricing },
      { isActive: false, component: 'FAQ', path: ROUTES.faq },
      { isActive: false, component: 'Blog', path: ROUTES.blog },
      {
        isActive: false,
        component: <div className="header__affiliate">Affiliates <DownSVG /></div>,
        path: ROUTES.affiliates,
      },
    ];

    return links.map((link) => ({ ...link, isActive: link.path === pathname }));
  }, [pathname]);

  return (
    <HeaderContainer className="header">
      <div className="header__container">
        <div className="header__left">
          <nav className="header__navigation">
            {navigation.map((link) => (
              <Link
                key={link.path}
                className={classnames({ header__link: true, 'header__link--active': link.isActive })}
                href={link.path}
              >
                {link.component}
              </Link>
            ))}
          </nav>
        </div>
        <div className="header__right">
          <Link
            className="header__link header__link--active"
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
};

export default Header;
