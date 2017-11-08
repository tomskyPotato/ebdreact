import React, { Component } from 'react';
import { Button, Jumbotron, Table } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Navi from './navbar.js';
import ButtonArea from './buttonarea.js';
import sozial from './data/sozial.js';
import NaviBereich from './naviBereiche.js';
import Tabelle from './data/tabelle.js';

const divStyle = {
  textAlign: 'center',
}

export default class Ebd extends Component{
  constructor(props){
    super(props);
    this.state = {bereichAcitve: 0};
  }

  render(){
    return(
      <div>
        <Navi />
        <NaviBereich />
        <Tabelle />
        <ButtonArea />
      </div>
    );
  }
}
