import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Fragen from '../data/bereiche.js';

const divStyle = {
  outline: 'none',
}

export default class NaviBereich extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '0',
    };
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
    this.props.click(eventKey);
  }

  render() {
    return (
      <div style={divStyle}> 
        <Nav bsStyle="tabs" autoFocus="false" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
          <NavItem eventKey="0">{Fragen[0].titel}</NavItem>
          <NavItem eventKey="1" >{Fragen[1].titel}</NavItem>
          <NavItem eventKey="2" >{Fragen[2].titel}</NavItem>
          <NavItem eventKey="3" >{Fragen[3].titel}</NavItem>
          <NavItem eventKey="4" >{Fragen[4].titel}</NavItem>
          <NavItem eventKey="5" >{Fragen[5].titel}</NavItem>
        </Nav>
      </div>
    );
  }
};