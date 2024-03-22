import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useMemo } from 'react';
import useTranslationNavBar from '../../app/i18n/useTranslationNavBar';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import LanguagesSwitcher from '../LangSwitcher/LangugesSwitcher';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useGetAllRoutesQuery } from '../../../../admin/src/app/redux/api/getAllRouteSliceApi';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useGetUserQuery } from '../../../../host/src/app/redux/apiSlices/userApiSlice';

export const NavBar = () => {
  const { t } = useTranslationNavBar();
  const navigate = useNavigate();

  const { data } = useGetUserQuery();

  // const { data: routes, refetch: refetchAllRoutes } = useGetAllRoutesQuery();
  // console.log('=>(NavBar.tsx:18) routes', routes);

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
        label: t('NavItems.admin'),
        icon: 'pi pi-user-edit',
        command: () => {
          navigate('/admin');
        },
      },
      {
        template: () => {
          return <LanguagesSwitcher />;
        },
      },
      {
        template: () => {
          return <span>{data?.email}</span>;
        },
      },
    ],
    [t, data]
  );

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};
