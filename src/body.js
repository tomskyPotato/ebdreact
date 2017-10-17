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
            <Route path='/' component={home} />
            <Route path='/welcome' component={welcome} />
            <Route path='/mathilda' component={mathilda} />
          </div>
      );
    }
  }
  
const home =() => 
  <Jumbotron style={divStyle}>
    <p><Button bsStyle="primary" href="./welcome">Infos</Button></p>
  </Jumbotron>

const welcome =() => 
  <Jumbotron style={divStyle}>
    <h1>Willkommen bei EBD</h1>
    <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
    <p><Button bsStyle="primary" href="./mathilda">Infos</Button></p>
  </Jumbotron>

const mathilda =() =>
  <Jumbotron style={divStyle}>
    <h1>Willkommen bei Mathilda und Lilly</h1>
    <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
    <p><Button bsStyle="primary" href="./welcome">Infos</Button></p>
  </Jumbotron>

  export default Body;