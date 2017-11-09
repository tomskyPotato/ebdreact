import React, { Component } from 'react';
import Navi from '../components/navbar.js';

export default class Ebd extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      email: "tomsky@ebd.de",
      password: "12345ABC"
    };
  }

  handleClick = event => {
    this.props.click(this.state.email);
  }

  render(){
    return(
      <div>
      {/*// TODO: Name des Angemeldeten in die Navileiste*/}
        <Navi />
        <p>Kinder</p>
        <button href="/ebd"
                onClick={ this.handleClick.bind(this)} >
          <img src={require("../data/junge.jpg")} alt="my" />
          <p>Name Junge</p>
        </button>
        <button href="/ebd"
                onClick={ this.handleClick.bind(this)} >
          <img src={require("../data/mädchen.jpg")} alt="my" />
          <p>Name Mädchen</p>
        </button>
      </div>
    );
  }
}