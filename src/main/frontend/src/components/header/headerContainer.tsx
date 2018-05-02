import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { AppState } from "../../reducers";

import { Header } from "./header";
import {ImportOrders} from "../../actions/importOrders";
import {Order} from "../../model/order";
import {loadOrders} from "../../actions/loadOrders";

const mapStateToProps = (state: AppState) => {
    return {
        acceptedImportExtensions: ['.csv'],
        orders: state.orders
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return {
        onImportOrders: (file: File) => {
            dispatch(ImportOrders(file));
        },
    };
};

export const HeaderContainer =
    connect(mapStateToProps, mapDispatchToProps)(Header);