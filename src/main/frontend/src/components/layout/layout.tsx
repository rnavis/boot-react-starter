import React from 'react';
import { IndexLink, Link } from "react-router";
import Footer from '../footer/footer';
import { FrontContainer } from '../front/frontContainer';
import { AppConstants } from '../../constants/appConstants';

export const Layout: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="container-fluid">
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">{AppConstants.APP_NAME}</a>

                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav mr-auto">
                                <li className= {"nav-item active UploadOrders"}>
                                    <IndexLink className="nav-link" to="/" >Upload<span className="sr-only">(current)</span></IndexLink>
                                </li>
                                <li className={"nav-item orderbook"}>
                                    <Link className="nav-link" to="/orders">Orders</Link>
                                </li>
                                <li className={"nav-item other"}>
                                    <Link className="nav-link" to="marketData">Other</Link>
                                </li>
                            </ul>
                            <FrontContainer/>
                        </div>
                    </nav>
                </header>
            </div>
            {props.children}
        </div>
    );
}