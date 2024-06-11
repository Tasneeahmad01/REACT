import React from 'react';

function TodoCross({ onClick }) {
  return (
    <span className="cross-icon" onClick={onClick}>
      ✖
    </span>
  );
}

export default TodoCross;
