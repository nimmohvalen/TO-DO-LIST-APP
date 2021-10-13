import React from 'react';
import TodoList from './TodoList';



function Form({ setInput, input, setTodos, todos }) {


    //prevents browser from refreshing when button is clicked.
    const handleSubmit = e => {
        e.preventDefault();

        //todo function begins here
        setTodos([
            ...todos, { text: input, completed: false, id: Math.random() * 1000 } //These are the properties of a to do list. Use console to check the properties.
        ]);
        //Resetting input text after updating.
        setInput("")
    };

    //tells the browser what information is being passed/typed in the Input box 
    const inputText = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    };
    return (
        <form
            className="form"
            onSubmit={handleSubmit} >
            <h1>What's Happening today?</h1>
            <input className="TodoInput"
                onChange={inputText}
                type="text"
                placeholder="Start typing here"
                value={input}>
                    
            </input>

            <button className="inputBtn" >+</button>
            <TodoList
                setTodos={setTodos}
                todos={todos}
            />
        </form>

    )
}

export default Form;
