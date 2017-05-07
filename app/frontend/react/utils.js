import cookies from 'js-cookie';

export function authHeaders() {
  const csrf = cookies.get('csrftoken');
  if (csrf) {
    return {
      'X-CSRFToken': csrf
    };
  }
  return {};
}

function defaultContentType(options) {
  const body = options.body;
  if (!body) {
    return null;
  }

  if (typeof body === 'string') {
    return {
      'Content-Type': 'application/json'
    };
  }

  return null;
}

export function authenticatedRequest(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...defaultContentType(options),
      ...authHeaders(),
      ...options.headers
    },
    credentials: 'include'
  })
    .then((res) => {
      if (res.ok) {
          console.log(res.json())
        return res.json();
      }

      throw res;
    });
}

export function get(url, options = {}) {
  return authenticatedRequest(url, {
    ...options,
    method: 'GET'
  });
}

export function post(url, options = {}) {
  return authenticatedRequest(url, {
    ...options,
    method: 'POST'
  });
}

export function patch(url, options = {}) {
  return authenticatedRequest(url, {
    ...options,
    method: 'PATCH'
  });
}

export default {
  authHeaders,
  authenticatedRequest,
  get,
  post,
  patch
};
// 
// import fetch from "isomorphic-fetch"
// 
// export function request(url, options, success, error400, error, failure) {
//     let headers = new Headers()
//     headers.append("Content-Type", "application/json")
//     headers.append("Accept", "application/json")
//     headers.append("X-CSRFToken", cookies.get('csrftoken'))
//     options["headers"] = headers
//     return fetch(url, options)
//     .then(res => {
//         if (res.status >= 200 && res.status < 300) {
//             // for anything in 200-299 we expect our API to return a JSON response
//             res.json().then(json => { return success(json) })
//         } else if (res.status === 400) {
//             // even for 400 we expect a JSON response with form errors
//             res.json().then(json => { return error400(json) })
//         } else {
//             // For all other errors we are not sure if the response is JSON,
//             // so we just want to display a generic error modal
//             return error(res)
//         }
//     }).catch((ex) => { return failure(ex) })
// }
// 
// 
// function getCookie(name) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         var cookies = document.cookie.split(';');
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = jQuery.trim(cookies[i]);
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     console.log(cookieValue)
//     return cookieValue;
// }
// var csrftoken = getCookie('csrftoken');
// 
// function csrfSafeMethod(method) {
//     // these HTTP methods do not require CSRF protection
//     return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
// }
// $.ajaxSetup({
//     beforeSend: function(xhr, settings) {
//         if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//             xhr.setRequestHeader("X-CSRFToken", csrftoken);
//         }
//     }
// });
