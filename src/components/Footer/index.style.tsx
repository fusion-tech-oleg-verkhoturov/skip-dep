import styled from 'styled-components';

const FooterStyled = styled.div`
  max-width: 1239.49px;
  margin: 0 auto;
  padding: 20px 0;
  border-top: ${({ theme }) => `1px solid ${theme.mainTheme.color.typography.greyText}`};

  .footer {
    &__block {
      display: flex;
      justify-content: space-between;
      align-items: center;

      :nth-child(1) {
        margin-bottom: 40px;
      }

      :nth-child(2) {
        margin-bottom: 104.71px;
      }
    }

    &__logos {
      display: flex;
      gap: 19px;
    }

    &__logos-link {
      display: block;

      svg {
        width: 48px;
        height: 48px;
      }
    }

    &__links {
      display: flex;
      gap: 20px;
      font-weight: 600;
      font-size: 12px;
      line-height: 130%;
      color: ${({ theme }) => theme.mainTheme.color.grey.background};
      text-decoration-line: underline;
    }

    &__rights {
      font-size: 12px;
      color: ${({ theme }) => theme.mainTheme.color.typography.lightGreyText};
    }
  }

`;

export default FooterStyled;
