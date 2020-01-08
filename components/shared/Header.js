import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import auth0 from '../../services/auth0';

const BsNavLink = ({ route, title }) => {
    return (
        <Link href={route}>
            <a className='nav-link port-navbar-link clickable'> {title} </a>
        </Link>
    );
};

const Login = () => {
    return (
        <span
            onClick={auth0.login}
            className='nav-link port-navbar-link clickable'
        >
            Login
        </span>
    );
};

const Logout = () => {
    return (
        <span
            onClick={auth0.logout}
            className='nav-link port-navbar-link clickable'
        >
            Logout
        </span>
    );
};

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    console.log('Authenticated', auth0.isAuthenticated());
    return (
        <div>
            <Navbar
                className='port-navbar port-default absolute'
                color='transparent'
                dark
                expand='md'
            >
                <NavbarBrand className='port-navbar-brand' href='/'>
                    Isaiah Francois
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/' title='Home' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/cv' title='CV' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/portfolios' title='Portfolio' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/about' title='About' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/blogs' title='Blog' />
                        </NavItem>
                        {!auth0.isAuthenticated() && (
                            <NavItem className='port-navbar-item'>
                                <Login />
                            </NavItem>
                        )}
                        {auth0.isAuthenticated() && (
                            <NavItem className='port-navbar-item'>
                                <Logout />
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
