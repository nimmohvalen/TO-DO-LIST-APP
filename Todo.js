import React, { useState } from 'react'

function Todo({ text, todos, setTodos, todo }) {
    const [className, setClassName] = useState('');

    const deleteHandle = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

        const completeHandle = () => {
            setTodos(todos.map((item) => {
                if (item.id === todo.id) {
                    setClassName('completed')
                    return {
                        ...item, completed: !item.completed
                    }
                }
                 return item;
            }))
        };

    return (
        <div className="todo">

            <li className={`todo-item ${className}`}> {text}</li>
            <button onClick={completeHandle} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>

            <button onClick={deleteHandle} className="delete-btn">
                <i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;
