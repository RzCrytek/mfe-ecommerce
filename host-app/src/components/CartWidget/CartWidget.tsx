import type { FC } from 'react';
import CartWidgetStyled from './CartWidget.styled';
import IconCart from './IconCart';

const CartWidget: FC<{ quantity: number }> = ({ quantity }) => {
  return (
    <CartWidgetStyled.ButtonWidget className="added">
      <IconCart />
      <span className="counter">{quantity}</span>
    </CartWidgetStyled.ButtonWidget>
  );
};

export default CartWidget;
