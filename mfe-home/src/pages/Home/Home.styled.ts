import styled from 'styled-components';

const Announcements = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 10px;

  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.8rem;
  }
`;

const AllProducts = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const ButtonAllProducts = styled.button`
  position: relative;
  display: inline-block;
  background-color: transparent;
  width: auto;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #282c34;
  text-align: center;
  text-decoration: none;
  padding-inline: 16px;
  border: 1px solid transparent;
  transition: all 0.3s ease-out;

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    fill: none;
  }

  rect {
    width: 100%;
    height: 100%;
    stroke: #282c34;
    stroke-width: 4px;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    transition: 0.6s ease all;
  }

  &:hover {
    background-color: transparent;

    rect {
      stroke-dashoffset: 0;
    }
  }
`;

const headerStyled = {
  Announcements,
  AllProducts,
  ButtonAllProducts,
};

export default headerStyled;
