import React from 'react';
import {  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,NavLink} from 'reactstrap';
import { Link } from "react-router";
import { AppStatus } from '../../model/appStatus';
import {AppConstants} from "../../constants/appConstants";
import { Upload } from '../upload/upload';
import {StatusContainer} from "../status/statusContainer";
import {Order} from "../../model/order";

export class Header extends React.Component<IHeaderProps, {}> {
    render() {
        console.log('header');
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand  href="#">{AppConstants.APP_NAME}</NavbarBrand>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        </NavItem>
                        {/*<li className={"nav-item orderbook"}>
                            <Link className="nav-link" to="/orders">Orders</Link>
                        </li>*/}
                        <li className={"nav-item orderbook"}><Upload onUpload={this.props.onImportOrders} extensions={this.props.acceptedImportExtensions}/></li>
                    </Nav>
                    <StatusContainer/>
                </div>
            </Navbar>
        );
    }
}
export interface IHeaderProps {
    acceptedImportExtensions: string[],
    onImportOrders: () => any;
    orders : Order[]
}