import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  function onAdd() {}
  function onDelete() {}
  function onSaveToServer() {}
  return (
    <div>
      <h3>Todo List</h3>
      <ul></ul>
      <input type='text' value={''} onChange={(e) => {}} />
      <button onClick={onAdd}>Add</button>
      <button onClick={onSaveToServer}>Save</button>
    </div>
  );
}

export default App;
