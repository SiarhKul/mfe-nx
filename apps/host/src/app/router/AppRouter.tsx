import { Route, Routes } from 'react-router-dom';
import NxWelcome from '../nx-welcome';
import * as React from 'react';
const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const About = React.lazy(() => import('about/Module'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
};
export default AppRoutes;
