import React from 'react'
interface SideProps {
    side: string;
}
export default class Side extends React.Component<SideProps, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.side}</h3>
        </div>
    );
    }
}