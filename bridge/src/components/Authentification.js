import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";

function Authentification(props) {
  /*const [l, setL] = useState(0);
  useEffect(() => {
    alert([l]);
  }, [l]);
  const controle = ({ target }) => {
    setL(target.value);
  };*/
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
            {props.valid ? (
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
                  <Button variant="outline-info">Primary</Button>
                </Form>
                <div className="logo">
                  <center></center>
                </div>
                <div></div>
              </div>
            ) : (
              <div>signup</div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Authentification;
