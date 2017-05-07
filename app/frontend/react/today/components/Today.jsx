import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Widgets from "./Widgets"

export default class Today extends Component {
    render() {
        return (
            <div>
                <section className="content-header">
                    <h1>Today
                        <small>April 28th, 2017</small>
                    </h1>
                </section>
                <section className="content">
                    <Widgets />
                </section>
            </div>
        );
    }
}
