import React from 'react';
import {Order} from "../../model/order";
interface Props {
    order: Order;
}
export class OrderBookEntry extends React.Component<Props, undefined> {
    render() {
        return (
            <tr>
                <td>{this.props.order.id}</td>
                <td>{this.props.order.symbol}</td>
                <td>{this.props.order.price}</td>
                <td>{this.props.order.quantity}</td>
            </tr>
        );
    }
}