import { navSchema } from '../../schemas/nav.schema';
import { Link } from 'react-router-dom';
import * as React from 'react';
import useTranslationHost from '../../i18n/useTranslationHost';

export const NavBar = () => {
  const { t } = useTranslationHost();

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
