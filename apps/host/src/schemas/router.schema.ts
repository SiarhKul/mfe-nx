import * as React from 'react';
const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const About = React.lazy(() => import('about/Module'));

export type TRouterSchema = {
  path: string;
  component: any;
  nameMenuItem: string;
};

export const routerSchema: TRouterSchema[] = [
  {
    path: 'shop',
    component: Shop,
    nameMenuItem: 'Shop',
  },
  {
    path: 'cart',
    component: Cart,
    nameMenuItem: 'Card',
  },
  {
    path: 'about',
    component: About,
    nameMenuItem: 'About',
  },
];
