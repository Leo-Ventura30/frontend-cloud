import React, { Component } from 'react';
import api from '../../services/api';
import logo from '../../assets/react.svg';
import "./styles.css";

export default class main extends Component {
  //sempre nome state
  //onde fica tudo manipulado pelo component
  //conforme recebe alguma ação, ele salva cada atualização feita na aplicaçao
  //conforme usuario digitao input recebe essas informaçoes
  state = {
    newBox: '',
  };

  handleSubmit = async e =>{
    e.preventDefault();
    const response = await api.post('/boxes',{
      title: this.state.newBox,
  });

  this.props.history.push(`/box/${response.data._id}`);
};

  handleInputChange = (e) =>{
    this.setState({newBox: e.target.value});
  };

//this.handleSubmit, chama a arrow function, e vai disparar quando o usuario clikar
//input valor que o usuario digitou
  render() {
    return (
        <div id="main-container">
            <li>BUXI on the box</li>
            <form onSubmit={this.handleSubmit}>
                <img id="logo" src={logo} alt=""/>
                <input placeholder="Criar Box"
                       value={this.state.newBox}
                       onChange={this.handleInputChange}
                       />
                <button type="submit">Criar</button>
            </form>
            <li>Armazene seus arquivos com confiabilidade e rapidez!</li>
        </div>
    );
  }
}
