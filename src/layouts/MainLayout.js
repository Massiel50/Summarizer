import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const MainLayout = ({ children }) => {
    return (
     <>
      <Navbar bg="light" variant="light" className="mb-4">
        <Navbar.Brand href="/">Meeting Summarizer</Navbar.Brand>
      </Navbar>
      <Container>
        {children}
      </Container>
    </>
    ) 
}

export default MainLayout