import { useState } from 'react';

import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex] = inputValue;
        setTodos(newTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setEditIndex(null);
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <>
      <div className="container">
        <p className="title">TODO LIST</p>
        <div className="inputdiv">
          <input
            type="text"
            className="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTodo} className="inputbutton">
            {editIndex !== null ? <MdEdit /> : <IoMdAdd />}
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <div className="buttoncontainer">
                <button onClick={() => removeTodo(index)} className="button"><MdDelete /></button>
                <button onClick={() => editTodo(index)} className="button"><MdEdit /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
