import React from 'react';
import { AppConstants } from '../../constants/appConstants';
import { AppStatus } from '../../model/appStatus';

export class Front extends React.Component<IFrontProps, undefined> {
    render() {
        console.log('ssfdsssss');
        return (
            <div className="text-right">
                <span className="my-2 my-lg-0 badge badge-pill badge-warning">
                    {this.props.appStatus.status}
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
interface IFrontProps {
    appStatus: AppStatus;
    loadAppStatus:() => any;
}