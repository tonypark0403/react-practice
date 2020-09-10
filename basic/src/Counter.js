import React, { useState } from 'react';
import Title from './Title';

export default function Counter() {
  const [count, setCount] = useState({ value: 0 });
  function onClick() {
    // count.value += 1;
    // setCount(count);
    setCount({ ...count, value: count.value + 1 });
  }
  return (
    <div>
      <Title title={`Current count is ${count.value}`} />
      <button onClick={onClick}>Increase</button>
    </div>
  );
}
