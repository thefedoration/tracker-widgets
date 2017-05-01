import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './rootReducer';

const configureStore = () => {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    let store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);
    return store;
};

export default configureStore;
