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
              value: 'teste',
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
            value: 'teste',
            validation: {},
            valid: true           
        }
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

  handleSubmit = () => {}

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
     
         {/*  <div className='idade form-group'>
            <label>Idade: </label>
            <input
              className='form-control'
              type='number'
              name='idade'
              id='idade'
            />
          </div>

          <div className='ocupacao form-group'>
            <label>Ocupação: </label>
            <input
              className='form-control'
              type='text'
              name='ocupacao'
              id='ocupacao'
            />
          </div>

          <div className='pessoas form-group'>
            <label>Quantas pessoas moram com você? </label>
            <input
              className='form-control'
              type='number'
              name='pessoas'
              id='pessoas'
            />
          </div>

          <div className='renda form-group'>
            <label>Renda Familiar: </label>
            <input
              className='form-control'
              type='number'
              name='renda'
              id='renda'
            />
          </div>

          <div className='filhos form-group'>
            <label>Número de filhos: </label>
            <input
              className='form-control'
              type='number'
              name='pessoas'
              id='pessoas'
            />
          </div>

          <div className='moradia form-group'>
            <label>Moradia: </label> <br />
            <div className='radio'>
              <input name='moradia' id='propria' value='propria' type='radio' />
              <label for='propria'> Própria </label>
            </div>
            <div className='radio'>
              <input name='moradia' id='alugada' value='alugada' type='radio' />
              <label for='alugada'> Alugada </label>
            </div>
            <div className='radio'>
              <input name='moradia' id='cedida' value='cedida' type='radio' />
              <label for='cedida'> Cedida </label>
            </div>
            <div className='radio'>
              <input name='moradia' id='moradia' value='outros' type='radio' />
              <label for='outros'> Outros </label>
            </div>
          </div>

          <div className='endereco form-group'>
            <label>Endereço: </label>
            <input
              className='form-control'
              type='text'
              name='endereco'
              id='endereco'
            />
            <label>Bairro: </label>
            <input
              className='form-control'
              type='text'
              name='bairro'
              id='bairro'
            />
            <label>Número: </label>
            <input
              className='form-control'
              type='text'
              name='numero'
              id='numero'
            />
            <label>CEP: </label>
            <input className='form-control' type='text' name='cep' id='cep' />
          </div>

          <div className='medidas form-group'>
            <label>Circuferência Total do Busto (cm): </label>
            <input
              className='form-control'
              type='number'
              name='busto'
              id='busto'
            />
            <label>Circuferência Total da Cintura Alta (cm): </label>
            <input
              className='form-control'
              type='number'
              name='cintura'
              id='cintura'
            />
            <label>Circuferência do Quadril (cm): </label>
            <input
              className='form-control'
              type='number'
              name='quadril'
              id='quadril'
            />
            <label>Altura (m): </label>
            <input
              className='form-control'
              type='number'
              name='altura'
              id='altura'
            />
          </div>

          <div className='genero form-group'>
            <div className='radio'>
              <input
                name='genero'
                id='feminino'
                value='feminino'
                type='radio'
              />
              <label for='feminino'> Feminino </label>
            </div>

            <div className='radio'>
              <input
                name='genero'
                id='masculino'
                value='masculino'
                type='radio'
              />
              <label for='masculino'> Masculino </label>
            </div>

            <div className='radio'>
              <input name='genero' id='outros' type='radio' />
              <label for='outros'> Outros </label>
            </div>

            <div className='form-group'>
              <label for='obervacoes'>OBS:</label>
              <input
                id='observacoes'
                className='form-control'
                type='textarea'
              />
            </div>
          </div>
          <div className='salvar'>
            <input
              className='btn btn-secondary btn-raised'
              type='submit'
              value='Salvar'
            />
          </div> */}
      </div>
    )
  }
}

export default Cadastro
