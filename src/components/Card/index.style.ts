import styled from 'styled-components';

export default styled.div<{ width?: number }>`
  padding: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.mainTheme.color.typography.blackText};
  box-shadow: ${({ theme }) => theme.mainTheme.shadow.extraLarge};
  background: white;
  max-width: ${({ width }) => (width || 433)}px;
  width: 100%;
`;
