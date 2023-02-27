import Footer from '@/components/Footer';
import { BlockTitleContainer, FooterContainer } from './index.style';

const FooterBlock = () => (
  <FooterContainer>
    <BlockTitleContainer className="block-title" isWhiteTxt>
      <p className="block-title__pre-title">Data Tailored To Real Estate Investors</p>
      <h1 className="block-title__title home-about__title">Your Search For Phone Numbers Ends Here</h1>
    </BlockTitleContainer>
    <Footer />
  </FooterContainer>
);

export default FooterBlock;
