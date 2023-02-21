import styled, { css } from 'styled-components';

export default styled.button<{ disabled?: boolean }>`
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ theme }) => css`
    color: ${theme.mainTheme.color.typography.whiteText};
    stroke: ${theme.mainTheme.color.typography.whiteText};
    fill: ${theme.mainTheme.color.typography.whiteText};
  `}
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 14px 35px;
  border: none;
  border-radius: 40px;
  ${({ theme, disabled }) => css`
    background: ${disabled ? theme.mainTheme.color.typography.lightGreyText : theme.mainTheme.color.red.primary};
  `}

  :hover {
    ${({ theme, disabled }) => css`
      background: ${!disabled ? theme.mainTheme.color.red.dark : theme.mainTheme.color.typography.lightGreyText};
    `}
  }

  > label {
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: center;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  input {
    display: none;
  }

  > div {
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: center;
  }
`;
