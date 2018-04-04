//react
import React, { Component } from 'react'
var server = 'http://localhost:5000'

class CallApi extends Component{
    state = {
      response: "Start Text"
    }

    refreshState(data){
      this.setState({
        response: data.text
      })
    }

    callApi = async () => {
      return fetch(server + '/api/time')
        .then((res) => res.json())
        .then((data) => {
          console.log('res: ', data.text)
          this.refreshState(data)
        })
    }

    componentDidMount() {
      this.callApi()
    }

    render() {
      return (
        <div className="App">
          <p className="App-intro">{this.state.response}</p>
        </div>
      );
    }
  }

export default CallApi