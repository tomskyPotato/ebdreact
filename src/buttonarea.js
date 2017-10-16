import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ButtonArea extends Component {
  constructor(props){
    super(props);
    this.state = {clicked: 0};
  }

  myfunction = () => {
    console.log("Test! " + this.props.name);
    console.log("clicked: " + this.state.clicked);
    this.myFunction2();
  }

  handleClick = () => {
    return this.props.handleClick();
  }

  render(){
    return(
      <div className="flex-item flex-item-bottom">
        <br/>
        <br/>
        <p>Clicked: {this.state.clicked}</p>
        <Button onClick={this.handleClick}>
          {this.props.name} temperature: {this.props.temperature}
        </Button>
      </div>
    );
  }
}

export default ButtonArea;