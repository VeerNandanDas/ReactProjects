/* eslint-disable no-unused-vars */

import { useContext,createContext } from "react";

export  const todoContext = createContext({
    todos : [
        
        {
            id:1,
            todo:"Buy milk",
            completed:false,
        }
    ], 

    
    addTodo : (todo)=>{},
    
    deleteTodo : (id) => {},
    
    updateTodo : (id,todo) =>{},
    
    toggleCompleted: (id) => {}
});

export const useTodo = () => {
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;