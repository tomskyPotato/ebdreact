import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import bereiche from '../data/bereiche.json';
import SozialEmotional from '../data/sozialEmotional.js';
import Ebd from '../pages/ebd.js';
import Kognition from '../data/kognition.js';

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
          <NavItem eventKey="0" 
          onClick={ e => this.props.history.push("/home") } 
          href={`/ebd/${SozialEmotional.titel}`}>{SozialEmotional.titel}</NavItem>
          <NavItem eventKey="1" href={`/ebd/${Kognition.titel}`}>{Kognition.titel}</NavItem>
          <NavItem eventKey="2" href="./kinder">{bereiche[2].titel}</NavItem>
          <NavItem eventKey="3" href="./">{bereiche[3].titel}</NavItem>
        
          <LinkContainer to='/products/'>
           <NavItem className="nav-link">Products</NavItem>
         </LinkContainer>
          <Router>
            <div className="App">
              <Route path={`/ebd/${SozialEmotional.titel}`} component={Ebd} />
              <Route path={`/ebd/${Kognition.titel}`} component={Ebd} />
              <Route path={`./ebd/${SozialEmotional.titel}`} component={Ebd} />
              <Route path={`./ebd/${SozialEmotional.titel}`} component={Ebd} />
              <Route path={`./ebd/${SozialEmotional.titel}`} component={Ebd} />
              <Route path={`./ebd/${SozialEmotional.titel}`} component={Ebd} />
            </div>
          </Router>
        </Nav>
        
      );
    }
  };