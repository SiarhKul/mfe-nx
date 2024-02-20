import { IconType } from 'react-icons';
import {
  FaBagShopping,
  FaCircleInfo,
  FaHouse,
  FaIdCard,
} from 'react-icons/fa6';

export type INavSchema = {
  name: string;
  path: string;
  translationKey: string;
  icon: IconType;
};

export const navSchema: INavSchema[] = [
  { name: 'Home', path: '/', translationKey: 'NavItems.home', icon: FaHouse },
  {
    name: 'Shop',
    path: '/shop',
    translationKey: 'NavItems.shop',
    icon: FaBagShopping,
  },
  {
    name: 'Cart',
    path: '/cart',
    translationKey: 'NavItems.card',
    icon: FaIdCard,
  },
  {
    name: 'About',
    path: '/about',
    translationKey: 'NavItems.about',
    icon: FaCircleInfo,
  },
];
