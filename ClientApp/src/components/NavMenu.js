import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

/** React component that is used to display the navbar of the webpage.*/
export class NavMenu extends Component {
    static displayName = NavMenu.name;

    //the class constructor
    /**
     * Set up the initial stage for the component.
     * @param  {object} props properties sent from parent.
     */
    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    /**
     * A method that toggles if the menu shal be collapsed or not.   
     * @returns {void}
     */
    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    /**
     * A method that renders the navbar of the page.  
     * @returns {Component}         The navbar of the page.         
     */
    render () {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">BF</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Hem</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/statistics">Statistik</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
