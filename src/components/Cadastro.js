import React, { Component } from 'react'

class Cadastro extends Component {
  render() {
    return (
      <div className='cadastro'>
        <h2 className=''>Cadastro</h2>
        <form className='form-cadastro'>
          <div className='nome form-group'>
            <label>Nome Completo: </label>
            <input className='form-control' type='text' name='nome' id='nome' />
          </div>

          <div className='escolaridade form-group'>
            <label>Escolaridade: </label>
            <select className='form-control'>
              <option value='vazio'> </option>
              <option value='sem'> Sem Escolaridade </option>
              <option value='ensf'> Ensino Fundamental </option>
              <option value='ensfi'> Ensino Fundamental Incompleto </option>
              <option value='ensf'> Ensino Fundamental Completo </option>
              <option value='ensmi'> Ensino Médio Incompleto </option>
              <option value='ensm'> Ensino Médio Completo </option>
              <option value='ensti'> Ensino Técnico Incompleto </option>
              <option value='enst'> Ensino Técnico Completo </option>
              <option value='enssupi'> Ensino Superior Incompleto </option>
              <option value='enssup'> Ensino Superior Completo </option>
            </select>
          </div>

          <div className='etnia form-group'>
            <label>Etnia: </label>
            <select className='form-control'>
              <option value='vazio'> </option>
              <option value='branco'> Branco </option>
              <option value='negro'> Negro </option>
              <option value='indio'> Indígena </option>
              <option value='amarelo'> Amarelo </option>
              <option value='pardo'> Pardo </option>
              <option value='sem'> Prefere Não Declarar </option>
            </select>
          </div>
          <div className='idade form-group'>
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
              name='ocupacacao'
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
              className='btn btn-primary btn-raised'
              type='submit'
              value='Salvar'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default Cadastro
