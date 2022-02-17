import React from 'react';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'
function Acceuil(props) {
 
  return (
    
    <>   
    <Navbar  className='lmj-banner' variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" className="test">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar></>
 
    
    
   
  );
}

export default Acceuil;
