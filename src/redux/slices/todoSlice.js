import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodos, deleteTodos } = todoSlice.actions

export default todoSlice.reducer
