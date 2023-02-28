import React from 'react';

import Chip from '@/components/Chip';
import { BlockTitleContainer, WorksContainer } from './index.style';
import ArrowSVG from '../../../public/images/arrow-right.svg';
import UploadImage from '../../../public/images/upload-screen.svg';

const chips = [
  { text: 'Sign up' },
  { text: 'Upload your list' },
  { text: 'Mapping data' },
  { text: 'Submit an order' },
  { text: 'Get a result', isGreen: true },
];

const WorksBlock = () => (
  <WorksContainer className="home-works">
    <BlockTitleContainer className="block-title">
      <p className="block-title__pre-title">quick and easy</p>
      <h1 className="block-title__title">how it works</h1>
      <p className="block-title__sub-title">Easy Button Skip Tracing makes the process quick and easy. </p>
    </BlockTitleContainer>
    <div className="home-works__chips">
      {chips.map((chip) => (
        <React.Fragment key={chip.text}>
          <Chip className="home-works__chip" isGreen={chip.isGreen} >{chip.text}</Chip>
          {!chip.isGreen && <ArrowSVG />}
        </React.Fragment>
      ))}
    </div>
    <div className="home-works__screen-container">
      {/* <Image
      className="home-works__screen"
      src={UploadImage}
      alt="dashboard"
      priority
    /> */}
      <UploadImage className="home-works__screen" />
    </div>
  </WorksContainer>
);

export default WorksBlock;
