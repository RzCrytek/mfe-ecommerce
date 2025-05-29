import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { capitalize } from 'common-utils';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const HomePage = lazy(() => import('remoteHome/HomePage'));
const ProductsPage = lazy(() => import('remoteProducts/ProductsPage'));
const ExclusiveProductsPage = lazy(() => import('remoteExclusiveProducts/ExclusiveProductsPage'));
const CartPage = lazy(() => import('remoteCart/CartPage'));

function App() {
  return (
    <main id="main">
      <Router>
        <Header />
        <h1>HOST-APP</h1>
        <h2>{capitalize('description')}</h2>

        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/exclusive-products" element={<ExclusiveProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </main>
  );
}

export default App;
