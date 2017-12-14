import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Tabelle from './tabelle.js';
import fragen from '../data/bereiche.js'

const divStyle = {
  outline: 'none',
}

const NaviBereich = ({ onClick, currentFragenID }) => (
  <div style={divStyle}> 
    <Nav bsStyle="tabs" autoFocus="false" activeKey={currentFragenID.toString()}> 
      {fragen.map(frag =>
        <NavItem
          key={frag.id}
          eventKey={frag.id.toString()}
          onClick={() => onClick(frag.id)}
          >{frag.titel}
        </NavItem>
      )}
    </Nav>
    <Tabelle activeKey={currentFragenID}/>
  </div>
)

export default NaviBereich