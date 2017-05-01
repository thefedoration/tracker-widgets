import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

// import authReducer from '../auth/reducers';
import * as todayReducers from '../../today/reducers';
// import { positionReducer, activePositionReducer } from '../positions/reducers';

// const rootReducer = combineReducers({
//     // form,
//     todayReducers: todayReducers,
//     // groups: groupReducer,
//     // positions: positionReducer,
//     // activePosition: activePositionReducer,
// });
const rootReducer = combineReducers(todayReducers);

export default rootReducer;
