import React, { useState } from 'react';

import i18n from '../../i18n.confit';

export const LangSwitcher = () => {
  const options = [
    { value: 'en', text: 'Eng' },
    { value: 'ru', text: 'Ru' },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <select
        className="bg-indigo-600 text-white"
        value={selected}
        onChange={handleChange}
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
