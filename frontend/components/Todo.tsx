import React from 'react';

interface TodoProps {
  text: string;
  completed: boolean;
}

const TodoComponent : React.FC<TodoProps> = ({ text, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} readOnly />
      <span>{text}</span>
    </div>
  );
};

export default TodoComponent;
