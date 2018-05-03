import React from 'react';
import { AppStatus } from '../../model/appStatus';

export class Status extends React.Component<IProps, undefined> {
    render() {
        console.log('ssfdsssss');
        return (
            <div className="text-right">
                <span className="my-2 my-lg-0 badge badge-pill badge-warning">
                    {this.props.appStatus.marketStatus}
                </span>
            </div>
        );
    }
    componentDidMount() {
        this.props.loadAppStatus().then(o => {
            console.log(o);
        });
    }
}
interface IProps {
    appStatus: AppStatus;
    loadAppStatus:() => any;
}