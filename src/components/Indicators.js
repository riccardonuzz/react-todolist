import React, {Component} from 'react';

export default class Indicators extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Task completati</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Task totali</h4>
                                <p className="card-text">{this.props.ntasks}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}