import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import sozialEmotional from '../data/sozialEmotional.js';

const divStyle = {
  backgroundColor: 'light-grey',
  margin: '2%',
}

export default class tabelle extends Component{

  render(){
    return(
      <div style={divStyle}>
      <Gallery />
      </div>
    );
  }
}

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

const Gallery = () => (
  <div>
    <Table striped bordered condensed hover>
      <thead>
          <tr>
          <th>Frage</th>
          <th>Ergebnis </th>
          <th>Erklärung</th>
          </tr>
      </thead>
      <tbody>
        {sozialEmotional.fragen.map(i => (
          <tr>
            <td>{i.beschreibung}</td>
            <td><ButtonGroupTutEs /></td>
            <td>
              <Link key={i.id} to={{ pathname: `/img/${i.id}`, }}>
                <p>infosymbol</p>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)