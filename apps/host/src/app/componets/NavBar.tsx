import { navSchema } from '../../schemas/nav.schema';
import { Link } from 'react-router-dom';
import * as React from 'react';

export function NavBar() {
  return (
    <ul>
      {navSchema.map((nav: any) => {
        return (
          <li key={nav.name}>
            <Link className="underline text-blue-800" to={nav.path}>
              {nav.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
