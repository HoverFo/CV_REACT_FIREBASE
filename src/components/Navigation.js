import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
       <>
       <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>CV Brocvielle Vivien</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>    
          <Nav.Link href="/competences">Compétences</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/vivien-brocvielle-a9154b262/" className='fab fa-linkedin'></Nav.Link>
            <Nav.Link href="https://github.com/HoverFo" className='fab fa-github'></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </>
    );
};

export default Navigation;






