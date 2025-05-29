import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import imageLogo from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import HeaderStyled from './Header.styled';

const Header: FC = () => {
  return (
    <HeaderStyled.HeaderWrapper id="header">
      <div className="container">
        <Link to="/">
          <img src={imageLogo} alt="Logo" />
        </Link>

        <nav className="nav">
          <ul className="menu">
            <li>
              <NavLink to="/eventos">Eventos</NavLink>
            </li>

            <li>
              <NavLink to="/exclusive-products" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                exclusivos
              </NavLink>
            </li>
          </ul>

          <div className="options">
            <Link to="/cart">
              <CartWidget />
            </Link>

            <HeaderStyled.LinkProduct className="btn btn--stroke" to="/products">
              PRODUCTOS
            </HeaderStyled.LinkProduct>
          </div>
        </nav>
      </div>
    </HeaderStyled.HeaderWrapper>
  );
};

export default Header;
