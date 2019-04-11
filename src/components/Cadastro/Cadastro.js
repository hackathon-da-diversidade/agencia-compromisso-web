import React, { Component } from 'react'
import DadosBasicos from './DadosBasicos/DadosBasicos';
import Medidas from './Medidas/Medidas';
import Social from './Social/Social';

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

  setUpdatedForm = (updatedForm, event, inputIdentifier) => {
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
    return { updatedForm, formIsValid };
  }

  socialHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.socialForm
    }
    const newForm = this.setUpdatedForm(updatedForm, event, inputIdentifier);
    this.setState({
      socialForm: newForm.updatedForm,
      formIsValid: newForm.formIsValid
    });
  }

  personalDataHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.personalDataForm
    }
    const newForm = this.setUpdatedForm(updatedForm, event, inputIdentifier);
    this.setState({
      personalDataForm: newForm.updatedForm,
      formIsValid: newForm.formIsValid
    });
  }

  sizeHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.sizeForm
    }
    const newForm = this.setUpdatedForm(updatedForm, event, inputIdentifier);
    this.setState({
      sizeForm: newForm.updatedForm,
      formIsValid: newForm.formIsValid
    });
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
        changeHandler={this.personalDataHandler}></DadosBasicos>
        <Medidas 
        data={this.state.sizeForm}
        changeHandler={this.sizeHandler}></Medidas>
        <Social 
        data={this.state.socialForm}
        changeHandler={this.socialHandler}></Social>
        <button onClick={this.handleSubmit}> Enviar </button>
      </div>
    )
  }
}

export default Cadastro
