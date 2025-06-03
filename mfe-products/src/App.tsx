import './App.scss';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Products from './pages/Products/Products';

const ProductsPage = lazy(() => import('./pages/Products/Products'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetail/ProductDetail'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/:category" element={<ProductsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:category" element={<ProductsPage />} />
      <Route path="/detail/:id" element={<ProductDetailPage />} />
      <Route path="/products/detail/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
