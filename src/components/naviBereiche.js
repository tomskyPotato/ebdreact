import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import bereiche from '../data/bereiche.json';
import SozialEmotional from '../data/sozialEmotional.js';
import Kognition from '../data/kognition.js';

export default class NaviBereich extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '0',
    };
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
    this.props.click(eventKey);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
        <NavItem eventKey="0" >{SozialEmotional.titel}</NavItem>
        <NavItem eventKey="1" >{Kognition.titel}</NavItem>
        <NavItem eventKey="2" href="./kinder">{bereiche[2].titel}</NavItem>
        <NavItem eventKey="3" href="./">{bereiche[3].titel}</NavItem>
      </Nav>
    );
  }
};