import React, { useState } from 'react';

import Form from './Form';
import TodosList from './TodosList';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
          <div className='header'>
            <h1>Todos List</h1>
          </div>   
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodosList 
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
