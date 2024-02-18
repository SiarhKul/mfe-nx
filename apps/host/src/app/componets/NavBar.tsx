import { navSchema } from '../../schemas/nav.schema';
import { Link } from 'react-router-dom';
import * as React from 'react';
import useTranslationHost from '../../i18n/useTranslationHost';

export const NavBar = () => {
  const { t } = useTranslationHost();

  return (
    <ul>
      {navSchema.map((nav) => {
        return (
          <li key={nav.name}>
            <Link className="underline text-blue-800" to={nav.path}>
              {t(nav.translationKey)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
