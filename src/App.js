import './App.css';
import { useStore, actions } from './store';
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  const useRefTodoInput = useRef()
  const [editMode, setEditMode] = useState(false)
  const [indexEditing, setIndexEditing] = useState(0);

  const handleSubmit = () => {
    if (todoInput.trim()) {
      // check if edit or add todo
      editMode
        ? dispatch(actions.editTodo(indexEditing))
        : dispatch(actions.addTodo(todoInput))
      // clear input box
      dispatch(actions.setTodoInput(''))
      // set focus to input box
      useRefTodoInput.current.focus()
      // set Edit mode to false
      setEditMode(false)
    }
  }
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
  }
  const handleEdit = (index) => {
    dispatch(actions.setTodoInput(todos[index]))
    useRefTodoInput.current.focus()
    console.log('Selected Index: ', index)
    setEditMode(true)
    setIndexEditing(index)
  }
  console.log('editing', indexEditing)

  return (
    <div>
      <input ref={useRefTodoInput}
        value={todoInput}
        placeholder="Enter to do..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>{editMode ? "update" : "add"}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span
              style={{ color: 'red' }}
              onClick={() => handleDelete(index)}
            > [Delete]
            </span>
            <span
              style={{ color: 'blue' }}
              onClick={() => handleEdit(index)}
            > [Edit]
            </span>
          </li>

        ))}
      </ul>
    </div>
  );
}

export default App;
