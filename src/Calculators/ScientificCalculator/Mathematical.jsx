import React, { useState } from 'react';

const AdvanceMaths = () => {
  const [value, setValue] = useState('');
  const [mod1, setMod1] = useState('');
  const [mod2, setMod2] = useState('');
  const [result, setResult] = useState('');

  const factorial = (n) => {
    if (n < 0) return 'Invalid input';
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  const primeFactors = (n) => {
    const factors = [];
    for (let i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    return factors;
  };

  const calculate = (type) => {
    let res = 0;
    switch (type) {
      case 'factorial': res = factorial(Number(value)); break;
      case 'mod': res = Number(mod1) % Number(mod2); break;
      case 'prime': res = primeFactors(Number(value)).join(', '); break;
      default: res = 'Invalid';
    }
    setResult(res);
  };

  return (
    <div>
      <h2>Advanced Functions</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => calculate('factorial')}>Factorial</button>
      <button onClick={() => calculate('prime')}>Prime Factorization</button>
      <input
        type="number"
        placeholder="Enter dividend"
        value={mod1}
        onChange={(e) => setMod1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter divisor"
        value={mod2}
        onChange={(e) => setMod2(e.target.value)}
      />
      <button onClick={() => calculate('mod')}>Mod</button>
      <p className='text-black'>Result: {result}</p>
    </div>
  );
};

export default AdvanceMaths;
