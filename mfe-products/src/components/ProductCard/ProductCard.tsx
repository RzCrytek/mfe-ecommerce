import type { FC } from 'react';
import type { ProductCollection } from '../../hooks/useGetDocsFilterOnSnapshot';
import imageNoPhoto from '../../assets/no-photo.png';
import { ProductCardStyled } from './ProductCard.styled';

const ProductCard: FC<{ product: ProductCollection }> = ({ product }) => {
  const { id, images, title, price, original_price, stock } = product;

  const link = stock > 0 ? `/products/detail/${id}` : '#!';
  const imageSrc = images?.length ? images[0].src : imageNoPhoto;
  const classStock = stock < 1 ? 'out_stock' : '';

  return (
    <ProductCardStyled.Card className={`${classStock}`} to={link}>
      <picture>
        <img src={imageSrc} alt={images[0].alt} />
      </picture>

      <div className="summary">
        <h2 className="name">{title}</h2>
        <p className="price">
          <span className="current">S/ {price.toFixed(2)}</span>
          {original_price && <del>S/ {original_price.toFixed(2)}</del>}
        </p>
      </div>
    </ProductCardStyled.Card>
  );
};

export default ProductCard;
