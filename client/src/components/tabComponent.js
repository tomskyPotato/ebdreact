import React, {Component} from 'react'
import { Button, Table, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Fragen from '../data/bereiche.js'


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
        currentFragen.Fragen.map(function(item) { 
          return (
          <Zeile 
            frage={item.frage} 
            entwicklungsBereichID={currentFragen.id} 
            id={item.id}
            key={item.frage.toString()} 
            onClickErgebnis={onClickErgebnis}
            ergebnis={item.Ergebnis}
            />
          );
        })
      }
    </tbody>
  </Table>
)

class Zeile extends Component {

  render(){
  const tutEs = [
    {   
        text: "Tut es",
        value: 0
    },
    {
        text: "Tut es nicht",
        value: 1
    },
    {
        text: "Weiss nicht",
        value: 2
    }
  ]
  const{ id, entwicklungsBereichID, frage, ergebnis, onClickErgebnis} = this.props

  return (
      <tr>
      {console.log( "EntwicklungBereichID: ", entwicklungsBereichID, " id: ", id, " ergebnis: ", ergebnis)}
      <td key={id}>{frage}</td>
      <td>
        {tutEs.map(item => 
         (item.value === ergebnis)
          ?
            <Button key={item.text} onClick={() => onClickErgebnis(entwicklungsBereichID, id, item.value)} active>
              {item.text}
              {console.log("item.value: ", item.value)}
            </Button>
          :
            <Button key={item.text} onClick={() => onClickErgebnis(entwicklungsBereichID, id, item.value)} >
              {item.text}
            </Button>
        )}
      </td>
      <td>
        <Link key="0" to={{ pathname: `/`, }}>
          <Glyphicon glyph="info-sign" />
        </Link>
      </td>
    </tr>
  )
}
}

export default Tabelle