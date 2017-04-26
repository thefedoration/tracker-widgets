import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
              <a href="#" className="logo">
                <span className="logo-mini"><b>S</b>M</span>
                <span className="logo-lg"><b>Space</b>Mix</span>
              </a>
              <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button"></a>

                <div className="navbar-custom-menu">
                  <ul className="nav navbar-nav">
                    
                    <li className="dropdown user user-menu">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        
                        <span className="hidden-xs">Fedor Garin</span>
                      </a>
                    </li>

                    <li>
                      <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
        )
    }
}
