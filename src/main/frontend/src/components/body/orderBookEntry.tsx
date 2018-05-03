import React from 'react';
import {Order} from "../../model/order";
import {ValidityPopover} from './validityPopover';
import {AppConstants} from "../../constants/appConstants";
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
                <td><ValidityPopover icon={this.getIcon()} iconColor={this.getColor()} orderId={this.props.order.id} message = {this.props.order.validation.message} isValid={this.props.order.isValid} isPopupOpen={ false }/></td>
            </tr>
        );
    }

    private getIcon(): string {
        if (this.props.order.isValid) {
            return 'fa fa-check-circle';
        }

        return 'fa fa-exclamation-triangle';
    }

    private getColor(): string {
        if (this.props.order.isValid) {
            return AppConstants.GREEN;
        }
        return AppConstants.GRAY;
    }
}