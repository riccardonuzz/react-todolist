import React, {Component} from 'react';

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';
import Indicators from './components/Indicators';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idcounter: 0,
            tasks: [],
            ncompleted: 0
        }

        
    }

    createTask(taskName){
        let newTasks = this.state.tasks.slice();    
        newTasks.push({id: this.state.idcounter, name: taskName});
        let counter = this.state.idcounter;
        counter++;
        this.setState({idcounter: counter, tasks: newTasks});
    }

    deleteTask(index){
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((element) => {
                return element.id != index
            })
          }));
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
                    <List deleteTask={this.deleteTask.bind(this)} tasks={this.state.tasks} incrementCompleted={this.incrementCompleted.bind(this)}/>
                    <br />
                </div>
            </div>
        );
    }

}