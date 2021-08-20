import React, { useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    name: PropTypes.string,
    deleteTodo: PropTypes.func,
    markTodoAsCompleted: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

const Todo = ({
    id,
    name,
    deleteTodo,
    markTodoAsCompleted
}) => {
    const [completed, setCompleted] = useState(false)

    const markCurrentAsCompleted = () => {
        markTodoAsCompleted(id)
        setCompleted(!completed)
    }


    const done = completed ? (<del>{name}</del>) : name

    return (

        <li className="list-group-item">

            <div className="row">

                <div className="col-1 col-lg-1">
                    <label className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                        <input type="checkbox" checked={completed} className="custom-control-input" onChange={markCurrentAsCompleted} />
                        <span className="custom-control-indicator"></span>
                    </label>
                    <div className="contaner">

                    </div>
                </div>

                <div className="col-6 col-lg-6">
                    {done}
                </div>

                <div className="col-4 col-lg-5 d-flex justify-content-end">
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteTodo(id)}>Delete</button>
                </div>
            </div>
        </li>
    );
}

Todo.propTypes = propTypes
export default Todo
