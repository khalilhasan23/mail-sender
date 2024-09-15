"use client"

import React, { useEffect, useState } from 'react';
// import TodoComponent  from '../../components/Todo';
import { createTodo, getTodos } from '../../services/todoService';
import { Todo } from '../../types/todo';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const data = await getTodos(token);
        setTodos(data);
      }
    };

    fetchTodos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      const newTodo = await createTodo(text, token);
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <h1>ok</h1>
      </div>
    </div>
  );
};

export default Todos;
