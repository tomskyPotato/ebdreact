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

function writeUserData(ip, country_name) {
  //hole die aktuelle user id
  var userId = "aaa"
  /*firebase.database().ref('Besucher/aktuell/').once('value').then(function(snapshot){
    userId = snapshot.val()
    console.log("userId: " + typeof userId)
  })*/
  var userId2 = 7
  var childRef = firebase.database().ref("Besucher/aktuell")
    childRef.once('value')
    .then(function(snapshot){
      snapshot.forEach(element => {
        console.log("key: " + element.key)
      });
  })
  //lege neuen besucher an
  firebase.database().ref('Besucher/aktuell/' + userId).set({
    timestamp: Date(firebase.database.ServerValue.TIMESTAMP * 1e3),
    ip : ip,
    countryName: country_name
  })
}

class Firebase extends Component {

  componentDidMount() {
    fetch('http://freegeoip.net/json/')
      .then(res => res.json())
        .then(json => {
          console.log("ip:" + json.ip)
          console.log("country:" + json.country_name)
          writeUserData(json.ip, json.country_name)
        })
  }
  
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Firebase