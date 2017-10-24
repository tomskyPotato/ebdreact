import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import loginClass from './login.js';
import Navi from './navbar.js';
import ButtonArea from './buttonarea.js';

const divStyle = {
  textAlign: 'center',
}

class Body extends Component {
    render(){
      return(
          <div>
            <Route path='/' exact component={welcome} />
            <Route path='/mathildaPath' component={Navi} />
            <Route path='/mathildaPath' component={mathilda} />
            <Route path='/mathildaPath' component={ButtonArea} />
            <Route path='/loginPath' component={loginClass} />
          </div>
      );
    }
  }

const welcome =() => 
  <Jumbotron style={divStyle}>
    <h1>Willkommen bei EBD</h1>
    <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
    <br/>
    <p><Button bsStyle="primary" href="./loginPath">Anmelden</Button></p>
    <p><Button bsStyle="primary" href="./welcomePath">Registrieren</Button></p>
  </Jumbotron>

const mathilda =() =>
<div>
  <Jumbotron style={divStyle}>
    <h1>Willkommen bei Mathilda und Lilly</h1>
    <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
    <p><Button bsStyle="primary" href="./">Home</Button></p>
  </Jumbotron>
</div>

export default Body;