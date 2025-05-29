import type { FC } from 'react';

import icoDelivery from '../../assets/icons/delivery.svg';
import icoSend from '../../assets/icons/truck.svg';
import icoLock from '../../assets/icons/lock.svg';
import icoFree from '../../assets/icons/free.svg';
import HeaderStyled from './Footer.styled';

const Footer: FC = () => {
  const getYear = new Date().getFullYear();

  return (
    <HeaderStyled.HeaderWrapper>
      <div className="shipping">
        <div className="container">
          <div className="item">
            <picture className="icon">
              <img src={icoSend} alt="Envío" />
            </picture>

            <p className="text">ENVÍOS A NIVEL NACIONAL</p>
          </div>

          <div className="item">
            <picture className="icon">
              <img src={icoLock} alt="Seguro" />
            </picture>

            <p className="text">COMPRA FÁCIL Y SEGURO</p>
          </div>

          <div className="item">
            <picture className="icon">
              <img src={icoDelivery} alt="Delivery" />
            </picture>

            <p className="text">ENTREGA SEGURA</p>
          </div>

          <div className="item">
            <picture className="icon">
              <img src={icoFree} alt="Gratis" />
            </picture>

            <p className="text">ENVÍO GRATIS</p>
          </div>
        </div>
      </div>

      <div className="reserved">
        <div className="container">
          <p>CrytekSkp © Todos los derechos reservados {getYear} </p>
        </div>
      </div>
    </HeaderStyled.HeaderWrapper>
  );
};

export default Footer;
