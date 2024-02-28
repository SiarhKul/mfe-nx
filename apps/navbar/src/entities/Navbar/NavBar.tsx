import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useMemo } from 'react';
import useTranslationNavBar from '../../app/i18n/useTranslationNavBar';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import LanguagesSwitcher from '../LangSwitcher/LangugesSwitcher';

export const NavBar = () => {
  const { t } = useTranslationNavBar();
  const navigate = useNavigate();

  const items: MenuItem[] = useMemo(
    () => [
      {
        label: t('NavItems.home'),
        icon: 'pi pi-home',
        command: () => {
          navigate('/');
        },
      },
      {
        label: t('NavItems.shop'),
        icon: 'pi pi-shopping-cart',
        command: () => {
          navigate('/shop');
        },
      },
      {
        label: t('NavItems.card'),
        icon: 'pi pi-id-card',
        command: () => {
          navigate('/cart');
        },
      },
      {
        label: t('NavItems.about'),
        icon: 'pi pi-info-circle',
        command: () => {
          navigate('/about');
        },
      },
      {
        template: () => {
          return <LanguagesSwitcher />;
        },
      },
    ],
    [t]
  );

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};
