import React from 'react';
export class OrderBookHeader extends React.Component<{}, undefined> {
    render() {
        return (
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Symbol</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
            </tr>
        );
    }
}