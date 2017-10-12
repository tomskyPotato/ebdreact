import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

function myfunction(event){
  console.log('hello there')
}

class ButtonArea extends Component {

  render(){
    return(
      <div className="flex-item flex-item-bottom">
        <p>text</p>
        <Button onClick={myfunction}>
          Default
        </Button>
      </div>
    );
  }
}

export default ButtonArea;