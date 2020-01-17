import React from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

// import auth0 from '../../services/auth0';

const BsNavLink = props => {
    const { route, title } = props;
    const className = props.className || '';

    return (
        <ActiveLink activeClassName='active' route={route}>
            <a className={`nav-link port-navbar-link ${className}`}>
                {' '}
                {title}{' '}
            </a>
        </ActiveLink>
    );
};

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { isAuthenticated, user, className } = this.props;
        const { isOpen } = this.state;

        const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';
        return (
            <div>
                <Navbar
                    className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
                    color='transparent'
                    dark
                    expand='md'
                >
                    <NavbarBrand className='port-navbar-brand' href='/'>
                        Isaiah Francois
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink route='/' title='Home' />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink route='/about' title='About' />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <BsNavLink route='/projects' title='Projects' />
                            </NavItem>

                            <NavItem className='port-navbar-item'>
                                <BsNavLink route='/cv' title='Cv' />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
