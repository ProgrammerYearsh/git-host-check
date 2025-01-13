import React, { useState } from 'react';

const PowerRoots = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const calculate = (type) => {
    let res = 0;
    switch (type) {
      case 'square': res = Math.pow(Number(value), 2); break;
      case 'cube': res = Math.pow(Number(value), 3); break;
      case 'sqrt': res = Math.sqrt(Number(value)); break;
      case 'cbrt': res = Math.cbrt(Number(value)); break;
      default: res = 'Invalid';
    }
    setResult(res);
  };

  return (
    <div>
      <h2>Power and Roots</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => calculate('square')}>Square</button>
      <button onClick={() => calculate('cube')}>Cube</button>
      <button onClick={() => calculate('sqrt')}>Square Root</button>
      <button onClick={() => calculate('cbrt')}>Cube Root</button>
      <p className='text-black'>Result: {result}</p>
    </div>
  );
};

export default PowerRoots;
