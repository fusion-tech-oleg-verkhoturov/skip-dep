import Link from 'next/link';

import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { URLS, ROUTES } from '@/utils/constants';
import { BlockTitleContainer, SourceContainer } from './index.style';

const chips = ['credit bureaus', 'motor-vehicle-records', 'courts', 'business-regulations', 'public repositories'];

const SourceBlock = () => (
  <SourceContainer className="home-source">
    <div className="home-source__screen-container" />
    <div className="home-source__main-container">
      <BlockTitleContainer className="block-title home-source__title">
        <p className="block-title__pre-title">technology</p>
        <h1 className="block-title__title">HOW WE SOURCE DATA</h1>
        <p className="block-title__sub-title">
          We aggregate millions of data points from online and offline sources.
        </p>
      </BlockTitleContainer>
      <div className="home-source__chips">
        {chips.map((chip) => (
          <Chip className="home-source__chip" key={chip}>{chip}</Chip>
        ))}
      </div>
      <Link
        className="home-source__link"
        href={{ pathname: `${URLS.mainAppURL}${ROUTES.signUp}` } }
        passHref
        target="_blank"
      >
        <Button type="button">
          TRY NOW
        </Button>
      </Link>
    </div>
  </SourceContainer>
);

export default SourceBlock;
