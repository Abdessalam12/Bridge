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
        <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
        
     
      </>
     
        
        
       
      );
};

}
export default Menu;