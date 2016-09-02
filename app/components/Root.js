import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';


const Root = ({store}) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/(:groupProp)(/:groupPropVal)" component={App} />
        </Router>
    </Provider>
);

export default Root;