import React from 'react';
import { Formik, Form } from 'formik';

import NumberField from '../../UI/Field/NumberField';

export default ({ data = {}, onChange }) => {
  const onChangeSizes = measures => {
    return onChange({ sizes: { ...data.sizes, ...measures } });
  };

  return (
    <Formik
      initialValues={{ ...data.sizes }}
      enableReinitialize="true"
      render={() => (
        <Form>
          <NumberField
            name="totalBustCircumference"
            label="Circunferência total do busto (cm)"
            onChange={onChangeSizes}
          />
          <NumberField
            name="totalWaistCircumference"
            label="Circunferência total da cintura alta (cm)"
            onChange={onChangeSizes}
          />
          <NumberField
            name="totalHipCircumference"
            label="Circunferência total do quadril (cm)"
            onChange={onChangeSizes}
          />
          <NumberField
            name="height"
            label="Altura (cm)"
            onChange={onChangeSizes}
          />
        </Form>
      )}
    />
  );
};
