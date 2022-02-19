import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Form,
  Navbar,
} from "react-bootstrap";

function Authentification(props) {
  return (
    <>
      <Navbar className="colnav">
        <Container>
          <Navbar.Brand href="#home" className="textnav">
            Bridge
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="textnav">
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row></Row>
        <Row>
          <Col>
            <div className="divform">
              <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-info">Primary</Button>
              </Form>
            </div>
          </Col>
          <Col>
            <div className="divform"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Authentification;
