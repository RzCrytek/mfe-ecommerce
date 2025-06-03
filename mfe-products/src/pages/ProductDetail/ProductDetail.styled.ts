import styled from 'styled-components';

const Wrapper = styled.div`
  .options {
    background-color: peru;

    .container {
      padding: 0;
    }

    .btn {
      font-family: 'Roboto Condensed', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 150px;
      width: auto;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #fff;
      text-align: center;
      text-decoration: none;
      padding-inline: 16px;
      border: 0;
      transition: all 0.3s ease-out;

      svg {
        display: inline-block;
        width: 10px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }

  .container {
    padding-block: 40px;
    max-width: 1344px;
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  .btn--back {
    max-width: 150px;
    border: 0;
  }
`;

export const ProductDetailStyled = {
  Wrapper,
};
