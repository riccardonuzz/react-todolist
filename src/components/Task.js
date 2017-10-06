import React, {Component} from 'react';

export default class Task extends Component{

    constructor(props){
        super(props);

        this.state = {
            completed: false
        }

        this.getStatus = this.getStatus.bind(this);
        this.markAsCompleted = this.markAsCompleted.bind(this);
    }

    getStatus(){
        return this.state.completed;
    }

    markAsCompleted(){
        if(!this.state.completed) {
            this.setState({completed: true});
            this.props.incrementCompleted(true);
        }
        else{
            this.setState({completed: false});
            this.props.incrementCompleted(false);
            
        }
    }

    render(){
        console.log(this.state.completed);        
        return (
            <li className="list-group-item">
                <div className="row">

                    <div className="col-1">
                        <label className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                            <input type="checkbox" className="custom-control-input" onClick={this.markAsCompleted}/>
                            <span className="custom-control-indicator"></span>
                        </label>
                    </div>

                    <div className="col-5">
                        {this.props.name}
                    </div>
                    
                    <div className="col-6 text-right">
                    <button type="button" className="btn btn-danger btn-sm">Elimina</button>
                    </div>
                </div>
            </li>            
        );
    }
}