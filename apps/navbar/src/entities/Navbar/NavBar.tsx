import { Link } from 'react-router-dom';
import * as React from 'react';
import { navSchema } from './schema/nav.schema';
import useTranslationNavBar from '../../app/i18n/useTranslationNavBar';

export const NavBar = () => {
  const { t } = useTranslationNavBar();

  return (
    <ul>
      {navSchema.map((nav) => {
        const Icon = nav.icon;
        return (
          <li key={nav.name}>
            <Link className="underline text-blue-800" to={nav.path}>
              <div className="flex gap-2 items-center">
                <Icon /> {t(nav.translationKey)}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
