import React from 'react';
import '../App.css';

function TodoItem({ task, onDelete }) {
  return (
    <li className="ListItem">
      {task} <button className="DeleteButton" onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
