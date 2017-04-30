import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR

// style imports
import styles from '../static/css/style.scss';

// javascript imports
import adminLteJs from '../node_modules/admin-lte/dist/js/app.js'
import slimscrollJs from '../node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js'

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
