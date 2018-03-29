import React,{Component} from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CallApi from './callApi'

const divStyle = {
  textAlign: 'center',
}

let Welcome = ({ text, onClick, express }) => {
  
  return(
    <div style={divStyle}>
      <Jumbotron style={divStyle}>
        <h1>Willkommen bei EBD</h1>
        <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
        <br/>
        <Link to="/loginPath">
          <Button bsStyle="primary" type="submit">Anmelden</Button>
        </Link>
        <br/>
        <br/>
        <Link to="/">
          <p>
            <Button bsStyle="default">Registrieren</Button>
          </p>
        </Link>
      </Jumbotron>
      <CallApi/>
    </div>
  )
}

export default Welcome