import React, { Component } from 'react';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'
 class Test extends Component {
change(e){
 e.target.className="test";
}
recover(e){
    e.target.className="";
   }
render(){
    return (
    
        <>   
        <Navbar  className='lmj-banner' variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onMouseOver={this.change} onMouseOut={this.recover} >Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar></>
     
        
        
       
      );
};

}
export default Test;