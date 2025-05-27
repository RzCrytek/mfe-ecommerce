import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = lazy(() => import('remoteHome/HomePage'));
const ProductsPage = lazy(() => import('remoteProducts/ProductsPage'));
const ExclusiveProductsPage = lazy(() => import('remoteExclusiveProducts/ExclusiveProductsPage'));
const CartPage = lazy(() => import('remoteCart/CartPage'));

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
        <Link to="/exclusive-products">Product</Link>
        <Link to="/cart">Cart</Link>
      </ul>

      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/exclusive-products" element={<ExclusiveProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
