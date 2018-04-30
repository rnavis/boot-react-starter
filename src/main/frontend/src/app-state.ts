import { Reducer } from 'redux';
import reducer from './reducers';
import { Order } from './model/order'
import { AppStatus } from './constants/appStatus'

export interface AppState {
    orders:Order[];
    appStatus:AppStatus;
}

/*
export const DefaultAppState: AppState = (<Reducer<AppState | undefined>>reducer)(undefined, {
    type: '',
    orders: [],
    appStatus: AppStatus.NotConnected,
});*/
