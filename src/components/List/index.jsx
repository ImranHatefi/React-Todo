import React from 'react'

function List({todos,setTodos}) {
  const handleDelete = (id)=>{
setTodos(todos.filter(item=>item.id !== id))
  }
  
  return (
    <div>
        {
            todos.map(todo=>{
                return(
                  <p key={todo.id}>{todo.title} <span onClick={()=>handleDelete(todo.id)}>Delete</span></p>
                )
            })
        }
    </div>
  )
}

export default List