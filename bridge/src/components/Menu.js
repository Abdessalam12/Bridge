import React, { useState } from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Container } from "react-bootstrap";

function Menu(props) {
  const [despear, setDespear] = useState(true);
  console.log(despear);
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
              {despear ? (
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setDespear(false);
                    props.onClick(true);
                  }}
                >
                  Sign in
                </Button>
              ) : (
                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setDespear(true);
                    props.onClick(false);
                  }}
                >
                  Sign up
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Menu;
