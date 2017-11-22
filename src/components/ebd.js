import React, { Component } from 'react';
import Navi from '../components/navbar.js';
import ButtonArea from './buttonarea.js';
import NaviBereich from '../components/naviBereiche.js';

export default class Ebd extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: '0',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  
    handleSelect(activeKey) {
      this.setState({
        activeKey: activeKey,
      });
    }

  render(){
    return(
      <div>
      {/*// TODO: Name des Angemeldeten in die Navileiste*/}
        <Navi />
        {/*// TODO: Informationen zum Kind*/}
        <NaviBereich click={this.handleSelect} />
        {/*// TODO: Home Button in die Navileiste. Home ist dann Kinderauswahlfenster*/}
        <ButtonArea />
      </div>
    );
  }
}