import React from 'react'
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navv() {
    return (
        <div style={{ position: 'fixed', top: '0', zIndex: '1300', width: '100%' }}>
            <Navbar className='navbar' bg="light" expand="lg" variant="light" style={{ fontWeight: '600', color: 'black' }} >
                <Container className='p-3'>
                    <Navbar.Brand style={{ fontFamily: "'Anton' sans-serif", letterSpacing: '0.3rem', fontSize: '20px', fontWeight: '900' }} >GO SOLAR </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"    >
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px', color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link className='text-light' style={{ marginRight: '20px' }} ><Link to="/Home" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></Nav.Link>
                            <Nav.Link className='text-light' style={{ marginRight: '20px' }} ><Link to="/WhyGoSolar" style={{ color: 'black', textDecoration: 'none' }}>Why Go Solar</Link></Nav.Link>
                            <Nav.Link className='text-light' style={{ marginRight: '20px' }}><Link to="/About" style={{ color: 'black', textDecoration: 'none' }}>About</Link></Nav.Link>
                            <Nav.Link className='text-light' style={{ marginRight: '20px' }} ><Link to="/Contact" style={{ color: 'black', textDecoration: 'none' }}>Contact</Link></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Outlet />



        </div >
    )
}
