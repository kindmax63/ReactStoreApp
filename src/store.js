import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

const fn = () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store;
};

export default fn;




