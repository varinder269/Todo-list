import React from 'react'

export const TodoItem = ({todo, onDelete}) => {  // export default const : then we need dont need to write {footer} like this.
    
    return (
        <>
        <div>
            
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            
        </div>
        <hr/>
        </>
    )
}
