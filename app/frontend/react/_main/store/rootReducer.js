import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

// import authReducer from '../auth/reducers';
import { test } from '../reducers';
// import { positionReducer, activePositionReducer } from '../positions/reducers';

const rootReducer = combineReducers({
    // form,
    test: test,
    // groups: groupReducer,
    // positions: positionReducer,
    // activePosition: activePositionReducer,
});

export default rootReducer;
