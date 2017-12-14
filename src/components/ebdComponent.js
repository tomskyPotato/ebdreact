import React from 'react';
import Navi from '../components/navbar.js';
import ButtonArea from './buttonarea.js';
import NaviBereich from '../components/naviBereiche.js';

var divStyle = {
  backgroundColor: 'yellow'
};

const Ebd = ({ onClickButton, currentFragenID, currentUser, currentKind }) => (
  <div>
    <Navi currentUser={ currentUser }/>
    <div style={divStyle}>
      { currentKind }
    </div>
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