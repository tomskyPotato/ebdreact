import React from "react";
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem
        } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/login.css';

const loginComponent = ({ userData, onClickButton, currentUser }) => {
    return (
      <div className="Login">
        <form >
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              value={currentUser}
            />
            <DropdownButton bsSize="large" title="Username" id="bg-nested-dropdown">
              <MenuItem eventKey="1" onClick={() => onClickButton(0)}>
                {userData[0].Vorname}
              </MenuItem>
              <MenuItem eventKey="2" onClick={() => onClickButton(1)}>
                {userData[1].Vorname}
              </MenuItem>
              <MenuItem eventKey="3" onClick={() => onClickButton(2)}>
                {userData[2].Vorname}
              </MenuItem>
            </DropdownButton>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={userData}
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