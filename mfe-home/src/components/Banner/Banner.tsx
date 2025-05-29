import { type FC } from 'react';
import { navigateMF } from 'common-utils';
import image1 from '../../assets/banner/image-1.png';
import BannerStyled from './Banner.styled';

const Banner: FC = () => {
  return (
    <BannerStyled.BannerWrapper>
      <div className="container">
        <div className="data">
          <div className="data-content">
            <h1>FIGURAS COLECCIONABLES</h1>

            <p className="description">¡Agrega algo extra a tu colección con Pop!</p>

            <a className="btn btn--white" onClick={() => navigateMF('/products')}>
              COMPRAR
            </a>
          </div>
        </div>

        <picture>
          <img src={image1} alt="Imagen banner" />
        </picture>
      </div>
    </BannerStyled.BannerWrapper>
  );
};

export default Banner;
