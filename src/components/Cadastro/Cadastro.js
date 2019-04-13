import React, { Component } from 'react'
import DadosBasicos from './DadosBasicos/DadosBasicos';
import Medidas from './Medidas/Medidas';
import Social from './Social/Social';
import { registrationType } from './registrationType';

class Cadastro extends Component {

  state = {
    personalDataForm: {
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
      number: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Número'
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
    },
    sizeForm: {
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
    },
    socialForm: {
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

  setUpdatedForm = (form, event, inputIdentifier) => {
    const updatedFormElement = { ...form[inputIdentifier] }
    updatedFormElement.value = event.target.value;

    // TODO
    updatedFormElement.valid = true;
    updatedFormElement.touched = true;
    form[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in form) {
      formIsValid = form[inputIdentifier].valid && formIsValid;
    }
    return { form, formIsValid };
  }

  changeHandler = (event, inputIdentifier, type) => {
    const currentForm = {
      ...this.state[type]
    }
    const updatedForm = this.setUpdatedForm(currentForm, event, inputIdentifier);
    this.setState(this.updateState(updatedForm, type))
  }

  updateState = (updatedForm, type) => {
    let state;
    switch(type) {
      case registrationType.PERSONAL:
        return {
          personalDataForm: updatedForm.form,
          formIsValid: updatedForm.formIsVali
        }
      case registrationType.SIZE:
        return {
          sizeForm: updatedForm.form,
          formIsValid: updatedForm.formIsValid
        };
      case registrationType.SOCIAL:
        return {
          socialForm: updatedForm.form,
          formIsValid: updatedForm.formIsValid
        };
      default:
        return state;
    }
  }

  handleSubmit = () => {
    console.log(this.state.personalDataForm);
    console.log(this.state.sizeForm);
    console.log(this.state.socialForm);

   }

  render() {
    return (
      <div>
        <DadosBasicos 
        data={this.state.personalDataForm}
        changeHandler={this.changeHandler}></DadosBasicos>
        <Medidas 
        data={this.state.sizeForm}
        changeHandler={this.changeHandler}></Medidas>
        <Social 
        data={this.state.socialForm}
        changeHandler={this.changeHandler}></Social>
        <button onClick={this.handleSubmit}> Enviar </button>
      </div>
    )
  }
}

export default Cadastro;
