import  { ActionTypes } from '../actions/actionTypes';
import { AppStatus } from '../model/appStatus'
import {AppStatusAction, createEmptyStatus} from "../actions/loadAppStatus";

export const StatusReducer = (state= createEmptyStatus(), action) => {
    switch (action.type) {
        case ActionTypes.APP_STATUS_RECEIVED:
            return action.appStatus;
    }
    return state;
};