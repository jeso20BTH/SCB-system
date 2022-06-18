import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Statistics } from './components/Statistics';
import './custom.css'

/** React component that is used to handle the the routing of the pages and what layout that is connected to what route.*/
export default class App extends Component {
    static displayName = App.name;

    /**
     * A method that renders the layout of the page depending of its route..  
     * @returns {Component}         The layout of the page.         
     */
    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/statistics' component={Statistics} />
            </Layout>
        );
    }
}
