import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
export class Layout extends React.Component<{}, {}> {
    render() {
        const year = 2018;
        return (
            <div><Header/><Footer year={year}/></div>
        );
    }
}