import { combineReducers } from 'redux';
import { OrderReducer } from "../reducers/orderReducer";
import { StatusReducer } from "./statusReducer";
import { Order } from "../model/order";
import { AppStatus } from "../model/appStatus";


export interface AppState {
    orders:Order[];
    order: Order;
    appStatus: AppStatus
}

export const masterState = combineReducers<AppState>({
    orders: OrderReducer,
    appStatus: StatusReducer
});