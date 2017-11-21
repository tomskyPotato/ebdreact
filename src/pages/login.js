import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import '../styles/login.css';

const loginClass = ({ dispatch, dataBase }) => {
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
            <Link to="/Kinder">
              <Button
                block
                bsSize="large"
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
    )
}

const mapStateToProps = (state) => ({
  dataBase: state
})

   //withRouter muss dazu aufgrund von Problemen mit ReactRouter und redux

export default connect(mapStateToProps)(loginClass)