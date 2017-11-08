import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Fragen from '../data/bereiche.js';

const divStyle = {
  backgroundColor: 'light-grey',
  margin: '2%',
}

export default class Tabelle extends Component{

  render(){
    return(
      <div style={divStyle}>
        <Gallery 
          activeKey={this.props.activeKey}
          />
      </div>
    );
  }
}

class Gallery extends Component {
  render(){
    var bereichID = this.props.activeKey;
    return(
      <div>
        <Table striped bordered condensed hover autoFocus>
          <thead>
              <tr>
              <th>Frage</th>
              <th>Ergebnis</th>
              <th>Erklärung</th>
              </tr>
          </thead>
          <tbody>
            {Fragen[bereichID].Fragen.map(function(keyName) { return (
                <Zeile keyName={keyName.frage} />
                );
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

const Zeile = ({keyName}) => {
  return ( 
      <tr>
      <td key={keyName}>{keyName}</td>
      <td><ButtonGroupTutEs /></td>
      <td>
        <Link key="0" to={{ pathname: `/`, }}>
          <p>infosymbol</p>
        </Link>
      </td>
    </tr>
  );
};

class ButtonGroupTutEs extends Component{
    render(){
    return(
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1}>Tut es</ToggleButton>
          <ToggleButton value={2}>Tut es nicht</ToggleButton>
          <ToggleButton value={3}>Weiss nicht</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    )
  }
}