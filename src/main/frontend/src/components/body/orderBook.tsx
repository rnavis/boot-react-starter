import React from 'react';
import { Order } from '../../model/order'
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
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.orders.map(order => <tr className="table-active" key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.symbol}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                    </tr>)}
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