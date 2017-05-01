import * as widgetsActions from "../actions/widgetsActions"

const initialState = {
    isLoadingWidgets: false,
    widgets: undefined,
}

export default function widgets(state=initialState, action={}) {
    switch (action.type) {
    case widgetsActions.FETCH_WIDGETS:
        return {...state, isLoadingWidgets: true}
    case widgetsActions.FETCH_WIDGETS_SUCCESS:
        return {...state, isLoadingWidgets: false, widgets: action.res}
    case widgetsActions.FETCH_WIDGETS_ERROR400:
    case widgetsActions.FETCH_WIDGETS_ERROR500:
    case widgetsActions.FETCH_WIDGETS_FAILURE:
        return {...state, isLoadingWidgets: false}
    default:
        return state
    }
}
