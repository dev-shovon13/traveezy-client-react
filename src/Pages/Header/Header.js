import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import userAvatar from '../../images/avatar.png'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" className="border-bottom shadow-sm">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img
                                src={logo}
                                width="110"
                                height="40"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/services">Destination</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/about">About us</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/review">Review</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.displayName || user.email ?
                                    <Nav className="d-flex">
                                        <NavDropdown title="More" id="collasible-nav-dropdown">
                                            <NavDropdown.Item as={NavLink} to="/myOrders">My Orders</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as={NavLink} to="/allOrders">Manage All Orders</NavDropdown.Item>
                                            <NavDropdown.Item as={NavLink} to="/addNew">Add a New Destination</NavDropdown.Item>
                                        </NavDropdown>
                                        <div className="d-flex align-items-center justify-content-center">
                                            {user.photoURL ?
                                                <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                                :
                                                <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                            {user.displayName ?
                                                <span className="fw-bold text-dark">{user.displayName}</span>
                                                :
                                                <span className="fw-bold text-dark">{user.email.substring(0, user.email.lastIndexOf("@"))}</span>}
                                            <Button className="btn btn-danger ms-2 btn-sm" onClick={logOut}>Logout</Button>
                                        </div>
                                    </Nav>
                                    :
                                    <div className="d-flex justify-content-center">
                                        <NavLink to="/login">
                                            <Button variant="outline-primary" className="me-3 mb-2 mb-lg-0"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Login</Button>
                                        </NavLink>
                                        <NavLink to="/signup">
                                            <Button variant="primary"><FontAwesomeIcon icon={faFingerprint} className="me-2" />Signup</Button>
                                        </NavLink>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;