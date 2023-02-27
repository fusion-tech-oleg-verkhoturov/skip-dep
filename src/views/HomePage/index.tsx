import AboutBlock from './AboutBlock';
import DescriptionBlock from './DescriptionBlock';
import FooterBlock from './FooterBlock';
import MainInfo from './MainInfo';
// import NewsBlock from './NewsBlock';
import SourceBlock from './SourceBlock';
import WorksBlock from './WorksBlock';

const HomePage = () => (
  <main>
    <MainInfo />
    <DescriptionBlock />
    <WorksBlock />
    <AboutBlock />
    <SourceBlock />
    {/* <NewsBlock /> */}
    <FooterBlock />
  </main>
);

export default HomePage;
