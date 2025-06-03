import styled from 'styled-components';

const ProductWrapper = styled.div`
  max-width: 1344px;
  width: 100%;
  padding: 40px 16px;
  margin-right: auto;
  margin-left: auto;

  h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
  }

  .nav-category {
    display: flex;
    justify-content: center;
    margin-top: 16px;

    .btn {
      font-family: 'Roboto Condensed', sans-serif;
      display: inline-block;
      background-color: #282c34;
      width: auto;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #fff;
      text-align: center;
      text-decoration: none;
      padding-inline: 24px;
      margin-inline: 8px;
      border: 1px solid peru;
      transition: all 0.3s ease-out;

      &.active {
        background-color: peru;
      }
    }
  }

  .cards-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px 24px;
    margin-top: 24px;
  }
`;

export const ProductsStyled = {
  ProductWrapper,
};
