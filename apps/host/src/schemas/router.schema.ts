import * as React from 'react';
const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const About = React.lazy(() => import('about/Module'));
const Admin = React.lazy(() => import('admin/Module'));

export type TRouterSchema = {
  path: string;
  component: any;
};

export const routerSchema: TRouterSchema[] = [
  {
    path: 'shop',
    component: Shop,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'admin',
    component: Admin,
  },
];
