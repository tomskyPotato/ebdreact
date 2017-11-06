import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const divStyle = {
  textAlign: 'center',
}

export default class Welcome extends Component{

  render(){
    return(
      <div style={divStyle}>
        <Jumbotron style={divStyle}>
            <h1>Willkommen bei EBD</h1>
            <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
            <br/>
            <Link  to="/loginPath"><Button bsStyle="primary" type="submit">Anmelden</Button></Link>
            <br/>
            <br/>
            <p><Button bsStyle="default" href="/">Registrieren</Button></p>
        </Jumbotron>
      </div>
    );
  }
}