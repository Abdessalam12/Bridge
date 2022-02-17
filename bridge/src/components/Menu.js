import React, { Component } from 'react';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap';
 class Menu extends Component {
change(e){
 //e.target.className="test";
 e.target.className="menu2"
}
recover(e){
    //e.target.className="";
    e.target.className="menu1"
   }
render(){
    return (
    
        <>   
        <Navbar  bg ="light" variant="dark">
           Bridge
        </Navbar>
        <Container>
        <Navbar  className='lmj-banner' variant="light">
        
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
       
      </Navbar>
        </Container>
        
     
      </>
     
        
        
       
      );
};

}
export default Menu;