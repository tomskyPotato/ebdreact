import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux'
import '../styles/login.css';

let loginClass = ({ dispatch, dataBase }) => {
    return (
      <div className="Login">
        <form >
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={dataBase.name}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={dataBase.password}
              type="password"
            />
          </FormGroup>
          <Button
            href="/Kinder"
            block
            bsSize="large"
            >
            Login
          </Button>
          <Button
            block
            bsSize="large"
          >
            Cancel
          </Button>
        </form>
      </div>
    )
}

const mapStateToProps = (state) => ({
  dataBase: state
})

loginClass = connect(mapStateToProps)(loginClass)

export default loginClass