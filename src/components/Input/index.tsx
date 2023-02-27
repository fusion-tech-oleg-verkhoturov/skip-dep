import React, { useCallback } from 'react';
import StyledInput from './index.style';

type PropsType = {
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void;
  value: string | number;
  placeHolder?: string;
  icon?: React.ReactNode;
} & React.PropsWithChildren;

const Input: React.FC<PropsType> = ({ onChange, value, placeHolder, icon }) => {
  const changeHandle = useCallback((
    event: React.ChangeEvent<HTMLInputElement>,
  ) => onChange(event.target.value), [onChange]);

  return (
    <StyledInput className="input" >
      <input
        onChange={changeHandle}
        value={value}
        placeholder={placeHolder}
        className="input__input"
      />
      {icon && (
        <span className="input__icon">
          {icon}
        </span>
      )}
    </StyledInput>
  );
};

export default Input;
