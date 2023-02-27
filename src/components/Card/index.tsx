import React from 'react';
import StyledCard from './index.style';

type PropsType = {
  className?: string;
  width?: number;
} & React.PropsWithChildren;

const Card: React.FC<PropsType> = (props) => (
  <StyledCard
    className={props?.className ?? ''}
    width={props?.width}
  >
    {props.children}
  </StyledCard>
);

export default Card;
