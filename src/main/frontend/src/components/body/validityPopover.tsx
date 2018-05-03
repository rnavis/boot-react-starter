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
                <span role="button" id={'vPop' + this.props.orderId} style={{color: this.props.iconColor}} className={this.props.icon} onClick={this.toggle}/>
                {/*
               <Button id={'vPop' + this.props.orderId} onClick={this.toggle}>
                    <i className="fa fa-check-circle"></i>
                </Button>*/}
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'vPop' + this.props.orderId} toggle={this.toggle}>
                    <PopoverHeader>Order Validator</PopoverHeader>
                    <PopoverBody>{this.props.messages}</PopoverBody>
                </Popover>
            </div>
        );
    }
}

interface IValidityPopoverProps {
    orderId: number
    messages: string
    isValid: boolean
    isPopupOpen: boolean
    icon: string
    iconColor: string
}

interface  IValidityPopoverState {
    popoverOpen: boolean
}