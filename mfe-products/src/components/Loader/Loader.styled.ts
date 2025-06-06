import styled, { keyframes } from 'styled-components';

const loaderRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .loader {
    display: block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-inline: auto;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid peru;
      border-radius: 50%;
      animation: ${loaderRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: peru transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }

      &:nth-child(2) {
        animation-delay: -0.3s;
      }

      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }
`;

export const LoaderStyled = {
  LoaderWrapper,
};
