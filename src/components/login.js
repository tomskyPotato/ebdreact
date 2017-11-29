import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/login.css';

const loginComponent = ({ userName }) => {
    return (
      <div className="Login">
        <form >
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email{userName}</ControlLabel>
            <FormControl
              autoFocus
              value={userName}
              //type="email"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={userName}
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

   //withRouter muss dazu aufgrund von Problemen mit ReactRouter und redux

export default loginComponent