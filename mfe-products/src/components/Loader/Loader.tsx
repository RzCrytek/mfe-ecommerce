import type { FC } from 'react';
import { LoaderStyled } from './Loader.styled';

const Loader: FC = () => {
  return (
    <LoaderStyled.LoaderWrapper>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyled.LoaderWrapper>
  );
};

export default Loader;
