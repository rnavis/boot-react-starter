import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {AppState, masterState} from "../reducers";
import { AppConstants } from "../constants/appConstants";
/*
//my logger
const sivanLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
}*/

let initialState = {
    orders: [],
    order: {},
    appStatus: {
        status: AppConstants.NOT_CONNECTED,
        marketStaus: AppConstants.NOT_CONNECTED
    }
}

let finalCreateStore = compose(applyMiddleware(thunk, createLogger()))(createStore);

export function initilaizeStore() {
    return finalCreateStore(masterState, initialState);
}
//export const appStore = createStore<AppState>(masterState,  applyMiddleware(thunk, createLogger()));

/*export const store: Store<IServerStatus>  = createStore(
    allReducers, compose(
        applyMiddleware(thunk),
    )
);*/
