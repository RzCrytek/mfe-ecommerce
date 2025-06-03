import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;

  .imageContent {
    width: 50%;
    padding-inline: 48px;
    background-color: #fff;

    picture {
      img {
        width: 100%;
        margin-inline: auto;
      }
    }
  }

  .dataContent {
    width: 50%;
    padding-inline: 48px;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 40px;
      margin-block: 16px;
    }

    h2 {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 24px;
    }

    p {
      font-size: 16px;

      strong {
        font-weight: 700;
      }
    }

    .description {
      margin-block: 32px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }

    .price {
      font-family: 'Roboto Condensed', sans-serif;
      margin-top: auto;

      .current {
        font-size: 32px;
        color: peru;
      }

      del {
        font-size: 24px;
        color: rgba(40, 44, 52, 0.3);
        margin-left: 8px;
      }
    }

    .wrap {
      max-width: 300px;
      margin-block: 24px;

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
        padding-inline: 16px;
        margin-top: 40px;
        border: 1px solid #282c34;
        transition: all 0.3s ease-out;

        &:hover {
          background-color: #3e4451;
        }
      }
    }
  }
`;

export const DetailViewStyled = {
  Row,
};
