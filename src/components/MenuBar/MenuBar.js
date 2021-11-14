import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';
import useAuth from '../hooks/useAuth';
import "./MenuBar.css";

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="menubar">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <img className="logo me-5" src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" justify-content-end " style={{ width: "100%" }}> <NavLink className="pe-5 ps-3 item" to="/home"><i className="fas fa-home"></i> Home</NavLink>
                            <NavLink className="pe-5 ps-3 item" to="/explore"><i className="fas fa-x-ray"></i> Explore</NavLink>
                            <NavLink className="pe-5 item" to="/admin"><i className="fas fa-tasks"></i> Dashboard</NavLink>
                            {(user?.email) ?
                                <Button className="logoutbtn btn-sm" onClick={logOut}>Logout {user?.displayName}</Button> :
                                <NavLink className="pe-5 item" to="/userlogin"><i className="fas fa-user"></i> Login
                                </NavLink>
                            }
                            <NavLink className="pe-5 item" to="/orderReview"><i className="fas fa-cart-arrow-down"></i> Cart</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;