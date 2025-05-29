import type { FC } from 'react';
import { navigateMF } from 'common-utils';
import ChooseStyled from './Choose.styled';

const Choose: FC = () => {
  return (
    <ChooseStyled.ChooseWrapper>
      <div className="container">
        <div className="item">
          <div className="data">
            <h2>COLECCIONABLES EXCLUSIVOS</h2>
            <a className="btn btn--white" onClick={() => navigateMF('/exclusive-products')}>
              Comprar
            </a>
          </div>
        </div>
        <div className="item">
          <div className="data">
            <h2>TODOS LOS EVENTOS DE MARVEL</h2>
            <a className="btn btn--white" onClick={() => navigateMF('/events')}>
              Ver los eventos
            </a>
          </div>
        </div>
      </div>
    </ChooseStyled.ChooseWrapper>
  );
};

export default Choose;
