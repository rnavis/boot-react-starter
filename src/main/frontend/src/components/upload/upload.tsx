import React from 'react';
import { UploadButton } from './uploadButton';

export class Upload extends React.Component<UploadProps, undefined> {
    render() {
        console.log('upload action');
        return (
            <UploadButton id="order-upload" extensions={this.props.extensions} cssClass="btn btn-secondary" iconClass="none" onUpload={this.props.onUpload}/>
        );
    }
}
interface UploadProps {
    onUpload: (file: File) => void;
    extensions: string[]
}