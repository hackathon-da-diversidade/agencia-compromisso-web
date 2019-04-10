import React, { Component } from 'react'
import Input from '../UI/Input/Input';

class Cadastro extends Component {

  state = {
    form: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Nome'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      age: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Idade'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      job: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Ocupação'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      schooling: {
        elementType: 'select',
        elementConfig: {
          label: 'Escolariade',
          options: [
            {
              value: 'sem-escolaridade',
              displayValue: 'Sem Escolaridade'
            },
            {
              value: 'fundamental-incompleto',
              displayValue: 'Ensino Fundamental Incompleto'
            },
            {
              value: 'fundamental-completo',
              displayValue: 'Ensino Fundamental Completo'
            },
            {
              value: 'medio-incompleto',
              displayValue: 'Ensino Médio Incompleto'
            },
            {
              value: 'medio-completo',
              displayValue: 'Ensino Médio Completo'
            },
            {
              value: 'tecnico-incompleto',
              displayValue: 'Ensino Técnico Incompleto'
            },
            {
              value: 'tecnico-completo',
              displayValue: 'Ensino Técnico Completo'
            },
            {
              value: 'superior-incompleto',
              displayValue: 'Ensino Superior Incompleto'
            },
            {
              value: 'superior-completo',
              displayValue: 'Ensino Superior Completo'
            },
          ]
        },
        validation: {},
        valid: true
      },
      race: {
        elementType: 'select',
        elementConfig: {
          label: 'Raça',
          options: [
            {
              value: 'branco',
              displayValue: 'Branco'
            },
            {
              value: 'negro',
              displayValue: 'Negro'
            },
            {
              value: 'indigena',
              displayValue: 'Indígena'
            },
            {
              value: 'asiatico',
              displayValue: 'Asiático'
            },
            {
              value: 'pardo',
              displayValue: 'Pardo'
            },
            {
              value: 'nao-declara',
              displayValue: 'Prefere Não Declarar'
            },
          ]
        },
        validation: {},
        valid: true
      },
      people: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Quantas pessoas moram com você?'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      income: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Renda Familiar'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      children: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Número de filhos:'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      // TODO - alterar para radio button - precisa ser implementado aindan no Input.js
      housing: {
        elementType: 'select',
        elementConfig: {
          label: 'Moradia',
          options: [
            {
              value: 'propria',
              displayValue: 'Própria'
            },
            {
              value: 'alugada',
              displayValue: 'Alugada'
            },
            {
              value: 'cedida',
              displayValue: 'Cedida'
            },
            {
              value: 'outros',
              displayValue: 'Outros'
            },
          ]
        },
        validation: {},
        valid: true
      },
      address: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Endereço'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      neighborhood: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Número'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      number: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Bairro'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'CEP'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      bust: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Circuferência Total do Busto (cm):'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      waist: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Circuferência Total da Cintura Alta (cm):'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      hip: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Circuferência do Quadril (cm):'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      height: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Altura:'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      // TODO - mudar para Radio Button
      genre: {
        elementType: 'select',
        elementConfig: {
          label: 'Gênero',
          options: [
            {
              value: 'feminino',
              displayValue: 'Feminino'
            },
            {
              value: 'masculino',
              displayValue: 'Masculino'
            },
            {
              value: 'outros',
              displayValue: 'Outros'
            }
          ]
        },
        validation: {},
        valid: true
      },
      comments: {
        elementType: 'input',
        elementConfig: {
          type: 'textarea',
          label: 'Observações:'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false,
    loading: false
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedFormElement = { ...updatedForm[inputIdentifier] }

    updatedFormElement.value = event.target.value;

    // TODO
    updatedFormElement.valid = true;

    updatedFormElement.touched = true;

    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      form: updatedForm,
      formIsValid: formIsValid
    });
  }

  handleSubmit = () => { }

  render() {
    const formElements = [];
    for (let key in this.state.form) {
      formElements.push({
        id: key,
        config: this.state.form[key]
      })
    }
    let form = (
      <form onSubmit={this.handleSubmit}>
        {formElements.map(formElement => (
          <Input
            label={formElement.config.elementConfig.label}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
      </form>
    );
    return (
      <div className='cadastro'>
        <h2 className=''>Cadastro</h2>
        {form}
      </div>
    )
  }
}

export default Cadastro
