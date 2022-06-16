import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <div>
                <h1>V&#228;lkommen</h1>
                <div className="baby-img-div">
                    <img className="baby-img" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" al="baby"/>
                    <span className="baby-img-text">P&#229; denna sida listas statistik f&#246;r barnf&#246;dslar mellan &#229;ren 2016-2020</span>
                </div>
            </div>
        );
    }
}
