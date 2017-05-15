// import { authenticatedRequest, get, request } from "../../utils"

export const TOGGLE_VISIBLITY = "TOGGLE_VISIBLITY"
export function toggleVisibility() {
    console.log("go")
    return dispatch({type: TOGGLE_VISIBLITY})
    // return function (dispatch) {
    //     console.log("got it")
    //     return dispatch({type: TOGGLE_VISIBLITY})
    // }
}
