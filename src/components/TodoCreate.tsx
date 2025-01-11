import React from 'react';

const TodoCreate = () => {
  return (
    <div className='todo-create'>
      <input
        className='todo-input'
        type='text'
        placeholder='Enter your space mission 🛰️🚀'
      />
      <button className='todo-create-button'> Create </button>
    </div>
  );
};

export default TodoCreate;
