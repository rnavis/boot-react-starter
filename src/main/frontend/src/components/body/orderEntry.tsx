import React from 'react';
import Side from './side';
import 'whatwg-fetch';
interface OrderEntryProps {
    side: string;
    changeTitle: (string) => void;
}

export default class OrderEntry extends React.Component<OrderEntryProps, {}> {
    constructor(props) {
        super(props);
    }
    addChange(e) {
        this.props.changeTitle(e.target.value);
        fetch(`/echo?request=${e.target.value}`)
            .then(response => {
                return response.text();
            })
            .then(body => {
                alert(body);
            });
    }
    render() {
        return (
            <div>
                <Side side={this.props.side}/>
                <input value={this.props.side} onChange={this.addChange.bind(this)} />
            </div>
        );
    }
}