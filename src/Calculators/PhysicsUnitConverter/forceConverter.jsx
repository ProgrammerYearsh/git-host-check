// Force Converter Component
import React, { useState } from 'react';

const ForceConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('N'); // Default input unit: Newtons
  const [outputUnit, setOutputUnit] = useState('N'); // Default output unit: Newtons
  const [outputValue, setOutputValue] = useState('');

  const convertForce = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setOutputValue('Invalid input');
      return;
    }

    let result;

    // Conversion factors to Newtons (N)
    const conversionToNewtons = {
      N: 1,
      kN: 1000,
      gf: 0.00980665,
      kgf: 9.80665,
      tf: 9806.65,
      EN: 1e18,
      PT: 1e15,
      TN: 1e12,
      GN: 1e9,
      MN: 1e6,
      hN: 100,
      daN: 10,
      dN: 0.1,
      CN: 0.01,
      mN: 0.001,
      UN: 1e-6,
      NN: 1e-9,
      PN: 1e-12,
      fN: 1e-15,
      aN: 1e-18,
      dyn: 1e-5,
      'J/m': 1,
      'J/cm': 100,
      'tonf (short)': 8896.443,
      'tonf (UK)': 9964.016,
      kipf: 4448.22,
      lbf: 4.44822,
      ozf: 0.2780139,
      pdl: 0.138255,
      'pound ft/s²': 0.138255,
      p: 0.00980665,
      kp: 9.80665,
    };

    // Convert input to Newtons (N)
    const valueInNewtons = value * (conversionToNewtons[inputUnit] || 0);

    // Convert Newtons (N) to the output unit
    result = valueInNewtons / (conversionToNewtons[outputUnit] || 1);

    setOutputValue(result.toFixed(6)); // Set output value with precision
  };

  const units = [
    'N', 'kN', 'gf', 'kgf', 'tf', 'EN', 'PT', 'TN', 'GN', 'MN', 'hN', 'daN', 'dN',
    'CN', 'mN', 'UN', 'NN', 'PN', 'fN', 'aN', 'dyn', 'J/m', 'J/cm', 'tonf (short)',
    'tonf (UK)', 'kipf', 'lbf', 'ozf', 'pdl', 'pound ft/s²', 'p', 'kp'
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Force Unit Converter</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Input Value:
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          From:
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          To:
          <select
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={convertForce} style={{ marginBottom: '10px', padding: '5px 10px' }}>
        Convert
      </button>

      <div>
        <strong>Output Value:</strong> {outputValue} {outputUnit}
      </div>
    </div>
  );
};

export default ForceConverter;
