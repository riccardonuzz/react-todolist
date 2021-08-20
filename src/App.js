import React, { useState } from 'react';

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';
import Indicators from './components/Indicators';
import TodoAddedNotification from './components/TodoAddedNotification';

const App = () => {
    const [todos, setTodos] = useState([])
    const [showNotification, setShowNotification] = useState(false)

    const addTodo = (name) => {
        const id = todos.length ? (todos[todos.length - 1].id + 1) : 1;
        const newTodos = [...todos, { id, name, completed: false }]
        setTodos(newTodos);
        setShowNotification(true)
    }

    const deleteTodo = (id) => {
        setTodos(prevState => prevState.filter((todo) => todo.id !== id))
    }

    const markTodoAsCompleted = (id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos([...newTodos])
    }

    const getCompletedTodos = () => {
        return todos.reduce((n, todo) => n + (todo.completed), 0)
    }


    return (
        <div>
            <Header />
            <br />
            <Indicators nCompleted={getCompletedTodos()} nTodos={todos.length} />
            <br />
            <div className="container">
                <AddTodo addTodo={addTodo} />
                <br />
                <List deleteTodo={deleteTodo} todos={todos} markTodoAsCompleted={markTodoAsCompleted} />
                <br />
            </div>
            {showNotification && <TodoAddedNotification setShow={setShowNotification} />}
        </div>
    );

}

export default App
