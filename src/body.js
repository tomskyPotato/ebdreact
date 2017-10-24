import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Route } from 'react-router-dom'

const divStyle = {
  textAlign: 'center',
}

class Body extends Component {
    render(){
      return(
          <div>
            <Route path='/' exact component={welcome} />
            <Route path='/mathilda' component={mathilda} />
          </div>
      );
    }
  }

const welcome =() => 
  <Jumbotron style={divStyle}>
    <h1>Willkommen bei EBD</h1>
    <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
    <br/>
    <p><Button bsStyle="primary" href="./mathilda">Anmelden</Button></p>
    <p><Button bsStyle="primary" href="./mathilda">Registrieren</Button></p>
  </Jumbotron>

const mathilda =() =>
  <Jumbotron style={divStyle}>
    <h1>Willkommen bei Mathilda und Lilly</h1>
    <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
    <p><Button bsStyle="primary" href="./">Home</Button></p>
  </Jumbotron>

  export default Body;