import cookies from 'js-cookie';
import fetch from "isomorphic-fetch"

export function request(url, options, success, error400, error, failure) {
    let headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("X-CSRFToken", cookies.get('csrftoken'))
    options["headers"] = headers;
    options["credentials"] = 'include';
    return fetch(url, options)
    .then(result => {
        if (result.status >= 200 && result.status < 300) {
            // for anything in 200-299 we expect our API to return a JSON resultponse
            result.json().then(json => { return success(json) })
        } else if (result.status === 400) {
            // even for 400 we expect a JSON resultponse with form errors
            result.json().then(json => { return error400(json) })
        } else {
            // For all other errors we are not sure if the resultponse is JSON,
            // so we just want to display a generic error modal
            return error(result)
        }
    }).catch((exception) => { return failure(exception) })
}
