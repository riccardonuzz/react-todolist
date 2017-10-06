import React, {Component} from 'react';

export default class Indicators extends Component{

    constructor(props){
        super(props);

        // this.progressStyle = {
        //     width: '0%'
        //  };

        // this.percent = 0;

    }

    render(){
        this.percent = (this.props.ncompleted/this.props.ntasks)*100 || 0;
        
        this.progressStyle = {
            width: `${this.percent}%`
         };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Task completati</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={this.percent} aria-valuemin="0" aria-valuemax="100" style={this.progressStyle}>{this.percent}%</div>
                                    </div>
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