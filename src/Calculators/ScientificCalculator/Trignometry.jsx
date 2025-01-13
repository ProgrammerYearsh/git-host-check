import React, { useState } from 'react';

const TrigonometricFunctions = () => {
  const [angle, setAngle] = useState('');
  const [result, setResult] = useState('');

  const calculate = (type) => {
    const radian = (Number(angle) * Math.PI) / 180; // Convert degrees to radians
    let res = 0;
    switch (type) {
      case 'sin': res = Math.sin(radian); break;
      case 'cos': res = Math.cos(radian); break;
      case 'tan': res = Math.tan(radian); break;
      case 'arcsin': res = Math.asin(Number(angle)); break;
      case 'arccos': res = Math.acos(Number(angle)); break;
      case 'arctan': res = Math.atan(Number(angle)); break;
      case 'sinh': res = (Math.exp(radian) - Math.exp(-radian)) / 2; break;
      case 'cosh': res = (Math.exp(radian) + Math.exp(-radian)) / 2; break;
      case 'tanh': res = Math.tanh(radian); break;
      default: res = 'Invalid';
    }
    setResult(res);
  };

  return (
    <div>
      <h2>Trigonometric Functions</h2>
      <input
        type="number"
        placeholder="Enter angle (degrees)"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
      />
      <button onClick={() => calculate('sin')}>sin</button>
      <button onClick={() => calculate('cos')}>cos</button>
      <button onClick={() => calculate('tan')}>tan</button>
      <button onClick={() => calculate('arcsin')}>arcsin</button>
      <button onClick={() => calculate('arccos')}>arccos</button>
      <button onClick={() => calculate('arctan')}>arctan</button>
      <button onClick={() => calculate('sinh')}>sinh</button>
      <button onClick={() => calculate('cosh')}>cosh</button>
      <button onClick={() => calculate('tanh')}>tanh</button>
      <p className='text-black'>Result: {result}</p>
    </div>
  );
};

export default TrigonometricFunctions;
