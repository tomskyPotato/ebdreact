import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navi from '../components/navbar.js';

let kinderComponent = ({ dataBase, currentUser, currentKinder, kinderData }) => {
  return(
    <div>
    {/*// TODO: Name des Angemeldeten in die Navileiste*/}
      <Navi currentUser={ currentUser }/>
      <Link to="/ebd">
        <Button>
          <img src={require("../data/pictures/junge.jpg")} alt="my" />
          <p>Name Junge: {}</p>
        </Button>
      </Link>
      {'  '}
      <Link to="/ebd">
        <Button>
          <img src={require("../data/pictures/maedchen.jpg")} alt="my" />
          <p>Name Mädchen {currentUser.Vorname}</p>
        </Button>
      </Link>
    </div>
  )
}

export default kinderComponent