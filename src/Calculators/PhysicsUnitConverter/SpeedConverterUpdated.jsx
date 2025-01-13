// Speed Converter Component
import React, { useState } from 'react';

const SpeedConverterUpdated = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('m/s'); // Default input unit: meters/second
  const [outputUnit, setOutputUnit] = useState('m/s'); // Default output unit: meters/second
  const [outputValue, setOutputValue] = useState('');

//   const speedConversions = {
//     'm/s': 1,
//     'km/h': 0.277778,
//     'mi/h': 0.44704,
//     'm/h': 0.000277778,
//     'm/min': 0.0166667,
//     'km/min': 16.6667,
//     'km/s': 1000,
//     'cm/h': 2.77778e-6,
//     'cm/min': 0.000166667,
//     'cm/s': 0.01,
//     'mm/h': 2.77778e-7,
//     'mm/min': 1.66667e-5,
//     'mm/s': 0.001,
//     'ft/h': 0.0000846667,
//     'ft/min': 0.00508,
//     'ft/s': 0.3048,
//     'yd/h': 0.000254,
//     'yd/min': 0.01524,
//     'yd/s': 0.9144,
//     'mi/min': 26.8224,
//     'mi/s': 1609.34,
//     'kt': 0.514444,
//     'kt (UK)': 0.514774,
//     'light': 299792458,
//     'cosmic1': 7910,
//     'cosmic2': 11200,
//     'cosmic3': 16700,
//     'earth': 29780,
//     'sound_water': 1484,
//     'sound_seawater': 1496,
//     'mach_20c': 340.3,
//     'mach_si': 343,
//   };

const speedConversions = {
    'm/s': 1,
    'km/h': 3.6,
    'mi/h': 2.23694,
    'm/h': 3600,
    'm/min': 60,
    'km/min': 0.06,
    'km/s': 0.001,
    'cm/h': 360000,
    'cm/min': 6000,
    'cm/s': 100,
    'mm/h': 3600000,
    'mm/min': 60000,
    'mm/s': 1000,
    'ft/h': 11811.023622,
    'ft/min': 196.850394,
    'ft/s': 3.28084,
    'yd/h': 3937.007874,
    'yd/min': 65.616798,
    'yd/s': 1.093613,
    'mi/min': 0.0372823,
    'mi/s': 0.000621371,
    'kt': 1.94384,
    'kt (UK)': 1.942604,
    'light': 3.33564e-9, // Fraction of the speed of light
    'cosmic1': 7.91, // First cosmic velocity in km/s
    'cosmic2': 11.2, // Second cosmic velocity in km/s
    'cosmic3': 16.7, // Third cosmic velocity in km/s
    'earth': 29.78, // Earth's orbital velocity in km/s
    'sound_water': 1.484, // Speed of sound in pure water in km/s
    'sound_seawater': 1.496, // Speed of sound in seawater (20°C, 1 atm) in km/s
    'mach_20c': 0.001013, // Mach at 20°C, 1 atm in km/s
    'mach_si': 0.001225, // Mach (SI standard) in km/s
  };
  
  const convertSpeed = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setOutputValue('Invalid input');
      return;
    }

    // Convert input to meters/second (base unit)
    const valueInMetersPerSecond = value / speedConversions[inputUnit];

    // Convert from meters/second to the output unit
    const result = valueInMetersPerSecond * speedConversions[outputUnit];

    setOutputValue(result.toFixed(6)); // Set output value with precision
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Speed Unit Converter</h2>
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
            {Object.keys(speedConversions).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
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
            {Object.keys(speedConversions).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={convertSpeed} style={{ marginBottom: '10px', padding: '5px 10px' }}>
        Convert
      </button>

      <div>
        <strong>Output Value:</strong> {outputValue} {outputUnit}
      </div>
    </div>
  );
};

export default SpeedConverterUpdated;
