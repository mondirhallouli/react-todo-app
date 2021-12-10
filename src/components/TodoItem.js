import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../redux/features/todoSlice';

export default function TodoItem({ item, index }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(removeTodo(index))
  }

  return (
    <div className="todo-item">
      <span className="todo-content">{item}</span>
      <button className="todo-delete" onClick={handleDelete}>Done</button>
    </div>
  )
}
