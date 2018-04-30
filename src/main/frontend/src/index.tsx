import $ from "jquery";

const jQuery = require('jquery');
import * as React from 'react';
import { render } from 'react-dom';
//import { Router, Route, IndexRoute, hashHistory, browserHistory  } from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { appStore } from './store';
import { Provider } from 'react-redux';
import { OrderBookContainer } from './components/body/orderBookContainer';
import { HeaderContainer } from './components/header/headerContainer';
import 'bootswatch/dist/cerulean/bootstrap.min.css';

const orderbook = document.getElementById('orderbook');
console.log(new Date());
render(
    <Provider store={appStore}>
        <div>
            {/*<HeaderContainer/>*/}
            <OrderBookContainer/>
        </div>
    </Provider>, orderbook);




