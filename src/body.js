import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class Body extends Component {
    render(){
      return(
        <div className="flex-item flex-item-body">
          <p>text</p>
          <Button>Default</Button>
        </div>
      );
    }
  }

  export default Body;