import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Navi from '../components/navbar.js'

const Buttonkind = ({ name, alter, geschlecht }) => {
  return(
    <Link to="/ebd">
        <button>
          {
            (geschlecht === "w")
            ? <img src={require("../data/pictures/maedchen.jpg")} alt="my" />
            : <img src={require("../data/pictures/junge.jpg")} alt="my" />
          }
        <p>{ name }, { alter } Monate</p>
        </button>{"   "}
    </Link>
  )
}

const kinderComponent = ({ currentUser, currentKinder }) => (
    <div>
    {console.log(currentKinder)}
      <Navi currentUser={ currentUser }/>
        {currentKinder.map(item =>
            <Buttonkind
              key={item.id}
              {...item}
            />
        )}
    </div>
  )

export default kinderComponent