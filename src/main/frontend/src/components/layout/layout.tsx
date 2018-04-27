import React from 'react';
import Header from '../top/header';
import Footer from '../base/footer';
import OrderBook from '../body/orderBook';
export class Layout extends React.Component<{}, {}> {
    render() {
        const year = 2018;
        return (
            <div><Header/><OrderBook/><Footer year={year}/></div>
        );
    }
}