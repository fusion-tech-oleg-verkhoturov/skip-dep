import styled from 'styled-components';

const StyledCard = styled.div`
  max-width: 398px;
  padding: 48px;
  background: white;
  border: ${({ theme }) => `1px solid ${theme.mainTheme.color.grey.background}`};
  border-radius: 4px;

  .pricing-card {
    &__title-container {
      text-align: center;
      margin-bottom: 48px;
    }

    &__title {
      margin-bottom: 16px;
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.mainTheme.color.typography.blackText};
    }

    &__description {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${({ theme }) => theme.mainTheme.color.typography.greyText};
    }

    &__price {
      padding: 11.5px 0;
      border-bottom: ${({ theme }) => `1px solid ${theme.mainTheme.color.grey.background}`};
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: ${({ theme }) => theme.mainTheme.color.grey.dark};
      margin-bottom: 8px;
    }

    &__cost {
      color: ${({ theme }) => theme.mainTheme.color.red.primary};
      letter-spacing: -0.02em;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
    }

    &__tag {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12.5px 0;
    }

    &__content {
      margin-bottom: 48px;
    }

    &__submit {
      margin: 0 auto;
    }
  }
`;

export default StyledCard;
