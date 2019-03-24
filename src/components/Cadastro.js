import React, { Component } from 'react'

class Cadastro extends Component {
  render() {
    return (
      <div className='cadastro'>
        <h2>Cadastro</h2>
        <form>
          <div className='nome'>
            <label>Nome Completo: </label>
            <input type="text" name="nome" id="nome"></input>
          </div>

          <div className='escolaridade'>
            <label>Escolaridade:  </label>
            <select>
              <option value="vazio"> </option>
              <option value="sem"> Sem Escolaridade </option>
              <option value="ensf"> Ensino Fundamental </option>
              <option value="ensfi"> Ensino Fundamental Incompleto </option>
              <option value="ensf"> Ensino Fundamental Completo </option>
              <option value="ensmi"> Ensino Médio Incompleto </option>
              <option value="ensm"> Ensino Médio Completo </option>
              <option value="ensti"> Ensino Técnico Incompleto </option>
              <option value="enst"> Ensino Técnico Completo </option>
              <option value="enssupi"> Ensino Superior Incompleto </option>
              <option value="enssup"> Ensino Superior Completo </option>
            </select>
          </div>

          <div className='etnia'>
            <label>Etnia:  </label>
            <select>
              <option value="vazio"> </option>
              <option value="branco"> Branco </option>
              <option value="negro"> Negro </option>
              <option value="indio"> Indígena </option>
              <option value="amarelo"> Amarelo </option>
              <option value="pardo"> Pardo </option>
              <option value="sem"> Prefere Não Declarar </option>
            </select>
          </div>
          <div className='idade'>
            <label>Idade: </label>
            <input type="number" name="idade" id="idade"></input>
          </div>


          <div className='ocupacao'>
            <label>Ocupação: </label>
            <input type="text" name="ocupacacao" id="ocupacao"></input>
          </div>

          <div className='pessoas'>
            <label>Quantas pessoas moram com você? </label>
            <input type="number" name="pessoas" id="pessoas"></input>
          </div>

          <div className='renda'>
            <label>Renda Familiar:  </label>
            <input type="number" name="renda" id="renda"></input>
          </div>

          <div className='filhos'>
            <label>Número de filhos: </label>
            <input type="number" name="pessoas" id="pessoas"></input>
          </div>

          <div className='moradia'>
            <label>Moradia: </label>
            <input name="moradia" id="propria" value="propria" type="radio"></input>
            <label for="propria"> Própria </label>
            <input name="moradia" id="alugada" value="alugada" type="radio"></input>
            <label for="alugada"> Alugada </label>
            <input name="moradia" id="cedida" value="cedida" type="radio"></input>
            <label for="cedida"> Cedida </label>
            <input name="moradia" id="moradia" value="outros" type="radio"></input>
            <label for="outros"> Outros </label>
          </div>
          <div className='endereco'>
            <label>Endereço: </label>
            <input type="text" name="endereco" id="endereco"></input>
            <label>Bairro: </label>
            <input type="text" name="bairro" id="bairro"></input>
            <label>Número: </label>
            <input type="text" name="numero" id="numero"></input>
            <label>CEP: </label>
            <input type="text" name="cep" id="cep"></input>
          </div>

          <div className='medidas'>
            <label>Circuferência Total do Busto (cm): </label>
            <input type="number" name="busto" id="busto"></input>
            <label>Circuferência Total da Cintura Alta (cm): </label>
            <input type="number" name="cintura" id="cintura"></input>
            <label>Circuferência do Quadril (cm): </label>
            <input type="number" name="quadril" id="quadril"></input>
            <label>Altura (m): </label>
            <input type="number" name="altura" id="altura"></input>
          </div>



          <div className='genero'>
            <input name="genero" id="feminino" value="feminino" type="radio"></input>
            <label for="feminino"> Feminino </label>

            <input name="genero" id="masculino" value="masculino" type="radio"></input>
            <label for="masculino"> Masculino </label>

            <input name="genero" id="outros" type="radio" ></input>
            <label for="outros"> Outros </label>
            <input type="text"></input>
          </div>
          <div className='salvar'>
            <input type="submit" value="Submit"></input>
          </div>

        </form>
      </div>
    )
  }
}

export default Cadastro
