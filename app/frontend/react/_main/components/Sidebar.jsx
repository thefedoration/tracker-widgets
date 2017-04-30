import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ListItemLink from '../modules/ListItemLink'


export default class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="header">Widgets</li>
                        <ListItemLink to="/today">
                            <i className="fa fa-calendar-check-o"></i> <span>Today</span>
                        </ListItemLink>
                        <ListItemLink to="/analytics">
                            <i className="fa fa-bar-chart"></i> <span>Analytics</span>
                        </ListItemLink>
                    </ul>
                    <ul className="sidebar-menu">
                        <li className="header">Settings</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-sliders"></i> <span>Configure</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#"><i className="fa fa-calendar-check-o"></i> Today Page</a></li>
                                <li><a href="#"><i className="fa fa-bar-chart"></i> Analytics Page</a></li>
                                <li><a href="#"><i className="fa fa-bell-o"></i> Notifications</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><i className="fa fa-user-o"></i> <span>Account</span></a></li>
                    </ul>
                    <ul className="sidebar-menu">
                        <li className="header">Developers</li>
                        <li><a href="#"><i className="fa fa-code"></i> <span>My Widgets</span></a></li>
                        <li><a href="#"><i className="fa fa-file-text-o"></i> <span>Documentation</span></a></li>
                    </ul>
                    <ul className="sidebar-menu">
                        <li className="header">Info</li>
                        <li><a href="#"><i className="fa fa-question-circle-o"></i> <span>FAQ</span></a></li>
                        <li><a href="#"><i className="fa fa-info-circle"></i> <span>About</span></a></li>
                        <li><a href="#"><i className="fa fa-envelope-o"></i> <span>Contact</span></a></li>
                    </ul>
                </section>
            </aside>
        )
    }
}
