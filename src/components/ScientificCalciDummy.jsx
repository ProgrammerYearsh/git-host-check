import React from 'react'
import "./ScientificCalci.css";

function ScientificCalciDummy() {
  return (
    <div style={{background: '#fff'}} className="calculator-container ">
    <div style={{width: '100%'}} className="display">{""}</div>
    <div className=" grid grid-cols-3 gap-2 ">

      {[
        { label: "sin", func: "sin" },
        { label: "cos", func: "cos" },
        { label: "tan", func: "tan" },
        { label: "arcsin", func: "asin" },
        { label: "arccos", func: "acos" },
        { label: "arctan", func: "atan" },
        { label: "sinh", func: "sinh" },
        { label: "cosh", func: "cosh" },
        { label: "tanh", func: "tanh" },
        { label: "ln", func: "ln" },
        { label: "log10", func: "log10" },
        { label: "\u221a", func: "sqrt" },
        { label: "\u221b", func: "cubeRoot" },
        { label: "nthRoot", func: "nthRoot" },
        { label: "e^x", func: "exp" },
        { label: "10^x", func: "10^x" },
        { label: "mod", func: "mod" },
        { label: "n!", func: "factorial" },
        { label: "Prime ", func: "primeFactorization" },
      ].map(({ label, func }) => (
        <button className='no-hover   justify-center ' style={{}} key={func} >
          {label}
        </button>
      ))}

      {/* Additional functionality */}
      <button className='no-hover'>AC</button>
      <button className='no-hover'>Back</button>
      <button className='no-hover'>=</button>
    </div>
  </div>
  )
}

export default ScientificCalciDummy