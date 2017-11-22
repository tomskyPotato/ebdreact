import React from 'react';
import { Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Navi from '../components/navbar.js';

const addTodo = text => {
  return {
    type: "ADD_NAME",
    text
  }
}

let Kinder = ({ dataBase }) => {
    return(
      <div>
      {/*// TODO: Name des Angemeldeten in die Navileiste*/}
        <Navi />
        <p>Kinder</p>
        <Link to="/ebd">
          <Button>
            <img src={require("../data/junge.jpg")} alt="my" />
            <p>Name Junge: {dataBase}</p>
          </Button>
        </Link>
        {'  '}
        <Link to="/ebd">
          <Button>
            <img src={require("../data/maedchen.jpg")} alt="my" />
            <p>Name Mädchen</p>
          </Button>
        </Link>
      </div>
    )
}

const mapStateToProps = (state) => ({
  dataBase: state.text
})

Kinder = connect(mapStateToProps)(Kinder)

export default Kinder