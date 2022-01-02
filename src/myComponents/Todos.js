import React from 'react';
import {TodoItem} from "../myComponents/TodoItem";

export const Todos = (props) => {
    let mystyle={
        minheight:"70vh",
        margin: "40px auto"
    }

    return (
        <div className='container py-3' style ={mystyle}>
            <h3 class="my-3">Todos list</h3>

            {props.todos.length===0? "no todos to displa":
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (
                    <>
                    
                    <TodoItem todo={todo} key = {todo.sno} onDelete ={props.onDelete}/> <hr/>
                    </>
                    )

            })}
            
            
        </div>
    )
}

