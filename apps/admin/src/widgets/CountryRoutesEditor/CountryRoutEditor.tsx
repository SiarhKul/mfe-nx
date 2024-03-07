import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from 'primereact/autocomplete';
import * as Yup from 'yup';
import { useFormik } from 'formik';

interface IRouteEditor {
  departureCity: string;
  destinationCity: string;
}

export default function FormikDoc() {
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

  const formik: any = useFormik<IRouteEditor>({
    initialValues: {
      departureCity: '',
      destinationCity: '',
    },
    validationSchema: RoutEditorSchema,
    onSubmit: (values) => {
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
  //todo Add prefix
  return (
    <div className="p-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor="ac_item">Departure city</label>
            <AutoComplete
              inputId="departureCity"
              name="departureCity"
              value={formik.values.item}
              suggestions={departureCity}
              // completeMethod={search}
              className={classNames({
                'p-invalid': isFormFieldInvalid('item'),
              })}
              onChange={(e) => {
                formik.setFieldValue('departureCity', e.value);
              }}
            />
            {getFormErrorMessage('departureCity')}
          </div>
          <div>
            <label htmlFor="destinationCity">Destination City</label>
            <AutoComplete
              inputId="destinationCity"
              name="destinationCity"
              value={formik.values.item}
              suggestions={destinationCity}
              // completeMethod={search}
              className={classNames({
                'p-invalid': isFormFieldInvalid('item'),
              })}
              onChange={(e) => {
                formik.setFieldValue('destinationCity', e.value);
              }}
            />
            {getFormErrorMessage('destinationCity')}
          </div>
        </div>
        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
}
