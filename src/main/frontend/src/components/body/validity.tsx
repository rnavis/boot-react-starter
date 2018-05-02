import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
export class ValidityPopover extends React.Component<IValidityPopoverProps, IValidityPopoverState> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {

        console.log('validaiton '+ this.props);
        return (
            <div>
                <Button id="vPop" onClick={this.toggle}>
                    Launch Popover
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="vPop" toggle={this.toggle}>
                    <PopoverHeader>Order Validator</PopoverHeader>
                    <PopoverBody>{this.props.message}</PopoverBody>
                </Popover>
            </div>
        );
    }
}
interface IValidityPopoverProps {
    message: string
    isValid: boolean
    isPopupOpen: boolean
}
interface  IValidityPopoverState {
    popoverOpen: boolean
}