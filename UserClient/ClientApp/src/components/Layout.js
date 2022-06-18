import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

/** React component that is used to handle the layout of the page.*/
export class Layout extends Component {
    static displayName = Layout.name;

    /**
     * A method that renders the the complete page either as loding if data is not fetched or with the table containing the fetched data.    
     * @returns {Component}         The layout of the page.
     */
    render () {
        return (
            <div>
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
