import { combineReducers } from 'redux';
import { AppState } from '../app-state';
import  { OrderAction } from '../actions/loadOrders';
import  { ActionTypes } from '../actions/actionTypes';
import { AppStatus } from '../constants/appStatus'

export const OrderReducer = (state: AppState = { orders: [], appStatus:AppStatus.NotConnected }, action: OrderAction) => {

    switch (action.type) {
        case ActionTypes.REFRESH_ORDERS_REQUEST:
            return {
                ...state,
                orders: action.orders,
            };
        case ActionTypes.REFRESH_ORDERS_DONE:
            return {
                ...state,
                orders: action.orders,
            };
        default:
            return state;
    }

};