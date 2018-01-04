import React, {Component} from 'react'
import { Button, Table, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Fragen from '../data/bereiche.js'

const Tabelle = ({ currentFragen, onClickErgebnis, tutEs }) => (
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
        Fragen[currentFragen.id].Fragen.map(function(item) { 
          {
            console.log("ergeb: " + item.Ergebnis[0].value)
          }
          return (
          <Zeile 
            frage={item.frage} 
            id={item.id} 
            key={item.frage.toString()} 
            onClickErgebnis={onClickErgebnis}
            ergebnis={item.Ergebnis[0].value}
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
  const{id, frage, ergebnis, onClickErgebnis} = this.props

  return ( 
      <tr>
        {
          console.log("ergebnis: " + ergebnis)
        }
      <td key={id}>{frage}</td>
      <td>
        {tutEs.map(item => 
         (item.value === ergebnis)
          ?
            <Button key={item.text} onClick={() => onClickErgebnis(id, item.value)} active>
              {item.text}
            </Button>
          :
            <Button key={item.text} onClick={() => onClickErgebnis(id, item.value)} >
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