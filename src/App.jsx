import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoCross from './TodoCross';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <>
      <div className='main_div'>
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder='Add an Item'
            value={inputValue}
            onChange={itemEvent}
          />
          <button onClick={addItem}> + </button>
          <ol>
            {items.map((item, index) => (
              <div key={index} className="todo-item">
                <TodoCross onClick={() => removeItem(index)} />
                <TodoList text={item} />
              </div>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
