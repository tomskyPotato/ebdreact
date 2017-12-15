import React from 'react'
import Navi from '../components/navbar.js'
import ButtonArea from './buttonarea.js'
import NaviBereich from '../components/naviBereiche.js'
import { Jumbotron, Label } from 'react-bootstrap'

var divStyle = {
  backgroundColor:  'light-purple',
  margin:           '10'
};

const Ebd = ({ onClickButton, currentFragenID, currentUser, currentKind }) => (
  <div>
    <Navi currentUser={ currentUser }/>
    <Jumbotron>
      <h2><Label>{ currentKind }</Label></h2>
    </Jumbotron>
    {/*// TODO: Informationen zum Kind*/}
    <NaviBereich 
      onClick={onClickButton} 
      currentFragenID={currentFragenID} 
    />
    {/*// TODO: Home Button in die Navileiste. Home ist dann Kinderauswahlfenster*/}
    <ButtonArea />
  </div>
)

export default Ebd