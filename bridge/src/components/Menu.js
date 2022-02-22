import React, { useState } from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Container } from "react-bootstrap";

function Menu(props) {
  const [signup, setSigup] = useState({ display: "inline" });
  const [signin, setSigin] = useState({ display: "none" });
  const fct = (val) => {
    val ? setSigup({ display: "inline" }) : setSigin({ display: "block" });
    props.onClick(val);
  };
  return (
    <>
      <Navbar className="colnav">
        <Container>
          <Navbar.Brand href="#home" className="textnav">
            Bridge
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div>
              <Button variant="outline-dark" onClick={fct(true)} style={signin}>
                Sign in
              </Button>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                variant="outline-dark"
                onClick={fct(false)}
                style={signup}
              >
                Sign up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Menu;
