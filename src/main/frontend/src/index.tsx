import $ from "jquery";

const jQuery = require('jquery');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory  } from "react-router";
import { Layout } from './components/layout/layout';
import { OrderEntry } from './components/body/pages/orderEntry';
import { MarketData } from './components/body/pages/marketData';
import { Executions } from './components/body/pages/executions';
import 'bootswatch/dist/cerulean/bootstrap.min.css';

const orderbook = document.getElementById('orderbook');
console.log('dfs fsfs');
render(
    <Router history={hashHistory }>
        <Route path="/" component={Layout}>
            <IndexRoute component={OrderEntry}></IndexRoute>
            <Route path="marketData" component={MarketData}></Route>
            <Route path="executions" component={Executions}></Route>
        </Route>
    </Router>, orderbook);