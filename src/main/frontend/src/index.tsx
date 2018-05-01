import $ from "jquery";

const jQuery = require('jquery');
import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory  } from "react-router";
import { initilaizeStore } from './store/store';
import { Provider } from 'react-redux';
import { OrderBookContainer } from './components/body/orderBookContainer';
import { FrontContainer } from './components/front/frontContainer';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import {Layout} from "./components/layout/layout";

const orderbook = document.getElementById('orderbook');
console.log(new Date());
let appStore = initilaizeStore();
render(
    <Provider store={appStore}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={FrontContainer} />
                <Route path="/orders" component={OrderBookContainer} />
            </Route>
        </Router>
    </Provider>, orderbook);




