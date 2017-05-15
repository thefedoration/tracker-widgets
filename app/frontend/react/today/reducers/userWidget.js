import * as userWidgetActions from "../actions/userWidgetActions"

const initialState = {
    isVisible: true,
    // widget: undefined,
}

export default function userWidget(state=initialState, action={}) {
    switch (action.type) {
    case userWidgetActions.TOGGLE_VISIBLITY:
        console.log("toggling")
        return {...state, isVisible: !state.isVisible}
        // return Object.assign({}, state, {
        //     completed: !state.completed
        // })
    default:
        return state
    }
}
