import React from 'react';
export class OrderBookHeader extends React.Component<{}, undefined> {
    render() {
        return (
            <tr>
                <th scope="col">Symbol</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Side</th>
                <th scope="col">Validity</th>
            </tr>
        );
    }
}