import React, { useState } from 'react';
import '../App.css';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build a project', 'Master React']);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="TodoContainer">
      <h2 className="Title">Lista de Tarefas</h2>
      <form className="Form" onSubmit={handleAddTodo}>
        <input
          className="Input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <button className="Button" type="submit">Adicionar</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} task={todo} onDelete={() => handleDeleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
