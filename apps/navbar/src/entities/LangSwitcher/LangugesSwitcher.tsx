import { useEffect, useState } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { i18nService } from '@mfe-nx/internalisation';

const options = [
  { value: 'en-GB', text: 'Eng' },
  { value: 'ru', text: 'Ru' },
];

const LanguagesSwitcher = () => {
  const [selectedCity, setSelectedCity] = useState(options[0]);

  const onChangeLanguage = (e: any) => {
    i18nService.changeLanguage(e.value);
    setSelectedCity(e.value);
  };

  return (
    <div>
      <Dropdown
        value={selectedCity}
        onChange={onChangeLanguage}
        options={options}
        optionLabel="text"
        inputId="text"
        placeholder={selectedCity.text}
      />
    </div>
  );
};
export default LanguagesSwitcher;
