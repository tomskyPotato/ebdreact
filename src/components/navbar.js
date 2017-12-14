import React from 'react';
import { Navbar } from 'react-bootstrap';

const Navi = ({ currentUser }) => {
  
  var stylesNavbar = {
    "backgroundColor" : "#42f468",
    "border"          : "none"
  };
  var stylesBrand = {
    "color"           : "black",
    "borderBottom"          : "solid"
  };
  var stylesText = {
    "color"           : "black",
  };

  return(
    <div className="flex-item flex-item-top">
        <Navbar inverse collapseOnSelect style={stylesNavbar}>
        <Navbar.Header >
            <Navbar.Brand pullLeft>
            <a href="" style={stylesBrand}>EBD</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text style={stylesText}>
            Hallo, {currentUser}
          </Navbar.Text>
          <Navbar.Text pullRight style={stylesText}>
            Viel Spaß mit EBD!
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Navi