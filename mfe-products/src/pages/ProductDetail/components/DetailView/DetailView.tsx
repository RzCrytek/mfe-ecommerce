import { useState, type FC } from 'react';
import type { ProductCollection } from '../../../../hooks/useGetDocsFilterOnSnapshot';
import imageNoPhoto from '../../../../assets/no-photo.png';
import { DetailViewStyled } from './DetailView.styled';
import ItemCount from '../ItemCount/ItemCount';

const DetailView: FC<{ detail: ProductCollection }> = ({ detail }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { images, brand, title, sku, stock, description, price, original_price } = detail;

  const inStock = !!(stock && stock > 0);
  const imageSrc = images?.length ? images[1].src : imageNoPhoto;

  const onAdd = () => {
    console.log('agregado');
    console.log('agregado:', quantity);
  };

  return (
    <DetailViewStyled.Row>
      <div className="imageContent">
        <picture>
          <img src={imageSrc} alt={images[1].alt} />
        </picture>
      </div>

      <div className="dataContent">
        <h2>Tipo: {brand}</h2>
        <h1>{title}</h1>
        <p>
          <strong>SKU:</strong> {sku} | <strong>Stock:</strong> {stock}
        </p>
        <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>

        <div className="price">
          <p style={{ fontSize: '18px' }}>
            <strong>Precio:</strong>
          </p>
          <span className="current">S/ {price.toFixed(2)}</span>
          {original_price && <del>S/ {original_price.toFixed(2)}</del>}
        </div>

        <div className="wrap">
          <ItemCount stock={stock} quantity={quantity} setQuantity={setQuantity} />

          <button className="btn btn--animate-icon full" onClick={onAdd} disabled={!inStock}>
            <span>AGREGAR A CARRITO</span>
          </button>
        </div>
      </div>
    </DetailViewStyled.Row>
  );
};

export default DetailView;
