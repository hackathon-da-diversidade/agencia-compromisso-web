import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import NumberField from '../../UI/Field/NumberField';

class MeasuresForm extends Component {

  render() {
    return (
      <Formik
        initialValues={{...this.props.data}}
        enableReinitialize="true"
        render={() => (
          <Form>
            <NumberField name="bust" label="Circunferência total do busto (cm)" onChange={this.props.onChange}/>
            <NumberField name="waist" label="Circunferência total da cintura alta (cm)" onChange={this.props.onChange}/>
            <NumberField name="hip" label="Circunferência total do quadril (cm)" onChange={this.props.onChange}/>
            <NumberField name="height" label="Altura (cm)" onChange={this.props.onChange}/>
          </Form>
        )}
      />
  )};
}

export default MeasuresForm;