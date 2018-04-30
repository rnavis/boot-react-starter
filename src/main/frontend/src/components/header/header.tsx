import React from 'react';
import {AppStatus, AppConstants} from "../../constants/appStatus";
export class Header extends React.Component<IHeaderProps, undefined> {
    render() {
        console.log('fdsssss');
        const appName = "Order Management System";
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">{AppConstants.APP_NAME}</a>
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <span className="my-2 my-lg-0 badge badge-pill badge-warning">
                                {this.props.appStatus}
                            </span>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
    componentDidMount() {
        this.props.loadAppStatus().then(appStatus => {
            console.log(appStatus);
        });
    }
}
interface IHeaderProps {
    appStatus: AppStatus;
    loadAppStatus:() => any;
}