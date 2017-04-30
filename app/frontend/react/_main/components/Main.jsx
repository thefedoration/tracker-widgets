import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from './Header';
import Sidebar from './Sidebar';

export default class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    {React.cloneElement(this.props.children, {})}
                </div>
            </div>
        )
    }
}
