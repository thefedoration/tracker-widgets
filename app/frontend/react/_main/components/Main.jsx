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
                    <section className="content-header">
                        <h1>
                            hello world!
                            <small>welcome</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> Home
                                </a>    
                            </li>
                            <li><a href="#">Layout</a></li>
                            <li className="active">Fixed</li>
                        </ol>
                    </section>
                    <section className="content">
                        {React.cloneElement(this.props.children, {})}
                    </section>
                </div>
            </div>
        )
    }
}
