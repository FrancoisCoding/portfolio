const BsNavLink = ({ route, title }) => {
    return (
        <Link href={route}>
            <a className='nav-link'> {title} </a>
        </Link>
    );
};

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

const Example = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color='light' light expand='md'>
                <NavbarBrand href='/'>Isaiah Francois</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <BsNavLink route='/' title='Home' />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route='/cv' title='CV' />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route='/portfolios' title='Portfolio' />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route='/about' title='About' />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route='/blogs' title='Blog' />
                        </NavItem>
                    </Nav>
                    <NavbarText>FrancoisCoding</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Example;
