import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Navi from '../components/navbar.js'

const Buttonkind = ({ name, alter, geschlecht, id, onClick }) => {
  return(
    <Link to="/ebd">
        <Button onClick={onClick}>
          {
            (geschlecht === "w")
            ? <img src={require("../data/pictures/maedchen.jpg")} alt="my" />
            : <img src={require("../data/pictures/junge.jpg")} alt="my" />
          }
        <p>{ name }, { alter } Monate</p>
        </Button>{"   "}
    </Link>
  )
}

const kinderComponent = ({ currentUser, currentKinder, onClickButton }) => (
    <div>
      <Navi currentUser={ currentUser }/>
        {currentKinder.map(item =>
            <Buttonkind
              key={item.id}
              {...item}
              onClick={() => onClickButton(item.id)}
            />
        )}
    </div>
  )

export default kinderComponent