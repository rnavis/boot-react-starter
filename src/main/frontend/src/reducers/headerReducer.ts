import { combineReducers } from 'redux';
import { AppState } from '../app-state';
import  { OrderAction } from '../actions/loadOrders';
import  { ActionTypes } from '../actions/actionTypes';
import { AppStatus } from '../constants/appStatus'
import {AppStatusAction} from "../actions/loadAppStatus";

export const HeaderReducer = (state: AppState = { orders: [], appStatus:AppStatus.NotConnected }, action: AppStatusAction) => {
    switch (action.type) {
        case ActionTypes.GET_APP_STATUS:
            return {
                appStatus: AppStatus.NotConnected,
            };
        case ActionTypes.APP_STATUS_RECEIVED:
            return {
                appStatus: action.appStatus,
            };
        default:
            return state;
    }

};