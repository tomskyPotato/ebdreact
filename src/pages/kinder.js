import React, { Component } from 'react';
import Navi from '../components/navbar.js';
import ButtonArea from './buttonarea.js';
import NaviBereich from '../components/naviBereiche.js';
import Tabelle from '../components/tabelle.js';

export default class Ebd extends Component{
  constructor(props){
    super(props);
    this.state = {bereichAcitve: 0};
  }

  render(){
    return(
      <div>
      {/*// TODO: Name des Angemeldeten in die Navileiste*/}
        <Navi />
        {/*// TODO: Informationen zum Kind*/}
        <NaviBereich type="kinder"/>
        <p>Kinder</p>
        <Tabelle />
        {/*// TODO: Home Button in die Navileiste. Home ist dann Kinderauswahlfenster*/}
        <ButtonArea />
      </div>
    );
  }
}