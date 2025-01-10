import React from 'react';

const TodoCreate = () => {
  return (
    <div className='todo-create'>
      <input className='todo-input' type='text' placeholder='Enter Your Todo' />
      <button className='todo-create-button'> Create </button>
    </div>
  );
};

export default TodoCreate;
