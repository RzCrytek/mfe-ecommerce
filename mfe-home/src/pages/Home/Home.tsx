import { type FC } from 'react';
import { navigateMF } from 'common-utils';
import Banner from '../../components/Banner/Banner';
import Choose from '../../components/Banner/Choose/Choose';
import headerStyled from './Home.styled';

const Home: FC = () => {
  return (
    <div>
      <headerStyled.Announcements>
        <h3>ENVÍO GRATIS</h3>
      </headerStyled.Announcements>

      <Banner />

      <Choose />

      <headerStyled.AllProducts>
        <headerStyled.ButtonAllProducts onClick={() => navigateMF('/products')}>
          <span>Ver todos los productos {'>'}</span>
          <svg>
            <rect x="0" y="0" fill="none"></rect>
          </svg>
        </headerStyled.ButtonAllProducts>
      </headerStyled.AllProducts>
    </div>
  );
};

export default Home;
