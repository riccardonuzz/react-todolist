import React, {Component} from 'react';
import { Button,Tooltip, OverlayTrigger } from 'react-bootstrap';

export default class Task extends Component{

    constructor(props){
        super(props);

        this.state = {
            completed: false
        }

        this.isCompleted = this.isCompleted.bind(this);
        this.markAsCompleted = this.markAsCompleted.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }





    isCompleted(){
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


    deleteTask(){
        if(this.isCompleted())
            this.props.incrementCompleted(false);        
        this.props.deleteTask(this.props.id);
    }

    


    render(){
        
        return (
           
            <li className="list-group-item">
                
                <div className="row">

                    <div className="col-1 col-lg-1">
                        <label className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">

                            <OverlayTrigger placement="top" overlay={(<Tooltip style={{opacity: "1"}} id="tooltip">Task completato.</Tooltip>)}>
                                <input type="checkbox" checked={this.state.completed} className="custom-control-input" onChange={this.markAsCompleted} />
                            </OverlayTrigger>
                            
                            <span className="custom-control-indicator"></span>
                        </label>
                        <div className="contaner">
                        
                        </div>
                    </div>

                    <div className="col-6 col-lg-6">
                        {this.props.name}
                    </div>
                    
                    <div className="col-4 col-lg-5 text-right">
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteTask}>Elimina</button>
                    </div>
                </div>
            </li>            
        );
    }
}