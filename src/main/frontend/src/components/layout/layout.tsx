import React from 'react';
import { IndexLink, Link } from "react-router";
import Footer from '../footer/footer';
import { StatusContainer } from '../status/statusContainer';
import { AppConstants } from '../../constants/appConstants';
import { HeaderContainer } from '../header/headerContainer'

export const Layout: React.StatelessComponent<{}> = (props) => {
    var container = {
        "min-height": "900px",
        "overflow":"hidden"
    }
    return (
        <div className="container-fluid">
            <div>
                <header>
                        <HeaderContainer/>
                </header>
            </div>
            <div className="container" style={container}>{props.children} </div>
            <Footer/>

        </div>
    );
}