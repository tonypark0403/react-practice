import React, { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue');
  }
  return (
    <>
      <Counter />
      <Counter />
      <button style={{ backgroundColor: color }} onClick={onClick}>
        like
      </button>
    </>
  );
}
