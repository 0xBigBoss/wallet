import styled from "styled-components";

export const SendTransactionModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .back-button {
    width: backButton;
    background: transparent;
    border: none;

    svg {
      vertical-align: middle;
      margin-right: 8px;
    }

    :hover {
      cursor: pointer;
    }

    :focus-visible {
      outline: none;
    }
  }

  .title {
    margin: 17px 0 0 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
  }

  .password-input-container {
    margin: 28px 0 45px 0;
    width: 100%;
  }

  .you-are-sending {
    font-weight: bold;
    font-size: 18px;
    line-height: 110%;
    text-align: center;
    color: ${(props) => props.theme.secondaryWhite};
    margin-bottom: 17px;
  }

  .to-address {
    width: 100%;
  }

  .send-button {
    width: 220px;
    margin: 39px 0 25px 0;
  }

  .ledger-banner-container {
    margin-bottom: 2rem;
  }
`;

export const SendTransactionViewContainer = styled.div`
  width: 95%;

  .back-button-container {
    width: 100%;
    display: flex;
    justify-content: center;

    .back-button {
      background: transparent;
      border: none;
      margin: 25px 0 0 0;

      svg {
        vertical-align: middle;
        margin-right: 8px;
      }

      :hover {
        cursor: pointer;
      }

      :focus-visible {
        outline: none;
      }
    }
  }

  .password-input-container {
    margin: 0 0 34px 0;
  }

  .you-are-sending {
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: ${(props) => props.theme.secondaryWhite};
  }

  .pokt-amount {
    font-weight: bold;
    font-size: 18px;
    line-height: 110%;
    color: ${(props) => props.theme.secondaryWhite};
    margin: 7px 0;
  }

  .to-address {
    margin-bottom: 44px;
  }

  .ledger-banner-container {
    margin-bottom: 2rem;
  }
`;
