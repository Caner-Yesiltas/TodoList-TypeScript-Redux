import React, { useState } from 'react';
import type { AppDispatch } from '../redux/store';

import { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const TodoCreate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert('Enter Your Missinon');
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo,
    };

    dispatch(createTodo(payload));
    setNewTodo('');
  };

  return (
    <div className='todo-create'>
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className='todo-input'
        type='text'
        placeholder='Enter your space mission 🛰️🚀'
      />
      <button onClick={handleCreateTodo} className='todo-create-button'>
        {' '}
        Create{' '}
      </button>
    </div>
  );
};

export default TodoCreate;
