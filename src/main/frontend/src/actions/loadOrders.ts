import { Dispatch, Action } from "redux";
import { ActionTypes } from './actionTypes';
import { Order } from '../model/order';
import { AppConstants } from "../constants/appConstants";
import {ThunkAction} from "redux-thunk";

declare var fetch;

export interface OrderAction extends Action {
    orders: Order[];
}
const createLoadOrdersRequestAction: () => OrderAction =
    () => ({
        type: ActionTypes.REFRESH_ORDERS_REQUEST,
        orders: [] as Order[],
    });

export const createLoadOrdersDoneAction: (orders: Order[]) => OrderAction =
    (orders: Order[]) => ({
        type: ActionTypes.REFRESH_ORDERS_DONE,
        orders,
    });

export const loadOrders = () => {

    return (dispatch: Dispatch<Order[]>) => {

        dispatch(createLoadOrdersRequestAction());

        return fetch(AppConstants.APP_SERVER + '/getOrders')
            .then((res) => res.json())
            .then((orders: Order[]) => dispatch(createLoadOrdersDoneAction(orders)));

    };
};
