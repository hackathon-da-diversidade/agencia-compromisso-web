import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import NumberField from '../../UI/Field/NumberField';

export default ({ data = {}, onChange }) => {
  const [sizes, setSizes] = useState({});
  const saveModel = measures => {
    setSizes({
      ...sizes,
      ...measures,
    });
    return onChange({ sizes: sizes });
  };

  return (
    <Formik
      initialValues={{ ...data }}
      enableReinitialize="true"
      render={() => (
        <Form>
          <NumberField
            name="totalBustCircumference"
            label="Circunferência total do busto (cm)"
            onChange={saveModel}
          />
          <NumberField
            name="totalWaistCircumference"
            label="Circunferência total da cintura alta (cm)"
            onChange={saveModel}
          />
          <NumberField
            name="totalHipCircumference"
            label="Circunferência total do quadril (cm)"
            onChange={saveModel}
          />
          <NumberField name="height" label="Altura (cm)" onChange={saveModel} />
        </Form>
      )}
    />
  );
};
