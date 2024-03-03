import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from 'primereact/autocomplete';
import { Toast } from 'primereact/toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function FormikDoc() {
  const toast = useRef(null);
  const [items, setItems] = useState([]);

  const search = (event: any) => {
    console.log(event);
    // setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
  };
  const RoutEditorSchema = Yup.object().shape({
    item: Yup.string().required('Required'),
  });

  const formik: any = useFormik({
    initialValues: {
      item: '',
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

  return (
    <div className="card flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
        <label htmlFor="ac_item">Value</label>
        <Toast ref={toast} />
        <AutoComplete
          inputId="ac_item"
          name="item"
          value={formik.values.item}
          suggestions={items}
          // completeMethod={search}
          className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
          onChange={(e) => {
            formik.setFieldValue('item', e.value);
          }}
        />
        {getFormErrorMessage('item')}
        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
}
