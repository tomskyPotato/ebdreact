import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './App.css';

const divStyle = {
  textAlign: 'center',
}

class Body extends Component {
    render(){
      return(
        <div className="flex-item flex-item-body">
          <Jumbotron style={divStyle}>
            <h1>Willkommen bei EBD</h1>
            <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
            <p><Button bsStyle="primary">Infos</Button></p>
          </Jumbotron>
        </div>
      );
    }
  }

  export default Body;