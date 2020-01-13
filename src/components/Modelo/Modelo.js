import React, { Component } from 'react';

import fitModelAPI from '../../api/fitModelAPI';
import Information from '../UI/Information/Information';

class Modelo extends Component {
  state = {
    model: {},
    error: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.loadModelInfo(id);
  }

  loadModelInfo = async id => {
    try {
      const { data } = await fitModelAPI.get(id);
      this.setState({
        model: data,
      });
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  };

  isLGBTQIA = () => {
    return this.state.model.lgbtqia;
  };

  render() {
    // TODO - formatar datas
    // TODO - exibir dados responsável só se tiver
    return (
      <div>
        <h1> {this.state.model.nome} </h1>
        <Information
          label="Data de Nascimento: "
          value={this.state.model.data_nascimento}
        ></Information>
        <Information
          label="Email: "
          value={this.state.model.email}
        ></Information>
        <Information
          label="Telefone: "
          value={this.state.model.telefone}
        ></Information>
        <Information
          label="Gênero: "
          value={this.state.model.genero}
        ></Information>
        <Information
          label="LGBTQ+: "
          value={this.isLGBTQIA() ? 'Sim' : 'Não'}
        ></Information>
        <Information
          label="Raça: "
          value={this.state.model.etnia}
        ></Information>
        <Information
          label="Disponibilidade: "
          value={this.state.model.disponibilidade}
        ></Information>
        <h2> Medidas </h2>
        <Information
          label="Altura: "
          value={this.state.model.medida_altura}
        ></Information>
        <Information
          label="Busto: "
          value={this.state.model.medida_busto}
        ></Information>
        <Information
          label="Cintura: "
          value={this.state.model.medida_cintura}
        ></Information>
        <Information
          label="Quadril: "
          value={this.state.model.medida_quadril}
        ></Information>
        <h2> Endereço </h2>
        <Information
          label="Logradouro: "
          value={this.state.model.endereco_logradouro}
        ></Information>
        <Information
          label="Número: "
          value={this.state.model.endereco_numero}
        ></Information>
        <Information
          label="Complemento: "
          value={this.state.model.endereco_complemento}
        ></Information>
        <Information
          label="Bairro: "
          value={this.state.model.endereco_bairro}
        ></Information>
        <Information
          label="Cidade: "
          value={this.state.model.endereco_cidade}
        ></Information>
        <Information
          label="Estado: "
          value={this.state.model.endereco_estado}
        ></Information>
        <Information
          label="CEP: "
          value={this.state.model.endereco_cep}
        ></Information>
        <h2> Responsável </h2>
        <Information
          label="Nome: "
          value={this.state.model.responsavel_nome}
        ></Information>
        <Information
          label="Data de Nascimento: "
          value={this.state.model.responsavel_nascimento}
        ></Information>
        <Information
          label="Email: "
          value={this.state.model.responsavel_email}
        ></Information>
        <Information
          label="Telefone: "
          value={this.state.model.responsavel_telefone}
        ></Information>
        <Information
          label="Cidade: "
          value={this.state.model.endereco_cidade}
        ></Information>
        <h2> Outros Dados </h2>
        <Information
          label="Escolaridade: "
          value={this.state.model.escolaridade}
        ></Information>
        <Information
          label="Ocupação: "
          value={this.state.model.ocupacao}
        ></Information>
        <Information
          label="Moradia: "
          value={this.state.model.housing}
        ></Information>
        <Information
          label="Número de moradores: "
          value={this.state.model.moradores}
        ></Information>
        <Information
          label="Quantidade de filhos: "
          value={this.state.model.filhos}
        ></Information>
        <Information
          label="Renda: "
          value={this.state.model.renda}
        ></Information>
        <hr></hr>
        <Information
          label="Observações: "
          value={this.state.model.observacoes}
        ></Information>
      </div>
    );
  }
}

export default Modelo;
