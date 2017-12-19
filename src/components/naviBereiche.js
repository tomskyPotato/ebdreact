import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Tabelle from './tabComponent.js';
import fragen from '../data/bereiche.js'

const divStyle = {
  outline: 'none',
}

const NaviBereich = ({ onClickButton, onClickErgebnis, currentFragen }) => (
  <div style={divStyle}> 
    <Nav bsStyle="tabs" autoFocus="false" activeKey={currentFragen.id.toString()}>
      {fragen.map(frag =>
        <NavItem
          key={frag.id}
          eventKey={frag.id.toString()}
          onClick={() => onClickButton(frag.id)}
          >{frag.titel}
        </NavItem>
      )}
    </Nav>
    {document.activeElement.blur()/*set <body> as active Element */}
    
    {console.log("er: " + currentFragen.Fragen[0].Ergebnis[0].value)}
    <Tabelle
      currentFragen={currentFragen}
      onClickErgebnis={onClickErgebnis} />
  </div>
)

export default NaviBereich