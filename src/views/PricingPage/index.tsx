import PricingCard from '@/components/PricingCard';
import FooterBlock from './FooterBlock';
import PricingContainer from './index.style';

const PricingPage = () => {
  const onSubmit = () => {
    console.log('Submit');
  };

  return (
    <PricingContainer className="pricing">
      <div className="pricing__cards">
        <PricingCard
          title="Bulk Skip trace"
          descritpion="Provides Unrivaled Data in the Skip Tracing Industry."
          tags={['Less time on data entry', 'More time chasing deals']}
          price={0.2}
          onSubmit={onSubmit}
        />
      </div>
      <FooterBlock />
    </PricingContainer>
  );
};

export default PricingPage;