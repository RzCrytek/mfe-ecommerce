import styled from 'styled-components';

const HeaderWrapper = styled.footer`
  background-color: #212121;

  .shipping {
    color: #888;

    .container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .item {
      display: flex;
      align-items: center;
      width: calc(100% / 4);
      padding: 8px;
      height: 100px;

      @media (max-width: 767px) {
        width: calc(100% / 2);
      }

      @media (max-width: 400px) {
        width: 100%;
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #888;
        margin-right: 12px;
        flex-shrink: 0;

        img {
          height: 20px;
        }
      }

      .text {
        font-family: 'Roboto';
      }
    }
  }

  .reserved {
    background-color: #282c34;
    font-size: 14px;
    color: #888;
    text-align: center;
    padding: 16px;
  }
`;

const FooterStyled = {
  HeaderWrapper,
};

export default FooterStyled;
