// Energy Converter Component
import React, { useState } from 'react';

const EnergyConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('J'); // Default input unit: Joule
  const [outputUnit, setOutputUnit] = useState('J'); // Default output unit: Joule
  const [outputValue, setOutputValue] = useState('');

  const energyUnits = {
    J: 1,
    KJ: 1000,
    'kWh': 3.6e6,
    'W*h': 3600,
    'cal': 4.184,
    'hp*h': 2.6845195376961728e6,
    'Btu': 1055.05585,
    GJ: 1e9,
    MJ: 1e6,
    mJ: 0.001,
    'µJ': 1e-6,
    nJ: 1e-9,
    aJ: 1e-18,
    MeV: 1.60218e-13,
    keV: 1.60218e-16,
    eV: 1.60218e-19,
    erg: 1e-7,
    'GW*h': 3.6e12,
    'MW*h': 3.6e9,
    'kW*s': 1000,
    'W*s': 1,
    'N*m': 1,
    'kcal (IT)': 4186.8,
    'kcal (th)': 4184,
    'cal (IT)': 4.1868,
    'cal (th)': 4.184,
    'MBtu (IT)': 1.05505585e9,
    'ton-hour (refrigeration)': 12660670.782,
    'fuel oil equivalent @kiloliter': 4.1868e10,
    'fuel oil equivalent @barrel (US)': 6.11809e9,
    Gton: 4.184e18,
    Mton: 4.184e15,
    kton: 4.184e12,
    'ton (explosives)': 4.184e9,
    'dyn*cm': 1e-7,
    'gf*m': 9.80665,
    'gf*cm': 0.0980665,
    'kp*m': 9.80665,
    'lbf*ft': 1.35582,
    'lbf*in': 0.1129848,
    'ozf*in': 0.0070615518,
    'ft*lbf': 1.35582,
    'in*lbf': 0.1129848,
    'in*ozf': 0.0070615518,
    'pdl*ft': 0.04214011,
    therm: 1.05506e8,
    'therm (EC)': 1.05506e8,
    'therm (US)': 1.0548e8,
    'Hartree energy': 4.3597447222071e-18,
    'Rydberg constant': 2.1798723611035e-18,
  };

  const convertEnergy = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setOutputValue('Invalid input');
      return;
    }

    const valueInJoules = value * (energyUnits[inputUnit] || 1); // Convert to Joules
    const result = valueInJoules / (energyUnits[outputUnit] || 1); // Convert to target unit

    setOutputValue(result.toFixed(6)); // Set output value with precision
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Energy Unit Converter</h2>
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
            {Object.keys(energyUnits).map((unit) => (
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
            {Object.keys(energyUnits).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={convertEnergy} style={{ marginBottom: '10px', padding: '5px 10px' }}>
        Convert
      </button>

      <div>
        <strong>Output Value:</strong> {outputValue} {outputUnit}
      </div>
    </div>
  );
};

export default EnergyConverter;