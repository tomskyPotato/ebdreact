import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Tabelle from './tabelle.js';
import fragen from '../data/bereiche.js'

const divStyle = {
  outline: 'none',
}

const NavItemComp = ({eventKey, onClick, frage}) => (
  <NavItem eventKey={eventKey} onClick={onClick}>{frage}</NavItem>  
)

const NaviBereich = ({ onClick, currentFragenID }) => (
  <div style={divStyle}> 
    <Nav bsStyle="tabs" autoFocus="false" activeKey={parseInt(currentFragenID, 10)}>
      {fragen.map(frag =>
        <NavItemComp  
          key={parseInt(frag.id, 10)} 
          eventKey={parseInt(frag.titel, 10)} 
          onClick={() => onClick(frag.id)} 
          frage={frag.titel}
        />
      )}
    </Nav>
    <Tabelle activeKey={0}/>
  </div>
)

export default NaviBereich