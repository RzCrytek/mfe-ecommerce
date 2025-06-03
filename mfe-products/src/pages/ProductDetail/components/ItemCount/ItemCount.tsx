import type { FC } from 'react';
import CountWrapper from './ItemCount.styled';

interface ItemCountProps {
  stock: number;
  quantity: number;
  setQuantity: (value: number | ((prev: number) => number)) => void;
}

const ItemCount: FC<ItemCountProps> = ({ stock, quantity, setQuantity }) => {
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((initVal: number) => initVal - 1);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      setQuantity((initVal: number) => initVal + 1);
    }
  };

  return (
    <CountWrapper.CountWrapper>
      <button
        className="decrease"
        id="decrease"
        type="button"
        aria-label="Disminuye la cantidad en 1"
        title="Disminuye la cantidad en 1"
        onClick={decrement}
      >
        -
      </button>

      <input className="qty" type="text" value={quantity} readOnly disabled />

      <button className="increase" id="increase" type="button" title="Aumenta la cantidad en 1" onClick={increment}>
        +
      </button>
    </CountWrapper.CountWrapper>
  );
};

export default ItemCount;
