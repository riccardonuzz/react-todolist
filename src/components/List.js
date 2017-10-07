import React, {Component} from 'react';

import Task from './Task';

export default class List extends Component{
    constructor(props){
        super(props);

    }


    render(){
        const listItems = this.props.tasks.map( (task) => {
            return (
                <Task
                    key={task.id}
                    name={task.name}
                    id={task.id}
                    incrementCompleted={this.props.incrementCompleted}
                    deleteTask={this.props.deleteTask}
                />
            );
        });
        
        return (
            <ul className="list-group">
                {listItems}
            </ul>
        );
    }
}