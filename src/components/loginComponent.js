import React from "react";
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem
        } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/login.css';

class loginComponent extends React.Component {
  constructor(props){
    super(props)
    this.onClickUserButton = this.onClickUserButton.bind(this)
    this.state = {
      userMenuText: "Username"
    }
  }

  onClickUserButton(id){
    this.setState({ userMenuText: this.props.userData[id].Vorname})
    this.props.onClickButton(id)
  }

  render(){
    const { userData } = this.props
    return (
      <div className="Login">
        <form >
          <FormGroup bsSize="large">
            <DropdownButton bsSize="large" title={this.state.userMenuText} id="bg-nested-dropdown">
              <MenuItem eventKey="1" onClick={() => this.onClickUserButton(0)}>
                {userData[0].Vorname}
              </MenuItem>
              <MenuItem eventKey="2" onClick={() => this.onClickUserButton(1)}>
                {userData[1].Vorname}
              </MenuItem>
              <MenuItem eventKey="3" onClick={() => this.onClickUserButton(2)}>
                {userData[2].Vorname}
              </MenuItem>
            </DropdownButton>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              defaultValue="password"
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
    )}
}

   //withRouter muss dazu aufgrund von Problemen mit ReactRouter und redux

export default loginComponent