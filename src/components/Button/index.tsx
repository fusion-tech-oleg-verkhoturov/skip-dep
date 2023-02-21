import React from 'react';
import StyledButton from './index.style';

type PropsType = {
  onClick?: () => void;
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
} & React.PropsWithChildren;

const Button: React.FC<PropsType> = (props) => (
  <StyledButton
      onClick={props?.onClick}
      type={props?.type}
      disabled={props?.disabled}
      className={props?.className ?? ''}
    >
    {props.children}
  </StyledButton>
);

export default Button;
