import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { allReducers, IServerStatus } from "./reducers";
//import reducer from './reducers';
import { AppState } from "./app-state";
import { OrderReducer } from "./reducers/orderReducer";

export const appStore = createStore<AppState>(OrderReducer,  applyMiddleware(thunk));

/*export const store: Store<IServerStatus>  = createStore(
    allReducers, compose(
        applyMiddleware(thunk),
    )
);*/
