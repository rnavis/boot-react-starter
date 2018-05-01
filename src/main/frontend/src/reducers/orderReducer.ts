import  { OrderAction } from '../actions/loadOrders';
import  { ActionTypes } from '../actions/actionTypes';
import {Order} from "../model/order";

const emptyOrderList = (): Order[] => ([]);

export const OrderReducer = (state=emptyOrderList(), action) => {
    switch (action.type) {
        case ActionTypes.REFRESH_ORDERS_REQUEST:
            return {
                ...state,
                orders: action.orders,
            };
        case ActionTypes.REFRESH_ORDERS_DONE:
            var t= {
                ...state,
                orders: action.orders,
            };
            return t;
        default:
            return state;
    }

};