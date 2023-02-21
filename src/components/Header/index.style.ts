import styled from 'styled-components';

export default styled.header`
  padding: 14px 35px;
  border-bottom: 1px solid ${({ theme }) => theme.mainTheme.color.grey.background};

  .header {
    &__container {
      max-width: 1244px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__navigation {
      display: flex;
      align-items: center;
      gap: 48px;
    }

    &__affiliate {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__link {
      font-weight: 600;
      font-size: 16px;

      &--active {
        color: ${({ theme }) => theme.mainTheme.color.red.primary};
      }
    }

    &__right {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
`;
