import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../src/redux/stores';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                    <App />
            </Provider>            
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);