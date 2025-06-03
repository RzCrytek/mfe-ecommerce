import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: block;
  background-color: #fff;
  width: 300px;
  color: #282c34;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #fff;
  transition: all 0.3s ease-out;

  &:hover {
    border-color: peru;

    picture {
      box-shadow: 0px 5px 15px rgba(#000, 0.15);
      transform: translate3d(0, -2%, 0);
    }
  }

  &.out_stock {
    position: relative;
    pointer-events: none;

    &:after {
      font-family: 'Roboto Condensed', sans-serif;
      content: 'SOLD OUT';
      background-color: rgb(255 255 255 / 80%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  picture {
    display: block;
    width: 100%;
    height: 300px;
    padding: 2px;
    transition: all 0.3s ease-out;

    img {
      background-color: #e9ecef;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .summary {
    padding: 16px;

    .name {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 18px;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .price {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 16px;
      color: peru;

      del {
        font-size: 14px;
        color: rgba(40, 44, 52, 0.3);
        margin-left: 8px;
      }
    }
  }
`;

export const ProductCardStyled = {
  Card,
};
