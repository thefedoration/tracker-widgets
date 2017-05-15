import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import * as userWidgetActions from "../actions/userWidgetActions"

class UserWidget extends Component {
    componentDidMount() {
        let {toggleVisibility} = this.props.actions;
        toggleVisibility()
    }
    
    render() {
        let {isVisible, widget, actions} = this.props;
        return (
            <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">{widget.name}</h3>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse" 
                            onClick={() => actions.toggleVisibility()}>
                                <i className="fa fa-eye"></i>
                            </button>
                            <button type="button" className="btn btn-box-tool" data-toggle="dropdown">
                                <i className="fa fa-cogs"></i>
                            </button>
                        </div>
                    </div>
                    <div className="box-body">{widget.description}</div>
                    <div className="box-footer">{widget.hash}</div>
                </div>
            </div>
        );
    }
}


UserWidget.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    widget: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};
UserWidget.defaultProps = {
    isVisible: true,
};

// function mapStateToProps(state) {
//     return {
//         isVisible: state.isVisible,
//         widget: state.widget,
//     };
// }


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userWidgetActions, dispatch)
    };
}

export default connect(mapDispatchToProps)(UserWidget);
