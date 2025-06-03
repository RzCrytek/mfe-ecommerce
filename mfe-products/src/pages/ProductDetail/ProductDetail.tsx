import { type FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGetDocOnSnapshot from '../../hooks/useGetDocOnSnapshot';
import IcoArrowLeft from './IcoArrowLeft';
import Loader from '../../components/Loader/Loader';
import DetailView from './components/DetailView/DetailView';
import type { ProductCollection } from '../../hooks/useGetDocsFilterOnSnapshot';
import { ProductDetailStyled } from './ProductDetail.styled';

const ProductDetail: FC = () => {
  const { id } = useParams();

  const { document: product, loader, isDocument: isProduct } = useGetDocOnSnapshot('products', id as string);

  console.log('product:', product);
  console.log('loader:', loader);
  console.log('isProduct:', isProduct);

  return (
    <ProductDetailStyled.Wrapper>
      <div className="options">
        <div className="container">
          <Link className="btn btn--back" to="/products">
            <IcoArrowLeft />
            Regresar
          </Link>
        </div>
      </div>

      <div className="container">{loader ? <Loader /> : <DetailView detail={product as ProductCollection} />}</div>
    </ProductDetailStyled.Wrapper>
  );
};

export default ProductDetail;
