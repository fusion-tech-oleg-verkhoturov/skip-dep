import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { URLS, ROUTES } from '@/utils/constants';
import { BlockTitleContainer, MainInfoContainer } from './index.style';
import DashBoardImage from '../../../public/images/dashboard-screen.png';

const chips = [
  'Tier-One Data',
  'Premium Quality Data',
  'Nationwide Access',
  'Industry Leading Accuracy Rate',
  'No Long-Term Contracts',
];

const MainInfo = () => (
  <MainInfoContainer className="home-main">
    <BlockTitleContainer className="block-title">
      <p className="block-title__pre-title">Data Tailored To Real Estate Investors</p>
      <h1 className="block-title__title">Your Search For Phone Numbers Ends Here</h1>
      <p className="block-title__sub-title">We help real estate investors connect with homeowners</p>
      <Link
        passHref
        href={{ pathname: `${URLS.mainAppURL}${ROUTES.signUp}` } }
        target="_blank"
        className="home-main__start"
      >
        <Button type="button">
          Get Started
        </Button>
      </Link>
    </BlockTitleContainer>
    <div className="home-main__dashboard-container">
      <div className="home-main__dashboard-chips">
        {chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </div>
      <Image
        src={DashBoardImage}
        alt="dashboard"
        priority
      />
    </div>
  </MainInfoContainer>
);

export default MainInfo;
