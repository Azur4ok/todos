import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import React from 'react'

import { addTodos } from '../redux/slices/todoSlice'

export const Form = () => {
  const [todos, setTodos] = React.useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTodos(e.target.value)
  }

  const handleClick = () => {
    if (!todos) {
      return alert('enter a todos')
    }

    createTodos(todos)
  }

  const createTodos = (name) => {
    const id = nanoid()
    const newTodo = {
      id,
      name,
      isCompleted: false,
    }

    dispatch(addTodos(newTodo))
    setTodos('')
  }

  return (
    <>
      <input value={todos} onChange={handleChange} />
      <button onClick={handleClick}>add</button>
    </>
  )
}
