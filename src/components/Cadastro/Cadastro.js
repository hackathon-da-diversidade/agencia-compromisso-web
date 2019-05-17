import React, { Component } from 'react'

import { registrationType } from './registrationType';
import { ModeloFactory } from './ModeloFactory';

import DadosBasicos from './DadosBasicos/DadosBasicos';
import Medidas from './Medidas/Medidas';
import Social from './Social/Social';
import Header from '../Header'
import Button from '../UI/Button/Button';

import classes from './Cadastro.module.css';

import axios from '../../axios';

// TODO - validação 
// TODO - resposta após request
// TODO - dados do responsável 
// TODO - salvar redireciona pra 'lista'
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
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          label: 'Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      birth: {
        elementType: 'date',
        elementConfig: {
          type: 'date',
          label: 'Data de nascimento'
        },
        value: '',
        validation: {
          required: true
        },
        underage: false,
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
      phoneNumber: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Telefone'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      addressNumber: {
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
          label: 'Escolaridade',
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
      LGBTQI: {
        elementType: 'checkbox',
        elementConfig: {
          type: 'checkbox',
          label: 'LGBTQI+:'
        },
        value: false,
        valid: false,
        touched: false
      },
      comments: {
        elementType: 'input',
        elementConfig: {
          type: 'input',
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

  changeHandler = (event, inputIdentifier, type) => {
    const currentForm = {
      ...this.state[type]
    }
    const updatedForm = this.setUpdatedForm(currentForm, event, inputIdentifier);
    this.setState(this.updateState(updatedForm, type))
  }

  setUpdatedForm = (form, event, inputIdentifier) => {
    const updatedFormElement = { ...form[inputIdentifier] }
    switch (inputIdentifier) {
      case 'LGBTQI':
        updatedFormElement.value = event.target.checked;
        break;
      case 'birth':
        updatedFormElement.value = event;
        updatedFormElement.underage = this.calculateAge(event);
        break;
      default:
        updatedFormElement.value = event.target.value;
    }

    // TODO - validação 
    updatedFormElement.valid = true;
    updatedFormElement.touched = true;
    form[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in form) {
      formIsValid = form[inputIdentifier].valid && formIsValid;
    }
    return { form, formIsValid };
  }

  calculateAge = (birthDate) => { 
    const dateDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(dateDiff); 
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age < 18;
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
    const personalDataForm = this.state.personalDataForm;
    const sizeForm = this.state.sizeForm;
    const socialForm = this.state.socialForm;

    const model = ModeloFactory({
      name: personalDataForm.name.value,
      birth: personalDataForm.age.value,
      email: personalDataForm.email.value,
      phoneNumber: personalDataForm.phoneNumber.value,
      addressNumber: personalDataForm.addressNumber.value,
      address: personalDataForm.address.value,
      neighborhood: personalDataForm.neighborhood.value,
      zipCode: personalDataForm.zipCode.value,
      genre: personalDataForm.genre.value,
      bust: sizeForm.bust.value,
      waist: sizeForm.waist.value,
      hip: sizeForm.hip.value,
      height: sizeForm.height.value,
      job: socialForm.job.value,
      schooling: socialForm.schooling.value,
      race: socialForm.race.value,
      people: socialForm.people.value,
      income: socialForm.income.value,
      children: socialForm.children.value,
      housing: socialForm.housing.value,
      LGBTQI: socialForm.LGBTQI.value,
      comments: socialForm.comments.value
    });

    this.saveModel(model);
   }

   saveModel = (model) => {
    axios.post('create', model)
    .then(res => {
        // TODO - yay it worked - enviar pra outra página 
    })
    .catch(err => {
        // TODO - something
    })
   }

  render() {
    return (
      <div className={classes.Cadastro}>
        <Header/>
        <DadosBasicos 
        data={this.state.personalDataForm}
        changeHandler={this.changeHandler}></DadosBasicos>
        <Medidas 
        data={this.state.sizeForm}
        changeHandler={this.changeHandler}></Medidas>
        <Social 
        data={this.state.socialForm}
        changeHandler={this.changeHandler}></Social>
        <Button clicked={this.handleSubmit}> Salvar </Button>
      </div>
    )
  }
}

export default Cadastro;
