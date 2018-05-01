import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {AppState, masterState} from "../reducers";

/*
//my logger
const sivanLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
}*/

export const appStore = createStore<AppState>(masterState,  applyMiddleware(thunk, createLogger()));

/*export const store: Store<IServerStatus>  = createStore(
    allReducers, compose(
        applyMiddleware(thunk),
    )
);*/
