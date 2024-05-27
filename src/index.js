//starting point
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
//provider so that every component will have access to the store 

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>, 
document.getElementById('root'),

);

