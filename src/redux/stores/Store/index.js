import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// import reducer from '../../reducers';

const store = createStore(playerReducer, devToolsEnhancer());

export default store;