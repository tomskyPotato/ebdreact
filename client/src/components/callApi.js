//react
import React, { Component } from 'react'
var server = 'http://localhost:5000'

class CallApi extends Component{
    state = {
      response: "Start Text",
      names: "no Names"
    }

    refreshState(data){
      this.setState({
        response: data.text
      })
    }

    refreshState2(data){
      this.setState({
        names: data.text
      })
    }

    callApi = async () => {
      return fetch(server + '/api/time')
        .then((res) => res.json())
        .then((data) => {
          this.refreshState(data)
        })
    }

    callApi2 = async () => {
      return fetch(server + '/api/mongodb')
        .then((res) => res.json())
        .then((data) => {
          this.refreshState2(data)
        })
    }

    componentDidMount() {
      this.callApi()
      this.callApi2()
    }

    render() {
      return (
        <div className="App">
          <p className="App-intro">{this.state.response}</p>
          <p className="App-intro">{this.state.names}</p>
        </div>
      );
    }
  }

export default CallApi