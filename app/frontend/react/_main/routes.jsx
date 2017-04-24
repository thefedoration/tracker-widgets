import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';

import Main from './components/Main';
import Today from '../today/components/Today';

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
        <IndexRedirect to="/today" />
        <Route component={Main}>
            <Route path="/today" component={Today} />
        </Route>
    </Route>
);

// <Route path="/">
//         <IndexRedirect to="/dashboard" />
//         <Route path="/login" component={Login} />
//         <Route component={Main}>
//             <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
//             <Route path="/positions" component={Positions}>
//                 <Route path="/positions/:positionId" component={Position} />
//                 <Route path="/positions/:positionId/model/:modelId" component={Model}>
//                     <IndexRedirect to="/positions/:positionId/model/:modelId/participation" />
//                     <Route path="/positions/:positionId/model/:modelId/participation" component={ModelParticipation} />
//                     <Route path="/positions/:positionId/model/:modelId/traits" component={ModelTraits} />
//                     <Route path="/positions/:positionId/model/:modelId/accuracy" component={ModelAccuracy} />
//                     <Route path="/positions/:positionId/model/:modelId/demographics" component={ModelDemographics} />
//                     <Route path="/positions/:positionId/model/:modelId/employees" component={ModelEmployees} />
//                 </Route>
//             </Route>
//         </Route>
//     </Route>
