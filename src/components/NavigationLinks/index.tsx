import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { ROUTES } from '@/utils/constants';
import Link from 'next/link';
import DownSVG from '../../../public/images/chevron-down.svg';
import LogoSVG from '../../../public/images/logo.svg';
import LogoLightSVG from '../../../public/images/logo-light.svg';
import StyledNav from './index.style';

type PropsType = {
  isLight?: boolean
}

const links = [
  { isActive: true,
    component: <LogoSVG />,
    path: ROUTES.home,
  },
  { isActive: false, component: 'Pricing', path: ROUTES.pricing },
  { isActive: false, component: 'FAQ', path: ROUTES.faq },
  { isActive: false, component: 'Blog', path: ROUTES.blog },
  {
    isActive: false,
    component: <div className="navigation__affiliate">Affiliates <DownSVG /></div>,
    path: ROUTES.affiliates,
  },
];

const NavigationLinks: React.FC<PropsType> = ({ isLight = false }) => {
  const { pathname } = useRouter();
  const navigation = useMemo(() => links.map((link) => ({
    ...link,
    isActive: link.path === pathname,
    component: link.path === ROUTES.home && isLight ? <LogoLightSVG /> : link.component,
  })), [pathname, isLight]);

  return (
    <StyledNav className="navigation" isLight={isLight}>
      {navigation.map((link) => (
        <Link
          key={link.path}
          className={classnames({ navigation__link: true, 'navigation__link--active': link.isActive })}
          href={link.path}
        >
          {link.component}
        </Link>
      ))}
    </StyledNav>
  );
};

export default NavigationLinks;
