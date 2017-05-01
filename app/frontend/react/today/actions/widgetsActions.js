import { request } from "../../utils"

export const FETCH_WIDGETS = "FETCH_WIDGETS"
export const FETCH_WIDGETS_SUCCESS = "FETCH_WIDGETS_SUCCESS"
export const FETCH_WIDGETS_ERROR400 = "FETCH_WIDGETS_ERROR400"
export const FETCH_WIDGETS_ERROR500 = "FETCH_WIDGETS_ERROR500"
export const FETCH_WIDGETS_FAILURE = "FETCH_WIDGETS_FAILURE"
export function fetchUserWidgets() {
    return function (dispatch) {
        let url = "/api/widgets/downloads/"
        dispatch({type: FETCH_WIDGETS})
        return request(
            url, {},
            (json) => { dispatch({type: FETCH_WIDGETS_SUCCESS, res: json}) },
            (json) => { dispatch({type: FETCH_WIDGETS_ERROR400, res: json}) },
            (res) => { dispatch({type: FETCH_WIDGETS_ERROR500, res: res}) },
            (ex) => { dispatch({type: FETCH_WIDGETS_FAILURE, error: ex}) },
        )
    }
}
