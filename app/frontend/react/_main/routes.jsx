import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';

import Main from './components/Main';

// import { loggedIn } from './store/auth';
function requireAuth (nextState, replace) {
    // console.log('requireAuth fired with args',arguments)
    // if (!loggedIn()) {
    //     replace({
    //         pathname: 'login',
    //         state: { nextPathName: 'dashboard'}
    //     })
    // }
}

export default (
    <Route path="/">
        <IndexRedirect to="/main" />
        <Route path="/main" component={Main}>
            
        </Route>
    </Route>
);
