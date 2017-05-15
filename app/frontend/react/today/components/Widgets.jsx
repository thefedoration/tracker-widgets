import React, { } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import UserWidget from "./UserWidget"

import * as widgetsActions from "../actions/widgetsActions"


class Widgets extends React.Component {
    componentDidMount() {
        let {widgets, isFetching, actions} = this.props;
        if (!isFetching && widgets === undefined) {
            actions.fetchUserWidgets()
        }
    }
      
    render() {
        let {widgets, isFetching} = this.props;
        if (isFetching || widgets === undefined) {
            return this.renderLoading()
        }
        
        return (
            <div className="row">
                {widgets.map(userWidget =>
                    <UserWidget
                        key={userWidget.hash}
                        {...userWidget}
                    />
                )}
            </div>
        )
    }
    
    renderLoading() {
        return (
            <div>Loading...</div>
        )
    }
}

Widgets.propTypes = {
    widgets: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        widgets: state.widgets.widgets,
        isFetching: state.widgets.isLoadingWidgets,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(widgetsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
