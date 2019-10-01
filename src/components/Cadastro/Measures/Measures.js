import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import IntegerField from '../../UI/Field/IntegerField';

class Measures extends Component {

  constructor(props) {
    super(props);
    if (props.data) {
      this.state =  props.data;
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value}, 
      () => this.props.onMeasuresChange(this.state)
    );
  }

  render() {
    return (
      <Formik
        initialValues={{...this.state}}
        render={() => (
          <Form>
            <IntegerField name="bust" label="Circunferência total do busto (cm)" onChange={this.handleChange}/>
            <IntegerField name="waist" label="Circunferência total da cintura alta (cm)" onChange={this.handleChange}/>
            <IntegerField name="hip" label="Circunferência total do quadril (cm)" onChange={this.handleChange}/>
            <IntegerField name="height" label="Altura (cm)" onChange={this.handleChange}/>
          </Form>
        )}
      />
  )};
}

export default Measures;