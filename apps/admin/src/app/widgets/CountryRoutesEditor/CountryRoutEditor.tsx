import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from 'primereact/autocomplete';
import { Toast } from 'primereact/toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function FormikDoc() {
  const toast = useRef(null);
  const [departureCity, setDepartureCity] = useState([]);
  const [destinationCity, setDestinationCity] = useState([]);

  // const search = (event: any) => {
  //   console.log(event);
  //   // setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
  // };
  const RoutEditorSchema = Yup.object().shape({
    departureCity: Yup.string().required('Required'),
    destinationCity: Yup.string().required('Required'),
  });

  const formik: any = useFormik({
    initialValues: {
      departureCity: '',
      destinationCity: '',
    },
    validationSchema: RoutEditorSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const isFormFieldInvalid = (name: any) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: any) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  //todo: Add postcss config to work with css
  //todo Add prefix
  return (
    <div className="card flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
        <div className="flex gap-2">
          <label htmlFor="ac_item">Departure city</label>
          <AutoComplete
            inputId="departureCity"
            name="departureCity"
            value={formik.values.item}
            suggestions={departureCity}
            // completeMethod={search}
            className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
            onChange={(e) => {
              formik.setFieldValue('departureCity', e.value);
            }}
          />
          {getFormErrorMessage('departureCity')}
        </div>
        <div className="flex gap-2">
          <label htmlFor="destinationCity">Destination City</label>
          <AutoComplete
            inputId="destinationCity"
            name="destinationCity"
            value={formik.values.item}
            suggestions={departureCity}
            // completeMethod={search}
            className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
            onChange={(e) => {
              formik.setFieldValue('destinationCity', e.value);
            }}
          />
          {getFormErrorMessage('destinationCity')}
        </div>
        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
}
