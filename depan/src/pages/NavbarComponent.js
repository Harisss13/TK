import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';
import kb from '../img/kb.png';

const NavbarComponent = () => {
    const [changeColor, setChangeColor] = useState(false);
    const changeBackgroundColor = () => {
        if(window.screenY > 10) {
            setChangeColor(true);
        }else{
            setChangeColor(false);
        }
    };
    useEffect(() => {
        changeBackgroundColor();
        window.addEventListener('scroll', changeBackgroundColor);
    });
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className="fs-4 fw-bold">
                        <img
                            alt=""
                            src={kb}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            KB Bunga Mekar 4
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            {navLinks.map((link) => {
                                return (
                                    <div className="nav-link" key={link.id}>
                                        <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                                            {link.text}
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
  };
  
  export default NavbarComponent;