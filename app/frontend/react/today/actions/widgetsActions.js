import { authenticatedRequest, get, request } from "../../utils"

export const FETCH_WIDGETS = "FETCH_WIDGETS"
export const FETCH_WIDGETS_SUCCESS = "FETCH_WIDGETS_SUCCESS"
export const FETCH_WIDGETS_ERROR400 = "FETCH_WIDGETS_ERROR400"
export const FETCH_WIDGETS_ERROR500 = "FETCH_WIDGETS_ERROR500"
export const FETCH_WIDGETS_FAILURE = "FETCH_WIDGETS_FAILURE"
export function fetchUserWidgets() {
    return function (dispatch) {
        dispatch({type: FETCH_WIDGETS})
        let url = "/api/widgets/downloads/"
        return request(
            url, {},
            (json) => { dispatch({type: FETCH_WIDGETS_SUCCESS, result: json}) },
            (json) => { dispatch({type: FETCH_WIDGETS_ERROR400, result: json}) },
            (result) => { dispatch({type: FETCH_WIDGETS_ERROR500, result: result}) },
            (exception) => { dispatch({type: FETCH_WIDGETS_FAILURE, error: exception}) },
        )
    }
}
