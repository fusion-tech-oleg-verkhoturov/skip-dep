import Link from 'next/link';

import Button from '@/components/Button';
import Card from '@/components/Card';
import { URLS, ROUTES } from '@/utils/constants';
import { DescriptionContainer, BlockTitleContainer } from './index.style';

const DescriptionBlock = () => (
  <DescriptionContainer className="home-description">
    <BlockTitleContainer className="block-title">
      <p className="block-title__pre-title">Why Skip Trace With Easy Button Skip Tracing?</p>
      <h1 className="block-title__title">WHAT IS SKIP TRACING?</h1>
      <p className="block-title__sub-title">
        We are the first skip tracing company that was built by real estate investors actually doing
        deals, allowing you to get the data needed to scale your leadflow.
      </p>
    </BlockTitleContainer>
    <div className="home-description__content">
      <div className="home-description__cards-container">
        <Card className="home-description__card">
          <span className="home-description__highlight">Easy Button Skip tracing</span> is an effective tool to find property owners.
        </Card>
        <Card className="home-description__card home-description__card--right">
          This tool is designed to find the latest contact information on your prospects.
        </Card>
        <Card className="home-description__card home-description__card--center">
          The information can range from the owner&apos;s address, phone number or other known
          relatives associated with the property.
        </Card>
        <Link
          passHref
          href={{ pathname: `${URLS.mainAppURL}${ROUTES.signUp}` } }
          target="_blank"
          className="home-description__link"
        >
          <Button type="button">
            TRY NOW
          </Button>
        </Link>
      </div>
    </div>
  </DescriptionContainer>
);

export default DescriptionBlock;
