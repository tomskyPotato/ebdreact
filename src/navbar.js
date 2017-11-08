import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './styles/App.css';

class Navi extends Component {
    render(){
      return(
        <div className="flex-item flex-item-top">
            <Navbar inverse collapseOnSelect fluid="true">
            <Navbar.Header>
                <Navbar.Brand>
                <a href="">EBD</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            </Navbar>
        </div>
      );
    }
  }

  export default Navi;