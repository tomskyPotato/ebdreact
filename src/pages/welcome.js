import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux'

const divStyle = {
  textAlign: 'center',
}

const addTodo = text => {
  return {
    type: "ADD_NAME",
    text
  }
}

let Welcome = ({ dispatch, dataBase }) => {
    return(
      <div style={divStyle}>
        <Jumbotron style={divStyle}>
            <h1>Willkommen bei EBD</h1>
            <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
            <br/>
            <Button href="/loginPath" bsStyle="primary" type="submit">Anmelden</Button>
            <br/>
            <br/>
            <p><Button bsStyle="default" href="/">Registrieren</Button></p>
            <p><Button bsStyle="default" 
             onClick={() => dispatch({ type: 'INCREMENT' })}
            >{ dataBase.number }</Button></p>
            <p><Button bsStyle="default">{ dataBase.number }</Button></p>
        </Jumbotron>
      </div>
    )
}

const mapStateToProps = (state) => ({
  dataBase: state
})

Welcome = connect(mapStateToProps)(Welcome)

export default Welcome