import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonArea extends Component {
  constructor(props){
    super(props);
  }
  myfunction(){
    document.getElementById("App").style.backgroundColor = "yellow";
  }

  render(){
    return(
      <div className="flex-item flex-item-bottom">
        <p>text</p>
        <Button onClick={this.myfunction.bind()}>
          Default
        </Button>
      </div>
    );
  }
}

export default ButtonArea;