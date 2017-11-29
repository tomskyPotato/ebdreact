import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const divStyle = {
  textAlign: 'center',
}

let Welcome = ({ text, onClick }) => {
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

            <p><Button  bsStyle="default" 
            onClick={e => {
              e.preventDefault()
              onClick()
            }}>
            </Button></p>
            
            <p>
              { text }
            </p>

        </Jumbotron>
      </div>
    )
}

Welcome.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

const addTodo = (text) => ({
    type: 'INCREMENT',
    text
})

const mapStateToProps = (state) => ({
  text: state.text
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(addTodo("Thomas"))
  }
})

Welcome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)

export default Welcome