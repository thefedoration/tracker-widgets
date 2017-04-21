import React from "react"
import { render } from "react-dom"

import FrontendAppContainer from "./containers/FrontendAppContainer"

class FrontendApp extends React.Component {
  render() {
    return (
      <FrontendAppContainer />
    )
  }
}

render(<FrontendApp/>, document.getElementById('FrontendApp'))
