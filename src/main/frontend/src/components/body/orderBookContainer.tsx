import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { AppState } from "../../reducers";
import { loadOrders } from "../../actions/loadOrders";
import { OrderBook } from "./orderBook";

const mapStateToProps = (state: AppState) => ({
    orders: state.orders,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadOrders }, dispatch);

export const OrderBookContainer =
    connect(mapStateToProps, mapDispatchToProps)(OrderBook);