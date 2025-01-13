import React, { useState } from 'react';

const ExponentialLogFunctions = () => {
  const [value, setValue] = useState('');
  const [power, setPower] = useState('');
  const [result, setResult] = useState('');

  const calculate = (type) => {
    let res = 0;
    switch (type) {
      case 'exp': res = Math.exp(Number(value)); break;
      case 'ln': res = Math.log(Number(value)); break;
      case 'log10': res = Math.log10(Number(value)); break;
      case 'sqrt': res = Math.sqrt(Number(value)); break;
      case 'cbrt': res = Math.cbrt(Number(value)); break;
      case 'nthRoot': res = Math.pow(Number(value), 1 / Number(power)); break;
      case 'power': res = Math.pow(Number(value), Number(power)); break;
      case 'antilog10': res = Math.pow(10, Number(value)); break;
      default: res = 'Invalid';
    }
    setResult(res);
  };

  return (
    <div>
      <h2>Exponential and Logarithmic Functions</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter power/root (optional)"
        value={power}
        onChange={(e) => setPower(e.target.value)}
      />
      <button onClick={() => calculate('exp')}>eˣ</button>
      <button onClick={() => calculate('ln')}>ln</button>
      <button onClick={() => calculate('log10')}>log₁₀</button>
      <button onClick={() => calculate('sqrt')}>√</button>
      <button onClick={() => calculate('cbrt')}>³√</button>
      <button onClick={() => calculate('nthRoot')}>nth Root</button>
      <button onClick={() => calculate('power')}>xⁿ</button>
      <button onClick={() => calculate('antilog10')}>10ˣ</button>
      <p className='text-black'>Result: {result}</p>
    </div>
  );
};

export default ExponentialLogFunctions;
