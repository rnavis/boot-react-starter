import { Dispatch, Action } from "redux";
import { ActionTypes } from './actionTypes';
import { Order } from '../model/order';
import { AppState } from '../app-state';
import {AppConstants} from "../constants/appStatus";

declare var fetch;

export interface OrderAction extends Action {
    orders: Order[];
}
const createLoadOrdersRequestAction: () => OrderAction =
    () => ({
        type: ActionTypes.REFRESH_ORDERS_REQUEST,
        orders: [] as Order[],
    });

const createLoadOrdersDoneAction: (orders: Order[]) => OrderAction =
    (orders: Order[]) => ({
        type: ActionTypes.REFRESH_ORDERS_DONE,
        orders,
    });

export const loadOrders = () => {

    return (dispatch: Dispatch<AppState>) => {

        dispatch(createLoadOrdersRequestAction());

        return fetch(AppConstants.APP_SERVER + '/getOrders')
            .then((res) => res.json())
            .then((orders: Order[]) => dispatch(createLoadOrdersDoneAction(orders)));

    };

    /*return (dispatch, getState) => {

        dispatch(createLoadOrdersRequestAction());

        // return promise so that when invoked in the component,
        // subsequent operations can be chained off of it
        return fetch("http://localhost:8080/getOrders")
            .then(res => res.json())
            .then(orders => {

                const orderModels = orders.map(o => {
                    const order = new Order();
                    order.id = o.id;
                    order.quantity = o.quantity;
                    order.price = o.price;
                    return order;
                });

                dispatch(createLoadOrdersDoneAction(orderModels));

                return orderModels;
            });
    };*/

};