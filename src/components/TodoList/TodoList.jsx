import React from 'react'
import { useSelector } from 'react-redux'
import { TodoListItem } from './TodoListItem/TodoListItem'

export const TodoList = () => {
  const todos = useSelector((state) => state.todos)

  return <ul>{todos && todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}</ul>
}
