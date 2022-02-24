import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";

function Newaccount(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="divform">
              {" "}
              <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicNom">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Enter ton nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrenom">
                  <Form.Label>Prenom</Form.Label>
                  <Form.Control type="text" placeholder="Enter ton nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Entrer ton Prenom" />
                </Form.Group>
              </Form>
            </div>
          </Col>

          <Col>
            <div className="divform">
              <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordR">
                  <Form.Control
                    type="password"
                    placeholder="Verfier ton password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-info">Primary</Button>
              </Form>
              <div className="logo">
                <center>
                  <Image src="img/gm.png" height="40px" />
                </center>
              </div>
              <div className="logo1">
                <center>
                  <Image src="img/fm.png" height="35px" />
                </center>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Newaccount;
