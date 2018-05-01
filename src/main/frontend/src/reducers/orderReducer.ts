import  { OrderAction } from '../actions/loadOrders';
import  { ActionTypes } from '../actions/actionTypes';
import {Order} from "../model/order";

const emptyOrderList = (): Order[] => ([]);

export const OrderReducer = (orders=[], action) => {
    switch (action.type) {
        case ActionTypes.REFRESH_ORDERS_REQUEST:
            return orders;
        case ActionTypes.REFRESH_ORDERS_DONE:
            return action.orders;
        default:
            return orders;
    }
};