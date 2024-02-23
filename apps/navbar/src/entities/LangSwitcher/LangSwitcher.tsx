import React, { useState } from 'react';
import { i18nService } from '@mfe-nx/internalisation';

const options = [
  { value: 'en-GB', text: 'Eng' },
  { value: 'ru', text: 'Ru' },
];
export const LangSwitcher = () => {
  const [selected, setSelected] = useState(options[0].value);

  const onChangeLanguage = (event: any) => {
    i18nService.changeLanguage(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <select
        className="bg-indigo-600 text-white"
        value={selected}
        onChange={onChangeLanguage}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
