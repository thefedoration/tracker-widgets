import React from "react"
import { render } from "react-dom"
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import * as reducers from "./_main/reducers"
import FrontendAppContainer from "./_main/containers/FrontendAppContainer"

let finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
let reducer = combineReducers(reducers)
let store = finalCreateStore(reducer)

class FrontendApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FrontendAppContainer />
      </Provider>
    )
  }
}

render(<FrontendApp/>, document.getElementById('FrontendApp'))
