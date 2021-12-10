import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/features/todoSlice';
import TodoItem from './TodoItem';
import { v4 as uuid } from 'uuid';

export default function Create() {
  const [createInputVal, setCreateInputVal] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  // const [isDone, setIsDone] = useState(false);
  const todos = useSelector(state => state.todos.todosList);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(createInputVal.trim()));
    setCreateInputVal("");
    setIsEmpty(false);
  }

  return (
    <div className="create-wrapper">

      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-text"
          value={createInputVal}
          onChange={(e) => setCreateInputVal(e.target.value)} placeholder="Enter todo"
        />

        <button
          type="submit"
          className="form-button">
          Add Todo
        </button>
      </form>

      <div className="items-wrapper">
        {isEmpty && <p className='empty-msg'>Create some todos...</p>}
        {todos && todos.map((todo, i) => <TodoItem item={todo} index={i} key={uuid()} />)}
      </div>
    </div>
  )
}
