import styled, { keyframes } from 'styled-components';

const shakeXAnimation = keyframes`
   0%,
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  10%,
  50%,
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  30%,
  70% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
`;

const ButtonWidget = styled.button`
  position: relative;
  margin-right: 2.4rem;

  &.added {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: ${shakeXAnimation};
  }

  .counter {
    position: absolute;
    top: -1rem;
    right: -1rem;
    background-color: peru;
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    border-radius: 50%;

    sup {
      vertical-align: sub;
      font-size: 1.1rem;
    }

    &.more {
      font-size: 1.1rem;

      sup {
        font-size: 1rem;
      }
    }
  }
`;

const CartWidgetStyled = {
  ButtonWidget,
};

export default CartWidgetStyled;
