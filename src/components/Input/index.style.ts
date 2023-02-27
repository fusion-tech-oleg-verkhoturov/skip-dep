import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .input {
    &__input {
      border: none;
      width: 100%;
      padding: 14px 20px;
      outline: none;
      border-radius: 4px;
    }

    &__icon {
      position: absolute;
      right: 20px;
    }
  }
`;
