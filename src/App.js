import React, {Component} from 'react';

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';
import Indicators from './components/Indicators';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    createTask(newTask){
        let newTasks = this.state.tasks.slice();    
        newTasks.push(newTask);
        this.setState({tasks: newTasks});
    }

    render() {
        return(
            <div>
                <Header />
                <br />
                <Indicators ntasks={this.state.tasks.length}/>
                <br />
                <div className="container">
                    <AddTodo createTask={this.createTask.bind(this)} />
                    <br />
                    <List tasks={this.state.tasks} />
                </div>
            </div>
        );
    }

}