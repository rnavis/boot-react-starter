import { Dispatch, Action } from "redux";
import { ActionTypes } from './actionTypes';
import { AppStatus } from '../model/appStatus';
import { AppConstants } from "../constants/appConstants";
import {Order} from "../model/order";

declare var fetch;

export interface AppStatusAction extends Action {
    appStatus: AppStatus;
}
export const createEmptyStatus = () => ({status:AppConstants.NOT_CONNECTED, marketStatus: AppConstants.NOT_CONNECTED});

const createAppStatusRequestAction: () => AppStatusAction =
    () => ({
        type: ActionTypes.GET_APP_STATUS,
        appStatus: createEmptyStatus() as AppStatus,
    });
const createAppStatusRetrievedAction= (appStatus: AppStatus) => ({
        type: ActionTypes.APP_STATUS_RECEIVED,
        appStatus,
    });

export const loadAppStatus = () => {
    return (dispatch:Dispatch<AppStatus>) => {
        dispatch(createAppStatusRequestAction());
        return fetch(AppConstants.APP_SERVER+'/status')
            .then((res) => res.json())
            .then((data) => dispatch(createAppStatusRetrievedAction(data)));
    }
};