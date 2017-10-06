import React, {Component} from 'react';

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';
import Indicators from './components/Indicators';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            ncompleted: 0
        }
    }

    createTask(newTask){
        let newTasks = this.state.tasks.slice();    
        newTasks.push(newTask);
        this.setState({tasks: newTasks});
    }

    incrementCompleted(check){
        let counter = this.state.ncompleted;
        if(check)
            counter++;
        else
            counter--;
        this.setState({ncompleted: counter});
    }



    render() {
        return(
            <div>
                <Header />
                <br />
                <Indicators ncompleted={this.state.ncompleted} ntasks={this.state.tasks.length}/>
                <br />
                <div className="container">
                    <AddTodo createTask={this.createTask.bind(this)} />
                    <br />
                    <List tasks={this.state.tasks} incrementCompleted={this.incrementCompleted.bind(this)}/>
                </div>
            </div>
        );
    }

}