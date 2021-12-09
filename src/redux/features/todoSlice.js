import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: []
  },
  reducers: {
    addTodo(state, action) {
      if(action.payload === "") return
      state.todosList.unshift(action.payload)
    },
    removeTodo(state, action) {
      state.todosList.splice(Number(action.payload), 1)
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer