import React from 'react';
import Todo from './Todo';



function TodoList({todos,setTodos}) {
    return (
        //use maping method to have a number of unlimted todo lists on the UL
        <div className ="container">
            <ul className="todo-list">
                
                
               {todos.map((todo)=> (
                   
               //use properties here to pass innformation on the todos for each list such as text, id. Check console to see more info.
                      <Todo 
                      todos={todos}
                      setTodos={setTodos}
                      key={todo.id}
                      todo={todo}
                      text={todo.text}/>   
               )
                )} 
            </ul>
        </div>
    )
}

export default TodoList;
