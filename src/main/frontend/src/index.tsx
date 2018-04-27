import $ from "jquery";

const jQuery = require('jquery');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from './components/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const orderbook = document.getElementById('orderbook');
render(<Layout/>, orderbook);