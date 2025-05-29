import styled from 'styled-components';
import RickBg from '../../../assets/rick-bg.png';
import StarlightBg from '../../../assets/starlight-bg.png';

const ChooseWrapper = styled.section`
  padding-block: 48px;

  .container {
    display: flex;
    max-width: 1344px;
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  .item {
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
    background-attachment: scroll;
    display: flex;
    align-items: center;
    width: 50%;
    min-height: 300px;
    padding-block: 3rem;

    &:first-child {
      background-image: url(${RickBg});
      background-color: #3ddc97;
    }

    &:last-child {
      background-image: url(${StarlightBg});
      background-color: #00aeef;
    }

    .data {
      max-width: 75%;
      flex-basis: 75%;
      padding: 32px;

      h2 {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 2.4rem;
        margin-bottom: 16px;
      }

      .btn {
        font-family: 'Roboto Condensed', sans-serif;
        display: inline-block;
        background-color: #fff;
        width: auto;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        padding-inline: 16px;
        border: 1px solid transparent;
        transition: all 0.3s ease-out;

        border-color: #fff;
        color: #282c34;

        &:hover {
          background-color: #282c34;
          color: #fff;
        }
      }
    }
  }
`;

const ChooseStyled = {
  ChooseWrapper,
};

export default ChooseStyled;
