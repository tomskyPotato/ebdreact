import React, { Component } from 'react';
import { Button, Jumbotron, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import bereiche from './data/bereiche.json';

export default class NaviBereich extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '0',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
    handleSelect = (eventKey) => {
      this.setState({
        activeKey: eventKey
      })
      return this.props.activeKey;
    }
  
    render() {
      return (
        <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey="0" href="./">{bereiche[0].titel}</NavItem>
          <NavItem eventKey="1" href="./">{bereiche[1].titel}</NavItem>
          <NavItem eventKey="2" href="./">{bereiche[2].titel}</NavItem>
          <NavItem eventKey="3" href="./">{bereiche[3].titel}</NavItem>
        </Nav>
      );
    }
  };