import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UsernameReducer } from '../../reducers';

const store = createStore( UsernameReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;