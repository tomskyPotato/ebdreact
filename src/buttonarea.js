import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const divStyle = {
  textAlign: 'center',
}

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
      <div style={divStyle}>
        <Button href="./mathilda">zurück
        </Button>
        <Button href="./mathilda">home
        </Button>
        <Button href="./mathilda">weiter
        </Button>
      </div>
    );
  }
}

export default ButtonArea;