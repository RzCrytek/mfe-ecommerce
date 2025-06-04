import { useEffect, useState, type FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { capitalize, eventBus } from 'common-utils';
import imageLogo from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import HeaderStyled from './Header.styled';

const Header: FC = () => {
  const [quantity, setQuantity] = useState<number>(0);

  console.log('HEADER:');

  useEffect(() => {
    const sub = eventBus.subscribe((event) => {
      console.log('event:', event);

      if (event.type === 'product:quantity') {
        console.log('product:quantity:', event.payload);
        setQuantity(quantity + event.payload.quantity);
      }
    });

    return () => sub.unsubscribe();
  }, [quantity]);

  return (
    <HeaderStyled.HeaderWrapper id="header">
      <div className="container">
        <Link to="/">
          <img src={imageLogo} alt="Logo" />
        </Link>

        <nav className="nav">
          <ul className="menu">
            <li>
              <NavLink to="/events">{capitalize('eventos')}</NavLink>
            </li>

            {/* <li>
              <NavLink to="/exclusive-products" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                exclusivos
              </NavLink>
            </li> */}
          </ul>

          <div className="options">
            <Link to="/cart">{quantity > 0 && <CartWidget quantity={quantity} />}</Link>

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
