import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import { Router, Route, BrowserRouter } from 'react-router-dom'

const divStyle = {
  textAlign: 'center',
}

class Body extends Component {
    render(){
      return(
        <div className="flex-item flex-item-body">
          <BrowserRouter>
            <div>
              <Route path='/' component={welcome} />
              <Route path='/' component={mathilda} />
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }

  class welcome extends Component{
    render(){
      return(
        <Jumbotron style={divStyle}>
          <h1>Willkommen bei EBD</h1>
          <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
          <p><Button bsStyle="primary">Infos</Button></p>
        </Jumbotron>
      );
    }
  }
  
    class mathilda extends Component{
      render(){
        return(
          <Jumbotron style={divStyle}>
            <h1>Willkommen bei Mathilda und Lilly</h1>
            <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
            <p><Button bsStyle="primary">Infos</Button></p>
          </Jumbotron>
        );
      }
    }

  export default Body;