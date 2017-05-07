import React, { } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import * as widgetActions from "../actions/widgetsActions"


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
        
        let widgetNodes = [];
        widgets.forEach((item, index) => {
            let node = (
                <div key={item.hash}>{item.name}</div>
            )
            widgetNodes.push(node)
        })

        return (
            <div>{widgetNodes}</div>
        )
    }
    
    renderLoading() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        Loading...
                    </div>
                </div>
            </div>
        )
    }
}

Widgets.propTypes = {
    widgets: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        widgets: state.widgets.widgets,
        isFetching: state.widgets.isLoadingWidgets,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(widgetActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
