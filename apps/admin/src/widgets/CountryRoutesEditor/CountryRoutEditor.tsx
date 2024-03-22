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
import { useSaveRouteMutation } from '../../app/redux/api/routerEditorSliceApi';

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
  const { data: routes, refetch: refetchAllRoutes } = useGetAllRoutesQuery();
  console.log('=>(CountryRoutEditor.tsx:29) routes', routes);
  const { data: countries } = useGetCityQuery();
  const [saveRoute, saveRouteReturn] = useSaveRouteMutation();

  const formik = useFormik<IRouteEditor>({
    initialValues: {
      departureCity: '',
      destinationCity: '',
    },
    validationSchema: ROUT_EDITOR_SCHEMA,
    onSubmit: async (values) => {
      await saveRoute(values);
      refetchAllRoutes();
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
                _isObject(e.value)
                  ? formik.setFieldValue('departureCity', e.value.name)
                  : formik.setFieldValue('departureCity', e.value);
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
                _isObject(e.value)
                  ? formik.setFieldValue('destinationCity', e.value.name)
                  : formik.setFieldValue('destinationCity', e.value);
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
//---------------------------------helpers
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

function _isObject(o: any) {
  return o !== null && typeof o === 'object' && Array.isArray(o) === false;
}
