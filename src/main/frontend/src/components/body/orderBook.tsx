import React from 'react';
import { Table } from 'reactstrap';
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

                <Table>
                    <thead>
                    <OrderBookHeader/>
                    </thead>
                    <tbody>
                    {this.props.orders.map(order =>
                        <OrderBookEntry key={order.id} order={order}/>
                    )}
                    </tbody>
                </Table>

        );
    }

    componentDidMount() {
        /*this.props.loadOrders().then(orders => {
            console.log(orders);
        });*/
    }
}