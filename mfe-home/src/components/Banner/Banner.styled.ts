import styled from 'styled-components';
import Banner from '../../assets/banner/1.png';

const BannerWrapper = styled.section`
  background-image: url(${Banner});
  max-height: 550px;
  padding-block: 24px;

  .container {
    display: flex;
    max-width: 1344px;
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;

    .data,
    picture {
      display: block;
      flex-basis: 50%;
    }

    .data {
      display: flex;
      align-items: center;
      color: #fff;

      h1 {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 50px;
      }

      .description {
        font-size: 18px;
        margin: 8px 0 24px;
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

    picture {
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

const BannerStyled = {
  BannerWrapper,
};

export default BannerStyled;
