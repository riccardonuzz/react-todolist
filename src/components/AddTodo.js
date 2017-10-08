import React, {Component} from 'react';


export default class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.addTask = this.addTask.bind(this);
    }


    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.addTask();
        }
    }


    addTask(){
        if(this.state.value != '') {
            this.props.createTask(this.state.value);
            this.setState({value: ''});
        }        
        
    }

    
    inputChangeHandler(event){
        this.setState({value: event.target.value});        
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="input-group" onKeyPress={this.handleKeyPress}>
                        <input type="text" value={this.state.value} onChange={this.inputChangeHandler} className="form-control" placeholder="Aggiungi un'attività" aria-label="Aggiungi un'attività" />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.addTask}>Aggiungi</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
       

}


