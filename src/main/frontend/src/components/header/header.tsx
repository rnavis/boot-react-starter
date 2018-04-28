import React from 'react'
import { IndexLink, Link } from "react-router";
export default class Header extends React.Component<any, {}> {
    render() {
        console.log('fd');
        const appName = "Order Management System"
        const { location} = this.props;
        const homeClass = location.pathname === "/" ? "active" : "";
        const marketDataClass = location.pathname.match(/^\/marketData/) ? "active" : "";
        const executionsClass = location.pathname.match(/^\/executions/) ? "active" : "";

        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">{appName}</a>

                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav mr-auto">
                                <li className= {"nav-item active " + homeClass}>
                                    <IndexLink className="nav-link" to="/" >Order Entry<span className="sr-only">(current)</span></IndexLink>
                                </li>
                                <li className={"nav-item "+ executionsClass}>
                                    <Link className="nav-link" to="executions">Executions</Link>
                                </li>
                                <li className={"nav-item "+ marketDataClass}>
                                    <Link className="nav-link" to="marketData">Market Data</Link>
                                </li>
                            </ul>
                            <span className="my-2 my-lg-0 badge badge-pill badge-warning">
                               Connecting ....
                            </span>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
