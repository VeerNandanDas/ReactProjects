/* eslint-disable no-unused-vars */

import { useDispatch  , useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

function Todos() {
   const todos =  useSelector(state => state.todos)
    const dispatch = useDispatch();

  return (
    <div>Todos</div>
    {todos.map((todos) => {
        <li></li>
    })}
    
  )
}

export default Todos