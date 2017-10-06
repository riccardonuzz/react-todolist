import React, {Component} from 'react';

import Task from './Task';

export default class List extends Component{
    constructor(props){
        super(props);

    }


    render(){
        const listItems = this.props.tasks.map( (task, index) => {
            return (
                <Task
                    key={index}
                    name={task}
                    incrementCompleted={this.props.incrementCompleted}
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