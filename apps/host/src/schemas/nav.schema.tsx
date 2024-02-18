export type INavSchema = {
  name: string;
  path: string;
  translationKey: string;
};

export const navSchema: INavSchema[] = [
  { name: 'Home', path: '/', translationKey: 'NavItems.home' },
  { name: 'Shop', path: '/shop', translationKey: 'NavItems.shop' },
  { name: 'Cart', path: '/cart', translationKey: 'NavItems.card' },
  { name: 'About', path: '/about', translationKey: 'NavItems.about' },
];
