/* eslint-disable no-unused-vars */
 import {createSlice , nanoid } from '@reduxjs/toolkit'

 const initialState = {
    todo : [],
 }

 export const todoSlice = ({
    name : 'todo' ,
    initialState,
    reducers : {
        addTodo :(state,action) => {
            const todo = {
                id : nanoid(),
                title : action.payload,
                completed : false,
            }
            state.todos.push(todo);
        },

        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        }
    }
 })


 export const { addTodo , removeTodo } = todoSlice.actions;

 export default todoSlice.reducers; 