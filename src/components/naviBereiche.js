import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Fragen from '../data/bereiche.js';
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
    <Nav bsStyle="tabs" autoFocus="false" activeKey={parseInt(currentFragenID)}>
      {fragen.map(frag =>
        <NavItemComp  
          eventKey={frag.id} 
          onClick={() => onClick(frag.id)} 
          frage={frag.titel}
        />
      )}
    </Nav>
    <Tabelle activeKey={0}/>
  </div>
)

export default NaviBereich