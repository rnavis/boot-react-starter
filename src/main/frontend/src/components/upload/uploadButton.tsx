import React from 'react';
export class UploadButton extends React.Component<UploadButtonProps, undefined> {
    private onFilePicked = (files: FileList) => {
        if (this.props.onUpload && files.length > 0) {
            this.props.onUpload(files.item(0));
        }
    }
    render() {
        console.log('upload action');
        return (

            <div>
                <label htmlFor="file-input">
                    <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
                </label>
                <input type="file" accept={this.props.extensions.join(', ') }
                       onChange={ (e) => this.onFilePicked(e.target.files) } className="file-input hide" name="file-input" id="file-input"></input>
                    <div className="filename-container hide"></div>
            </div>
            /*<button type='button' className={this.props.cssClass}>
                <span className={this.props.iconClass}/>
                <input accept={this.props.extensions.join(', ') }
                       className="import-input"
                       type="file"
                       onChange={ (e) => this.onFilePicked(e.target.files) }
                />
            </button>*/
        );
    }
}
interface UploadButtonProps {
    id: string;
    extensions: string[];
    cssClass: string;
    iconClass: string;
    onUpload: (file: File) => void;
}