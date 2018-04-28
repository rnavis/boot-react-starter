import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

export class Layout extends React.Component<any, {}> {
    render() {

        return (
            <div className="container-fluid">
                <Header location={this.props.location}/>
                <div className="d-lg-table-row">{this.props.children}</div>
                <Footer/>
            </div>
        );
    };
};