import React from 'react'
interface ITitleProp {
    year: number;
}
export default class Footer extends React.Component<ITitleProp, {}> {
    render() {
        return (
            <div><footer> Copyright Thomson Reuters {this.props.year} </footer></div>
        );
    }
}