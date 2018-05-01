import  { ActionTypes } from '../actions/actionTypes';
import { AppStatus } from '../model/appStatus'
import {AppStatusAction, createEmptyStatus} from "../actions/loadAppStatus";

export const StatusReducer = (status= createEmptyStatus(), action) => {
    switch (action.type) {
        case ActionTypes.GET_APP_STATUS:
            return action.appStatus;

        case ActionTypes.APP_STATUS_RECEIVED:
            return action.appStatus;
    }
    return status;
};