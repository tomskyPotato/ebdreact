import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/login.css';

export default class loginClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "tomsky@ebd.de",
      password: "12345ABC"
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Link to="/ebd" >
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              >
              Login
            </Button>
          </Link>
          <Link to="/">
            <Button
              block
              bsSize="large"
            >
              Cancel
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}