import { useState } from 'react';

import Input from '@/components/Input';
import Link from 'next/link';
import { BlockTitleContainer, NewsContainer } from './index.style';
import ArrowSVG from '../../../public/images/arrow-right.svg';

const NewsBlock = () => {
  const [email, setEmail] = useState('');

  return (
    <NewsContainer className="home-news">
      <div className="home-news__container">
        <BlockTitleContainer className="block-title" isWhiteTxt >
          <p className="block-title__pre-title">news</p>
          <h1 className="block-title__title home-about__title">Easy button leads</h1>
          <p className="block-title__sub-title">
            Enter your email to get the latest news about our service with important information
          </p>
        </BlockTitleContainer>
        <div className="home-news__content" >
          <div className="home-news__input">
            <Input
              value={email}
              onChange={setEmail}
              placeHolder="Email@example.com"
              icon={<ArrowSVG className="home-news__arrow" />}
            />
          </div>
          <p className="home-news__input-description">
            {`We will not share your information with anyone else.
            By clicking the subscribe button, you agree to our `}
            <Link href="#" className="home-news__link">Terms of Use</Link>
            {' and '}
            <Link href="#" className="home-news__link">Privacy Policy</Link>
            .
          </p>
        </div>
      </div>
    </NewsContainer>
  );
};

export default NewsBlock;
