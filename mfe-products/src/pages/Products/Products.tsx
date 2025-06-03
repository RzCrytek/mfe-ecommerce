import type { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useGetDocs from '../../hooks/useGetDocs';
import useGetDocsFilterOnSnapshot from '../../hooks/useGetDocsFilterOnSnapshot';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsStyled } from './Products.styled';

const Products: FC = () => {
  const { category: categoryParam } = useParams();

  const { data: categories } = useGetDocs('categories');

  const paramData = categories.find((document) => document.slug === categoryParam);

  const filterQuery = paramData ? ['categoryKey', '==', paramData.key] : [];

  const { data: products, loader } = useGetDocsFilterOnSnapshot('products', filterQuery);

  console.log('loader:', loader);
  console.log('products:', products);

  return (
    <ProductsStyled.ProductWrapper>
      <div className="options">
        <h2>LISTA DE PRODUCTOS</h2>
      </div>

      <nav>
        <ul className="nav-category">
          <li>
            <NavLink className="btn btn--stroke" to="/products">
              All
            </NavLink>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <NavLink className="btn btn--stroke" to={`/products/${category.slug}`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <section className="cards-box">
        {loader && <Loader />}
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </section>
    </ProductsStyled.ProductWrapper>
  );
};

export default Products;
