import { Dispatch, Action } from "redux";
import { parse, unparse } from 'papaparse';
import { ActionTypes } from './actionTypes';
import { Order } from '../model/order';
import {ThunkAction} from "redux-thunk";
import {OrderAction, createLoadOrdersDoneAction, loadOrders} from "./loadOrders";
import {AppConstants} from "../constants/appConstants";

declare var fetch;
export interface OrderImportAction extends Action {
    acceptedImportExtensions: ['.csv'];
}


export const ImportOrders = (file:File): any => {
    return (dispatch: Dispatch<Order[]>, getState: () => Order[]) => {
        return importOrdersFromFile(file).then((orders: Order[]) => {
                console.log('orders '+ orders);
                dispatch(createLoadOrdersDoneAction(orders))
                return Promise.resolve();
            },
            error => {
                alert('Import failed: ' + error);
                return Promise.reject(error);
            }
        );
    };
};

const importOrdersFromFile = (file: File): Promise<Order[]> => {
    return new Promise<Order[]>((resolve, reject) => {
        return readOrders(file).then((orders: Order[]) => {
            try {
                console.log('aaab ' + orders);
                resolve(saveAndValidateOrders(orders));
            }
            catch(error) {
                reject(error);
            }
        });
    });
}

const saveAndValidateOrders = (orders: Order[]): Promise<Order[]> => {

    return fetch(AppConstants.APP_SERVER + '/saveAndValidateOrders', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orders)
    }).then((res) => res.json());
    /*return fetch(AppConstants.APP_SERVER + '/getOrders')
        .then((res) => res.json());*/
}
const readOrders = (file:File): Promise<Order[]> => {
    return new Promise<Order[]>((resolve, reject) => {
        readFile(file).then(text => {
            parse(text, {
                dynamicTyping: true,
                header: true,
                complete: (results) => {
                    resolve(results.data as Order[]);
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    });
}

const readFile = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        try {
            /*if (file.type != "application/vnd.ms-excel") {
                reject('Only .csv files are allowed');
            }*/
            var reader = new FileReader();
            reader.onload = (event: any) => {
                return resolve(reader.result.toLowerCase());
            };
            reader.readAsText(file);
            }
        catch(error) {
            reject(error);
        }
    });
}