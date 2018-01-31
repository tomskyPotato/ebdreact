import React, {Component} from 'react'
import firebase from 'firebase'
import fetch from 'node-fetch'

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

class Firebase extends Component {

  
  componentDidMount() {
    fetch('http://freegeoip.net/json/')
      .then(res => res.json())
        .then(json => {
          console.log("ip:" + json.ip)
          console.log("ip:" + json.country_name)
          let model = this.sectionModel(123456, "thomas", json.ip)
          database.ref('/Test1').set(model)
        })
  }
  
  sectionModel = (id, name, ip) => ({
    id: id,
    name: name,
    ip: ip,
    timestamp: Date(firebase.database.ServerValue.TIMESTAMP * 1e3)
  })

  // add new section
  addSection = (name) => {
    let model = this.sectionModel(123456, "thomas")
    return database.ref('/Test1').set(model)
  }

  onSubmit = (e) => {
    e.preventDefault()
    //let ref = this.refs['section-name']
    //let sectionName = "ref.value"
    //this.addSection(sectionName)
    
    //ref.value = ''
  }
  
  render() {
    return (
      <div>{
       }
        <form onSubmit={this.onSubmit}>
          <input ref="section-name"/>
          <button>Add new section</button>
        </form>
      </div>
    );
  }
}

export default Firebase