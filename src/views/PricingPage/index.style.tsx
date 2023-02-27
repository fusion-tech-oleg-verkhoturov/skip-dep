import styled from 'styled-components';

export const PricingContainer = styled.main`
  height: calc(100vh - 83px);

  .pricing {
    &__cards {
      padding: 118px 0 97px;
      display: flex;
      justify-content: center;
    }

    &__footer {
      padding: 72px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 41px;
      border-top: 1px solid ${({ theme }) => theme.mainTheme.color.grey.background};
      border-radius: 4px;
    }

    &__footer-left {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__footer-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.mainTheme.color.grey.dark};
    }

    &__footer-description {
      font-size: 18px;
        line-height: 130%;
        color: ${({ theme }) => theme.mainTheme.color.typography.greyText};
    }
  }
`;

export default PricingContainer;
