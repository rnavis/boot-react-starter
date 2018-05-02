import React from 'react';
import {Order} from "../../model/order";
import {ValidityPopover} from './validity';
interface Props {
    order: Order;
}
export class OrderBookEntry extends React.Component<Props, undefined> {
    render() {
        console.log('info here'+ this.props.order);
        return (
            <tr>
                <td>{this.props.order.symbol}</td>
                <td>{this.props.order.price}</td>
                <td>{this.props.order.quantity}</td>
                <td>{this.props.order.side}</td>
                <td><ValidityPopover message = {this.props.order.validation.message} isValid={this.props.order.isValid} isPopupOpen={ false }/></td>
            </tr>
        );
    }
}