import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import NumberField from '../../UI/Field/NumberField';

class MeasuresForm extends Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value}, 
      () => this.props.onChange(this.state)
    );
  }

  render() {
    return (
      <Formik
        initialValues={{...this.state}}
        enableReinitialize="true"
        render={() => (
          <Form>
            <NumberField name="bust" label="Circunferência total do busto (cm)" onChange={this.handleChange}/>
            <NumberField name="waist" label="Circunferência total da cintura alta (cm)" onChange={this.handleChange}/>
            <NumberField name="hip" label="Circunferência total do quadril (cm)" onChange={this.handleChange}/>
            <NumberField name="height" label="Altura (cm)" onChange={this.handleChange}/>
          </Form>
        )}
      />
  )};
}

export default MeasuresForm;