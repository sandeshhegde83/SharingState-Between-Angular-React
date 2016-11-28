import React from 'react'
import Todo from './todo'

const TodoList = ({ todos }) => (
  <ol>
    {todos.map(todo =>
      <Todo
        text = {todo.text}
      />
    )}
  </ol>
)

export default TodoList;
