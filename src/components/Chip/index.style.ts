import styled from 'styled-components';

export default styled.div<{ isGreen?: boolean }>`
  display: inline-block;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  border: 1px solid ${({ theme, isGreen }) => (
    isGreen ? theme.mainTheme.color.green : theme.mainTheme.color.typography.lightGreyText
  )};
  background: ${({ theme, isGreen }) => (
    isGreen ? theme.mainTheme.color.green : 'white'
  )};
  border-radius: 100px;

  color: ${({ isGreen, theme }) => (isGreen ? 'white' : theme.mainTheme.color.grey.dark)};
`;
