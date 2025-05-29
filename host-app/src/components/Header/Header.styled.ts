import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #282c34;
  padding-inline: 1.6rem;
  height: 6rem;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .nav {
    display: flex;
    color: #fff;

    .menu {
      display: flex;
      align-items: center;
      margin-right: 1.6rem;

      li {
        a {
          color: #fff;
          font-weight: 500;
          text-decoration: none;
          padding-inline: 1.6rem;
          transition: all 0.3s ease-out;

          &.active,
          &:hover {
            color: peru;
          }
        }
      }
    }

    .options {
      display: flex;
      align-items: center;

      .btn {
        width: 15rem;
      }
    }
  }
`;

const LinkProduct = styled(Link)`
  font-family: 'Roboto Condensed', sans-serif;
  display: inline-block;
  background-color: peru;
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
  background: #282c34;
  border-color: peru;

  &.active,
  &:hover {
    background-color: peru;
  }
`;

const headerStyled = {
  HeaderWrapper,
  LinkProduct,
};

export default headerStyled;
