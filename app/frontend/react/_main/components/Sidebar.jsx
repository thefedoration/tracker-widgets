import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


export default class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
              <section className="sidebar">
                
                <form action="#" method="get" className="sidebar-form">
                  <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..."></input>
                  </div>
                </form>

                <ul className="sidebar-menu">
                  <li className="header">MAIN NAVIGATION</li>
                  <li className="treeview">
                    <a href="#">
                      <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                      <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li><a href="#"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                      <li><a href="#"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                  <li className="header">LABELS</li>
                  <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                </ul>
              </section>
            </aside>
        )
    }
}
