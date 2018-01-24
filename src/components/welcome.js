import React, {Component} from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//firebase
import firebase from 'firebase'

const divStyle = {
  textAlign: 'center',
}

let Welcome = ({ text, onClick }) => {
  return(
    <div style={divStyle}>
      <Jumbotron style={divStyle}>
        <h1>Willkommen bei EBD</h1>
        <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
        <br/>
        <Link to="/loginPath">
          <Button bsStyle="primary" type="submit">Anmelden</Button>
        </Link>
        <br/>
        <br/>
        <Link to="/">
          <p>
            <Button bsStyle="default">Registrieren</Button>
          </p>
        </Link>
      </Jumbotron>
      <App />
    </div>
  )

}

const config = {
  apiKey: "AIzaSyCbAsB-zqnvKJVpxp9ebg1PF0Gi-NzK2UQ",
  authDomain: "ebd1-6e66f.firebaseapp.com",
  databaseURL: "https://ebd1-6e66f.firebaseio.com",
  projectId: "ebd1-6e66f",
  storageBucket: "ebd1-6e66f.appspot.com",
  messagingSenderId: "493348330205"
}
firebase.initializeApp(config)
var database = firebase.database()

class App extends Component {
  constructor(props){
    super(props)
    this.state = database
  }
  
sectionModel = (id, name, timestamp) => ({
  id: id,
  name: name,
  todos: [],
  timestamp: timestamp
})

// add new section
addSection = (name) => {
  let key = database.ref('/').push().key
  let model = this.sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/'+ key).set(model)
}

onSubmit = (e) => {
    e.preventDefault()
    let ref = this.refs['section-name']
    let sectionName = ref.value
    this.addSection(sectionName)
    ref.value = ''
  }

render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref="section-name"/>
          <button>Add new section</button>
        </form>
      </div>
    );
  }
}

export default Welcome