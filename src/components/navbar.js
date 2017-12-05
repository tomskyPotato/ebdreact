import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/App.css';

const Navi = ({ currentUser }) => {
  return(
    <div className="flex-item flex-item-top">
        <Navbar inverse collapseOnSelect fluid="true">
        <Navbar.Header>
            <Navbar.Brand>
            <a href="">EBD</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Hallo, {currentUser}
          </Navbar.Text>
          <Navbar.Text pullRight>
            Viel Spaß mit EBD!
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Navi