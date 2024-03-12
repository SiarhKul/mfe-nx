import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from 'primereact/autocomplete';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ICity, useGetCityQuery } from '../../app/redux/api/citySliceApi';
import { useGetAllRoutesQuery } from '../../app/redux/api/getAllRouteSliceApi';

interface IRouteEditor {
  departureCity: string;
  destinationCity: string;
}

type URouteEditor = keyof IRouteEditor;
const ROUT_EDITOR_SCHEMA = Yup.object().shape({
  departureCity: Yup.string().required('Required'),
  destinationCity: Yup.string().required('Required'),
});

export default function FormikDoc() {
  const [departureCity, setDepartureCity] = useState<ICity[]>([]);
  const [destinationCity, setDestinationCity] = useState<ICity[]>([]);
  const { data: routes } = useGetAllRoutesQuery();
  const { data: countries } = useGetCityQuery();

  const formik = useFormik<IRouteEditor>({
    initialValues: {
      departureCity: '',
      destinationCity: '',
    },
    validationSchema: ROUT_EDITOR_SCHEMA,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const searchDepartureCity = (event: AutoCompleteCompleteEvent) => {
    const suggestions = countries ? _filterCountries(event, countries) : [];
    setDepartureCity(suggestions);
  };

  const searchDestinationCity = (event: AutoCompleteCompleteEvent) => {
    const suggestions = countries ? _filterCountries(event, countries) : [];
    setDestinationCity(suggestions);
  };

  const isFormFieldInvalid = (name: URouteEditor) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: URouteEditor) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  //todo Add prefix
  return (
    <div className="p-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor="ac_item">Departure city</label>
            <AutoComplete
              dropdown
              field="name"
              inputId="departureCity"
              name="departureCity"
              value={formik.values.departureCity}
              suggestions={departureCity}
              completeMethod={searchDepartureCity}
              className={classNames({
                'p-invalid': isFormFieldInvalid('departureCity'),
              })}
              onChange={(e) => {
                formik.setFieldValue('departureCity', e.value.name);
              }}
            />
            {getFormErrorMessage('departureCity')}
          </div>
          <div>
            <label htmlFor="destinationCity">Destination City</label>
            <AutoComplete
              dropdown
              field="name"
              inputId="destinationCity"
              name="destinationCity"
              value={formik.values.destinationCity}
              suggestions={destinationCity}
              completeMethod={searchDestinationCity}
              className={classNames({
                'p-invalid': isFormFieldInvalid('destinationCity'),
              })}
              onChange={(e) => {
                formik.setFieldValue('destinationCity', e.value.name);
              }}
            />
            {getFormErrorMessage('destinationCity')}
          </div>
        </div>

        <Button type="submit" label="Submit" />
      </form>

      <div>{JSON.stringify(routes, undefined, 2)}</div>
    </div>
  );
}

const _filterCountries = (
  event: AutoCompleteCompleteEvent,
  countries: ICity[]
) => {
  let _filteredCountries;

  if (!event.query.trim().length) {
    _filteredCountries = [...countries];
  } else {
    _filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().startsWith(event.query.toLowerCase());
    });
  }
  return _filteredCountries;
};
