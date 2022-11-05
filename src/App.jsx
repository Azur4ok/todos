import React from 'react'

import { Form } from './components/Form'
import { TodoList } from './components/TodoList/TodoList'

export const App = () => {
  return (
    <>
    <h1>TODO LIST</h1>
      <Form />
      <TodoList />
    </>
  )
}
