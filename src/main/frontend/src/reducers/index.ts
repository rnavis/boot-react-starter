import { combineReducers } from 'redux';
import { AppState } from '../app-state';
import { HeaderReducer } from "./headerReducer";
import { OrderReducer } from "./orderReducer";

export default combineReducers<AppState>({
    HeaderReducer,
    OrderReducer
});