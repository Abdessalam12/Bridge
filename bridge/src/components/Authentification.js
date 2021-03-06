import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Authentification(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="divform"></div>
          </Col>
          <Col>
            <div className="divform">
              {" "}
              <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-info">Valider</Button>
              </Form>
              <div className="logo">
                <center>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        Connecter avec Google
                      </Tooltip>
                    }
                  >
                    <Image src="img/gm.png" height="40px" />
                  </OverlayTrigger>
                </center>
              </div>
              <div className="logo1">
                <center>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        Connecter avec Facebook
                      </Tooltip>
                    }
                  >
                    <Image src="img/fm.png" height="35px" />
                  </OverlayTrigger>
                </center>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Authentification;
