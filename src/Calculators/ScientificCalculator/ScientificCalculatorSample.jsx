import React from 'react'

import CalcUpdated from './CalcUpdated'
import CompleteCalc from './CompleteCalc'
// import Calculator from './Merged'
import AdvanceMaths from './Mathematical'
import PowerRoots from './Power&Roots'
import ExponentialLogFunctions from './ExponentialLog'
import TrigonometricFunctions from './Trignometry'

function ScientificCalculatorSample() {
  return (
    <>
    <h1>
        Scientific Calculation
    </h1>
    <TrigonometricFunctions/>
    <ExponentialLogFunctions/>
    <PowerRoots/>
    <AdvanceMaths/>
    {/* <Calculator/> */}
    {/* <CompleteCalc/> */}
    {/* <CalcUpdated/> */}
    </>
  )
}

export default ScientificCalculatorSample