import React, { Component } from 'react';
import {Link, withRouter} from "react-router";

class ListItemLink extends Component {
    render() {
        let linkProps = {
            'to': this.props.to,
            'children': this.props.children,
        }
        let isActive = this.props.router.isActive(this.props.to, true),
            className = isActive ? "active" : "";
        return (
            <li className={className}>
                <Link {...linkProps}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
};

export default withRouter(ListItemLink)
