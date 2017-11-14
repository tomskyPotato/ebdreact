import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Navi from '../components/navbar.js';

export default class Ebd extends Component{

  render(){
    return(
      <div>
      {/*// TODO: Name des Angemeldeten in die Navileiste*/}
        <Navi />
        <p>Kinder</p>
        <Button href="/ebd" >
          <img src={require("../data/junge.jpg")} alt="my" />
          <p>Name Junge</p>
        </Button>
        {'  '}
        <Button href="/ebd">
          <img src={require("../data/mädchen.jpg")} alt="my" />
          <p>Name Mädchen</p>
        </Button>
      </div>
    );
  }
}