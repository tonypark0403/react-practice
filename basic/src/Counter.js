import React, { useState } from 'react';
import Title from './Title';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  function onClick() {
    setCount(count + 1);
  }
  function onClick2() {
    setCount(count2 + 1);
  }
  return (
    <div>
      <Title title={`Current count is ${count}`} />
      <button onClick={onClick}>Increase</button>
      <button onClick={onClick2}>Increase2</button>
    </div>
  );
}
