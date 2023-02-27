import { AboutContainer, BlockTitleContainer } from './index.style';
import BiggerSVG from '../../../public/images/bigger-pockets.svg';
import YahooSVG from '../../../public/images/yahoo.svg';
import RyanSVG from '../../../public/images/ryan.svg';
import FoxSVG from '../../../public/images/fox.svg';

const AboutBlock = () => (
  <AboutContainer className="home-about">
    <BlockTitleContainer className="block-title">
      <p className="block-title__pre-title">people talk about us</p>
      <h1 className="block-title__title home-about__title">Easy Button Skip Tracing Founders Have Been Featured On</h1>
      <p className="block-title__sub-title">You can see us at these arenas</p>
    </BlockTitleContainer>
    <div className="home-about__logos">
      <BiggerSVG />
      <YahooSVG />
      <RyanSVG />
      <FoxSVG />
    </div>
  </AboutContainer>
);

export default AboutBlock;
