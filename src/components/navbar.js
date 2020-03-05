import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, ButtonToolbar, Badge } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">DEMO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto justify-content-center" activeKey="/home">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <NavDropdown title="Courses" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">UX/UI Design</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Data Science</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Backend Development</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mobile Development</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Frontend Development</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
        DevOps <Badge variant="success">new</Badge>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <ButtonToolbar className="mr-sm-4">
  <Button className="mr-sm-3" variant="outline-success">Apply Now</Button>
  <Button variant="success">Sign Up</Button>
</ButtonToolbar>
  </Navbar.Collapse>
</Navbar>
  )
}

export default MyNavbar;
/*<Button variant="primary">
  Profile <Badge variant="light">9</Badge>
  <span className="sr-only">unread messages</span>
</Button> */