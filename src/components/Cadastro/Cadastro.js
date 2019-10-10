import React, { Component } from 'react'

import { registrationType } from './registrationType';
import { ModeloFactory } from './ModeloFactory';

import DadosBasicos from './DadosBasicos/DadosBasicos';
import MeasuresForm from './MeasuresForm/MeasuresForm';
import SocialForm from './SocialForm/SocialForm';
import Social from './SocialForm/Social';
import Header from '../Header'
import Button from '../UI/Button/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import classes from './Cadastro.module.css';

import axios from '../../axios';

class Cadastro extends Component {

  state = {
    selectedTabIndex: 0,
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
      guardianName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Nome da responsável'
        },
        value: '',
        validation: {
          required: false
        },
        hide: true,
        valid: false,
        touched: false
      },
     guardianBirth: {
        elementType: 'date',
        elementConfig: {
          type: 'date',
          label: 'Data de nascimento da responsável'
        },
        value: '',
        validation: {
          required: false
        },
        hide: true,
        valid: false,
        touched: false
      },
      guardianEmail: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          label: 'Email da responsável'
        },
        value: '',
        validation: {
          required: true
        },
        hide: true,
        valid: false,
        touched: false
      },
      guardianPhoneNumber: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Telefone da responsável'
        },
        value: '',
        validation: {
          required: true
        },
        hide: true,
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
      addressComplement: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Complemento'
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
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Cidade'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'País'
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
    socialFormOld: {
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
      availability: {
        elementType: 'select',
        elementConfig: {
          label: 'Disponibilidade',
          options: [
            {
              value: 'manha',
              displayValue: 'Manhã'
            },
            {
              value: 'tarde',
              displayValue: 'Tarde'
            },
            {
              value: 'final-de-semana',
              displayValue: 'Final de semana'
            },
            {
              value: 'total',
              displayValue: 'Total'
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
    loading: false,
    error: false
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
      case 'guardianBirth':
        updatedFormElement.value = event;
        break;
      default:
        updatedFormElement.value = event.target.value;
    }

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
          formIsValid: updatedForm.formIsValid,
          error: false
        }
      case registrationType.SIZE:
        return {
          sizeForm: updatedForm.form,
          formIsValid: updatedForm.formIsValid,
          error: false
        };
      case registrationType.SOCIAL:
        return {
          socialForm: updatedForm.form,
          formIsValid: updatedForm.formIsValid,
          error: false
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
      birth: personalDataForm.birth.value,
      guardianName: personalDataForm.guardianName.value,
      guardianBirth: personalDataForm.guardianBirth.value,
      guardianEmail: personalDataForm.guardianEmail.value,
      guardianPhoneNumber: personalDataForm.guardianPhoneNumber.value,
      email: personalDataForm.email.value,
      phoneNumber: personalDataForm.phoneNumber.value,
      addressNumber: personalDataForm.addressNumber.value,
      address: personalDataForm.address.value,
      addressComplement: personalDataForm.addressComplement.value,
      neighborhood: personalDataForm.neighborhood.value,
      city: personalDataForm.city.value,
      country: personalDataForm.country.value,
      zipCode: personalDataForm.zipCode.value,
      genre: personalDataForm.genre.value,
      bust: sizeForm.bust.value,
      waist: sizeForm.waist.value,
      hip: sizeForm.hip.value,
      height: sizeForm.height.value,
      job: socialForm.job.value,
      schooling: socialForm.schooling.value,
      race: socialForm.race.value,
      availability: socialForm.availability.value,
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
      this.props.history.push({
        pathname: '/lista'
    });
    })
    .catch(err => {
        this.setState({
          error: true
        });
    })
  };

  handleSelectTabChange = (event, newValue) => {
    this.setState({selectedTabIndex: newValue});
  };

  onMeasuresFormChange = (event) => {
    let measuresForm = {...this.state.measuresForm};
    measuresForm[event.target.name] = event.target.canonicalValue;
    this.setState({measuresForm});
  };

  onSocialFormChange = (event) => {
    let socialForm = {...this.state.socialForm};
    socialForm[event.target.name] = event.target.canonicalValue;
    this.setState({socialForm});
  };

  renderTab = () => {
    switch (this.state.selectedTabIndex) {
      case 0:
        return (
          <DadosBasicos data={this.state.personalDataForm}
            changeHandler={this.changeHandler}>
          </DadosBasicos>);
      case 1:
        return (
          <MeasuresForm data={this.state.measuresForm} onChange={this.onMeasuresFormChange} />
        )
      case 2:
        return (
          <SocialForm data={this.state.socialForm} onChange={this.onSocialFormChange} />
        )
      default:
        return (<div></div>);
    }
  };

  render() {
    let error = null;
    if (this.state.error) {
      error = ( <span className={classes.Error}> Ocorreu um erro ao salvar os dados. Tente novamente. </span>)
    }

    return (
      <div className={classes.Cadastro}>
        <Header title="Cadastro" />
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.selectedTabIndex}
            onChange={this.handleSelectTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto">
            <Tab label="Dados Básicos" />
            <Tab label="Medidas" />
            <Tab label="Social" />
          </Tabs>
        </AppBar>
        {this.renderTab()}
        <Button clicked={this.handleSubmit}> Salvar </Button>
        {error}
      </div>
    )
  }
}

export default Cadastro;
