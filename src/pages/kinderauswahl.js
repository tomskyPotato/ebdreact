import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from 'react-redux'
import Navi from '../components/navbar.js';

const addTodo = text => {
  return {
    type: "ADD_NAME",
    text
  }
}

let Kinder = ({ dispatch, dataBase }) => {
    return(
      <div>
      {/*// TODO: Name des Angemeldeten in die Navileiste*/}
        <Navi />
        <p>Kinder</p>
        <Button href="/ebd" >
          <img src={require("../data/junge.jpg")} alt="my" />
          <p>Name Junge</p>
        </Button>
        {'  '}
        <Button href="/ebd">
          <img src={require("../data/mädchen.jpg")} alt="my" />
          <p>Name Mädchen</p>
        </Button>
      </div>
    )
}

const mapStateToProps = (state) => ({
  dataBase: state
})

Kinder = connect(mapStateToProps)(Kinder)

export default Kinder