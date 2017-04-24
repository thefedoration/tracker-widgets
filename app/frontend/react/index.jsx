import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR

// js requirements
// global.jQuery = require('jquery');

// style requirements
require('bootstrap');
// require('bootstrap-webpack');
require('admin-lte'); // 'admin-lte/dist/js/app.min.js'
// require('admin-lte/build/less/AdminLTE.less');
// require('admin-lte/build/less/skins/_all-skins.less');
// require('font-awesome/less/font-awesome.less');

// redux
import configureStore from './_main/store/configureStore';

import Root from './_main/Root';

const store = configureStore();
const history = hashHistory;

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);


// Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./_main/Root', () => {
//         // const NewRoot = require('./Root').default;
//         render(
//             <AppContainer>
//                 <Root store={store} history={history} />
//             </AppContainer>,
//             document.getElementById('root')
//         );
//     })
// };
