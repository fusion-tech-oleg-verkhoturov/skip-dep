import React from 'react';
import StyledChip from './index.style';

type PropsType = {
  isGreen?: boolean | false;
  className?: string;
} & React.PropsWithChildren;

const Chip: React.FC<PropsType> = (props) => (
  <StyledChip
    isGreen={props?.isGreen}
    className={props?.className ?? ''}
  >
    {props.children}
  </StyledChip>
);

export default Chip;
