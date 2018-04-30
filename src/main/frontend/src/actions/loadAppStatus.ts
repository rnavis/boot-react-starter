import { Dispatch, Action } from "redux";
import { ActionTypes } from './actionTypes';
import { AppStatus, AppConstants } from '../constants/appStatus';
import {AppState} from "../app-state";

declare var fetch;

export interface AppStatusAction extends Action {
    appStatus: AppStatus;
}
const createAppStatusRequestAction: () => AppStatusAction =
    () => ({
        type: ActionTypes.GET_APP_STATUS,
        appStatus: {} as AppStatus,
    });
const createAppStatusRetrievedAction: (appStatus: AppStatus) => AppStatusAction =
    (appStatus: AppStatus) => ({
        type: ActionTypes.APP_STATUS_RECEIVED,
        appStatus,
    });

export const loadAppStatus = () => {
    return (dispatch:Dispatch<AppState>) => {
        dispatch(createAppStatusRequestAction());
        return fetch(AppConstants.APP_SERVER+'/status')
            .then((res) => res.json())
            .then((appStatus: AppStatus) => dispatch(createAppStatusRetrievedAction(appStatus)));
    }
};