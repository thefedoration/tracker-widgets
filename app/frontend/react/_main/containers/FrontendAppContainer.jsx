import React from "react"
import Radium from "radium"

import { connect } from "react-redux"


export default class FrontendAppContainer extends React.Component {

  render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <h1>hello world</h1>
            </div>
          </div>
        </div>
      )
    }

}
