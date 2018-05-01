import React from 'react';
import { Order } from '../../model/order'
import { OrderBookHeader } from './orderBookHeader';
import { OrderBookEntry } from './orderBookEntry';

interface  OrderBookProps {
    loadOrders(): any;
    orders: Order[];
}
export class OrderBook extends React.Component<OrderBookProps, undefined> {
    render() {
        console.log('game... ' +this.props);
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <OrderBookHeader/>
                    </thead>
                    <tbody>
                    {this.props.orders.map(order =>
                        <OrderBookEntry key={order.id} order={order}/>
                    )}
                    </tbody>
                </table>;
            </div>
        );
    }

    componentDidMount() {
        this.props.loadOrders().then(orders => {
            console.log(orders);
        });
    }
}