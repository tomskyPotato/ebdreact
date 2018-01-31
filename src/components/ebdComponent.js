import React from 'react'
import Navi from '../components/navbar.js'
import ButtonArea from './buttonarea.component.js'
import NaviBereich from '../components/naviBereiche.js'
import { Panel } from 'react-bootstrap'

var divStyle = {
  backgroundColor:  'light-purple',
  width:            '80%',
  margin:           'auto'
};

const Ebd = ({ onClickButton, onClickErgebnis, currentFragen, currentUser, currentKind }) => (
  <div>
    <Navi currentUser={ currentUser.Vorname }/>
    <Panel header={ currentKind.name } style={divStyle}>
      Alter: {currentKind.alter}
    </Panel>
    <br/>
    {/*// TODO: Informationen zum Kind*/}
    
    <NaviBereich 
      onClickButton={onClickButton} 
      onClickErgebnis={onClickErgebnis}
      currentFragen={currentFragen} 
    />
    {/*// TODO: Home Button in die Navileiste. Home ist dann Kinderauswahlfenster*/}
    <ButtonArea />
  </div>
)

export default Ebd