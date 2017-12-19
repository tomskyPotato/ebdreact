import React from 'react';
import { Button, Table, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Fragen from '../data/bereiche.js';

const Tabelle = ({ currentFragen, onClickErgebnis }) => (
  <Table striped bordered condensed hover autoFocus>
    <thead>
        <tr>
        <th>Frage</th>
        <th>Ergebnis</th>
        <th>Erklärung</th>
        </tr>
    </thead>
    <tbody>
      {
        Fragen[currentFragen.id].Fragen.map(function(item) { return (
          <Zeile 
            frage={item.frage} 
            id={item.id} 
            key={item.frage.toString()} 
            onClickErgebnis={onClickErgebnis}
            ergebnis={item.Ergebnis}/>
          );
        })
      }
    </tbody>
  </Table>
)

const Zeile = ({id, frage, onClickErgebnis}) =>{
 const aaa = true 
  return ( 
      <tr>
      <td key={id}>{frage}</td>
      <td>
      {/*<td><ButtonGroupTutEs onClickErgebnis={onClickErgebnis} id={id}/></td>*/}
        <Button onClick={() => onClickErgebnis(id, 0)} active>
          Tut es
        </Button>
        <Button onClick={() => onClickErgebnis(id, 1)}>
          Tut es nicht
        </Button>
        <Button onClick={() => onClickErgebnis(id, 2)}>
          Weiss nicht
        </Button>
      </td>
      <td>
        <Link key="0" to={{ pathname: `/`, }}>
          <Glyphicon glyph="info-sign" />
        </Link>
      </td>
    </tr>
  )
}

export default Tabelle