import React, { Component } from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Container } from "react-bootstrap";

function Menu() {
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
              <Button variant="outline-dark">Sign in</Button>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="outline-dark">Sign up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Menu;
