import React from 'react';
import classnames from 'classnames';

import StyledCard from './index.style';
import Button from '../Button';
import CheckSVG from '../../../public/images/check.svg';
import PlusSVG from '../../../public/images/plus.svg';

type PropsType = {
  title: string;
  descritpion: string;
  price: number;
  tags: string[];
  onSubmit: () => void;
  className?: string;
};

const PricingCard: React.FC<PropsType> = ({
  title, descritpion, price, tags, onSubmit, className,
}) => (
  <StyledCard className={classnames({ 'pricing-card': true, [className || '']: true }) }>
    <div className="pricing-card__title-container">
      <h1 className="pricing-card__title">{title}</h1>
      <p className="pricing-card__description">{descritpion}</p>
    </div>
    <div className="pricing-card__content">
      <p className="pricing-card__price">
        <span>Price</span>
        <span className="pricing-card__cost">{`$ ${price.toFixed(2)}`}</span>
      </p>
      {tags.map((tag) => (
        <p key={tag} className="pricing-card__tag">
          <span>{tag}</span>
          <CheckSVG />
        </p>
      ))}
    </div>
    <Button type="button" className="pricing-card__submit" onClick={onSubmit}>
      SUBMIT A LIST
      <PlusSVG />
    </Button>
  </StyledCard>
);

export default PricingCard;
