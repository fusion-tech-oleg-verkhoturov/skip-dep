import Link from 'next/link';

import { URLS } from '@/utils/constants';
import NavigationLinks from '../NavigationLinks';
import FooterStyled from './index.style';
import FacebookSvg from '../../../public/images/facebook-logo.svg';
import TwitterSvg from '../../../public/images/twitter-logo.svg';
import InstaSvg from '../../../public/images/insta-logo.svg';

const logos = [
  { svg: <FacebookSvg />, url: URLS.facebook },
  { svg: <TwitterSvg />, url: URLS.twtter },
  { svg: <InstaSvg />, url: URLS.insta },
];

const Footer = () => (
  <FooterStyled className="footer">
    <div className="footer__block footer__block--first">
      <NavigationLinks isLight />
      <div className="footer__logos">
        {logos.map((logo) => (
          <Link
            key={logo.url}
            passHref
            href={{ pathname: logo.url } }
            target="_blank"
            className="footer__logos-link"
          >
            {logo.svg}
          </Link>
        ))}
      </div>
    </div>
    <div className="footer__block">
      <div className="footer__links">
        <Link href="#" className="footer__link">
          Terms of Service
        </Link>
        <Link href="#" className="footer__link">
          Privacy Policy
        </Link>
        <Link href="#" className="footer__link">
          Personal Information
        </Link>
      </div>
      <span className="footer__rights">©BatchSkipTracing 2022. All rights reserved.</span>
    </div>
  </FooterStyled>
);

export default Footer;
