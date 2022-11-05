import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos } from '../../../redux/slices/todoSlice'

export const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    if (window.confirm('do you want to delete this task?')) {
      dispatch(deleteTodos(todo.id))
    }
  }

  return (
    <li>
      <input type="checkbox" dataiscompleted={`${todo.isCompleted}`} />
      <span>{todo.name}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  )
}
