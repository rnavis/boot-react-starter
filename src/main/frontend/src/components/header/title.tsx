import React from 'react'
interface TitleState {
    app: string;
}
export default class Title extends React.Component<{}, TitleState> {
    constructor(props) {
        super(props);
        this.state = {app:"Order Management System "};
    }
    render() {
        setTimeout(() => {
            this.setState({app:  "Order  Management System 1.0"});
        }, 2000);
       return (
           <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
               <h5 className="my-0 mr-md-auto font-weight-normal">{this.state.app}</h5>
               <nav className="my-2 my-md-0 mr-md-3">
                   <a className="p-2 text-dark" href="#">Order Entry</a>
               </nav>
               <a className="btn btn-success" href="#">Connected ....</a>
           </div>
       );
    }
}