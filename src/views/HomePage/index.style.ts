import styled from 'styled-components';

export const BlockTitleContainer = styled.div<{isWhiteTxt?: boolean}>`
  max-width: 652px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .block-title {
    &__pre-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: ${({ theme, isWhiteTxt }) => (isWhiteTxt ? theme.mainTheme.color.typography.lightGreyText : theme.mainTheme.color.typography.greyText)};
      margin-bottom: 30px;
    }
  
    &__title {
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;
      color: ${({ theme, isWhiteTxt }) => (isWhiteTxt ? 'white' : theme.mainTheme.color.typography.blackText)};
    }
  
    &__sub-title {
      max-width: 470px;
      font-size: 18px;
      line-height: 130%;
      text-align: center;
      color: ${({ theme, isWhiteTxt }) => (isWhiteTxt ? theme.mainTheme.color.grey.lightElements : theme.mainTheme.color.typography.greyText)};
    }
  }
`;

export const MainInfoContainer = styled.div`
  margin-top: 76px;

  .home-main {
    &__start {
      margin-top: 30px;
    }

    &__dashboard-container {
      margin: 70px auto 0;
      max-width: 1106.85px;

      svg {
        margin-top: 20px;
      }
    }

    &__dashboard-chips {
      margin: 0 auto;
      width: 578px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 110px;

  .home-description {
    &__content {
      position: relative;
      margin-top: 50px;
      height: 660px;
      background-image: url('/images/description-screen.svg');
      background-repeat: no-repeat;
    }

    &__cards-container {
      width: 598px;
      position: absolute;
      left: 43.17%;
      top: 44px;
      display: grid;
    }

    &__card {
      &--right {
        justify-self: right;
        margin-top: 40px;
        margin-bottom: 63px;
      }

      &--center {
        justify-self: center;
        margin-bottom: 50px;
      }
    }

    &__highlight {
      color: ${({ theme }) => theme.mainTheme.color.red.primary};
    }

    &__link {
      justify-self: center;
    }
  }
`;

export const WorksContainer = styled.div`
  margin-top: 110px;

  .home-works {
    &__chips {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 70px;
    }

    &__screen-container {
      margin: 0 auto;
      margin-top: 70px;
      max-width: 796.14px;
      max-height: 491px;
      position: relative;
      height: 100%;
      width: 100%;
    }

    &__screen {
      width: 100%;
      position: relative;
      left: 40px;
    }
  }
`;

export const AboutContainer = styled.div`
  margin-top: 87px;
  
  .home-about {
    &__title {
      width: 711px;
      font-size: 36px;
    }

    &__logos {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 71px;
    }
  }
`;

export const SourceContainer = styled.div`
  margin-top: 110px;
  position: relative;

  .home-source {
    &__screen-container {
      width: 741px;
      height: 100%;
      position: absolute;
      right: 0;
      background-image: url('/images/results-screen.svg');
      background-repeat: no-repeat;
      background-position: right 85.21px;
      z-index: 0;
    }

    &__main-container {
      padding: 128.71px 0 248.29px 250px;
      max-width: 1740px;
      background-color: ${({ theme }) => theme.mainTheme.color.red.lightBackground};
      margin: 0 auto;
      border-radius: 30px;
    }

    &__title {
      margin: 0;
      align-items: flex-start;

      .block-title__sub-title {
        text-align: initial;
        max-width: 498px;
      }
    }

    &__chips, &__title, &__link {
      position: relative;
      z-index: 1;
    }

    &__chips {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 50px 0;
    }

    &__chip {
      width: fit-content;
    }
  }
`;

export const NewsContainer = styled.div`
  margin: 110px 0;
  padding: 0 90px;

  .home-news {
    &__container {
      background-color: ${({ theme }) => theme.mainTheme.color.grey.dark};
      padding: 100px 0;
      margin 0 auto;
      max-width: 1740px;
      border-radius: 30px;
    }

    &__arrow {
      path {
        stroke: ${({ theme }) => theme.mainTheme.color.red.primary};
      }
    }

    &__content {
      max-width: 534px;
      margin: 0 auto;
    }

    &__input {
      margin: 30px 0 8px;
    }

    &__input-description {
      font-size: 12px;
      line-height: 130%;
      color: ${({ theme }) => theme.mainTheme.color.typography.lightGreyText};
    }

    &__link {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export const FooterContainer = styled.div`
  padding-top: 84.29px;
  background-color: ${({ theme }) => theme.mainTheme.color.grey.dark};
`;
