import React, { useState } from 'react';

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';
import Indicators from './components/Indicators';
import TodoAddedNotification from './components/TodoAddedNotification';

const App = () => {
    const [todos, setTodos] = useState(() => {
        const localStorageTodos = JSON.parse(localStorage.getItem('todos'))
        return localStorageTodos || []
    })

    const [showNotification, setShowNotification] = useState(false)

    const saveTodos = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }


    /**
     * 
     * @param {string} name 
     */
    const addTodo = (name) => {
        const id = todos.length ? (todos[todos.length - 1].id + 1) : 1
        const newTodos = [...todos, { id, name, completed: false }]
        setTodos(newTodos)
        saveTodos(newTodos)
        setShowNotification(true)
    }


    /**
     * 
     * @param {number | string} id 
     */
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
        saveTodos(newTodos)
    }


    /**
     * 
     * @param {number | string} id 
     */
    const markTodoAsCompleted = (id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos([...newTodos])
        saveTodos(newTodos)
    }

    /**
     * 
     * @returns {{
     *    id: number | string,
     *    name: string,
     *    completed: boolean
     * }}
     */
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
