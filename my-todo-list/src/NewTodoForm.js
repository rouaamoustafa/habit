import React, { useState } from 'react';

function NewTodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === '') return; 
    onAddTodo({ 
      id: Date.now(), 
      text, 
      completed: false 
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTodoForm;