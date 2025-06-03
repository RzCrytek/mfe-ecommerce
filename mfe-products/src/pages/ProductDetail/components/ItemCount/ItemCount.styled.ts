import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(40, 44, 52, 0.3);
  border-radius: 5px;

  button {
    background-position: center;
    background-repeat: no-repeat;
    flex-basis: 60px;
    min-width: 40px;
    color: peru;
    font-size: 16px;
  }

  .qty {
    background-color: transparent;
    color: #282c34;
    text-align: center;
    padding: 0;
    border: 0;
    border-left: 1px solid rgba(40, 44, 52, 0.3);
    border-right: 1px solid rgba(40, 44, 52, 0.3);
    width: 100%;
  }
`;

const ItemCountStyled = {
  CountWrapper,
};

export default ItemCountStyled;
