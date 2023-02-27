import styled from 'styled-components';

export default styled.nav<{isLight?: boolean}>`
  display: flex;
  align-items: center;
  gap: 48px;

  .navigation {
    &__affiliate {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        path {
          stroke: ${({ theme, isLight }) => (isLight ? theme.mainTheme.color.red.light : theme.mainTheme.color.red.primary)};
        }
      }
    }

    &__link {
      font-weight: 600;
      font-size: 16px;
      color: ${({ theme, isLight }) => (isLight ? 'white' : theme.mainTheme.color.grey.dark)};

      &--active {
        color: ${({ theme }) => theme.mainTheme.color.red.primary};
      }
    }    
  }
`;
