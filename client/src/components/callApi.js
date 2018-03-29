//react
import React, { Component } from 'react'

class CallApi extends Component{
    state = {
      response: "Start Text"
    }
  
    callApi = async () => {
      return fetch('/api/time')
        .then((res) => res.json())
        .then((responsejson) => {
          this.setState({
            response: responsejson.text
        })
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