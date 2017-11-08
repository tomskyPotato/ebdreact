import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Navi from './navbar.js';
import ButtonArea from './buttonarea.js';
import sozial from './data/sozial.js';
import NaviBereich from './naviBereiche.js';

const divStyle = {
  textAlign: 'center',
}

export default class Ebd extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.setState({
      filterText: e.target.value
    });
  }

  render(){
    return(
      <div>
        <Navi />
        <NaviBereich />
        <Jumbotron style={divStyle}>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
          <h3>{this.state.filterText}</h3>
          <h3>{sozial.fragen[1].name}</h3>
        </Jumbotron>
        <ButtonArea />
      </div>
    );
  }
}
