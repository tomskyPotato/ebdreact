import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
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
      activeKey: eventKey,
    });
    this.props.click(eventKey);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
        <NavItem eventKey="0" >{SozialEmotional.titel}</NavItem>
        <NavItem eventKey="1" >{Kognition.titel}</NavItem>
        <NavItem eventKey="2" href="./kinder">Titel</NavItem>
        <NavItem eventKey="3" href="./">active Key: {this.state.activeKey}</NavItem>
      </Nav>
    );
  }
};