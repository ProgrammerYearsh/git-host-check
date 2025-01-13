import React, { useEffect, useState } from "react";
import "./ScientificCalci.css";

const ScientificCalci = () => {
  const [input, setInput] = useState(0);
  const [displayValue, setDisplayValue]=useState(0); 
  const [performSpecialOperation, setPerformSpecialOperation]=useState(false)
  const [specialOperationType, setSpecialOperationType]=useState(null)
  const allowedKeys = new Set([ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  const oppAllowedKeys = new Set([ "/", "*", "-", "+"]);

// <-------------------- Taking inputs & Displaying Inputs & Making String for operation  -------------------->

// -------------------- Displaying Number Inputs 
const numberInputs = (inpVal) =>{
  if (performSpecialOperation) {
    setInput((prevInput) => prevInput + inpVal);
    setDisplayValue((prevInput) => {
      // If the previous input is empty, just set the new value
      if (!prevInput) return inpVal;
    
      // Split the input into all except the last digit and the last digit
      const allButLast = prevInput.slice(0, -1);
      const lastDigit = prevInput.slice(-1);
    
      // Insert the new value before the last digit and return the updated value
      return allButLast + inpVal + lastDigit;
    });
  }
  else {
    setInput((prevInput) => prevInput + inpVal);
    setDisplayValue((prevInput) => prevInput + inpVal);
  }

}

// -------------------- Displaying simple operations
const simpleOperationInputs = (inpVal) =>{
  if (performSpecialOperation) {
    return 
  }else {
    const operators = ["+", "-", "/", "*"];
    const lastChar = input.slice(-1); 
    if (inpVal === lastChar) {
      return
    }else if (operators.includes(lastChar)) {
      setInput((prevInput) =>{
        const newInp = prevInput.slice(0, -1)
        return newInp + inpVal
      });
      setDisplayValue((prevInput) =>{
        const newInp = prevInput.slice(0, -1)
        return newInp + inpVal
      });
    } else  {
      setInput((prevInput) => prevInput + inpVal);
      setDisplayValue((prevInput) => prevInput + inpVal);
    }

  }
}

// -------------------- Displaying Special Operations button pressed 
const specialOperationInputs = (label, func) =>{
  let result;
  switch (func) {
    case "sqrt":
      result = "\u221a()"
      break;
    case "cubeRoot":
      result = "\u221b()"
      break;
    case "exp":
      result ="e^()"
      break;
    case "10^x":
      result ="10^()"
      break;
    case "factorial":
      result ="n!()"
      break;
    case "primeFactorization":
      result ="Prime Factor of ()"
      break;
    default:
      result = label+'()';
  }
  let oppLabel = result
  setPerformSpecialOperation(true)
  setInput('')
  setDisplayValue(oppLabel)
  setSpecialOperationType(func)
}


  useEffect(() => {
    const handleKeyDown = (event) => {
      // For taking number inputs 
      if (allowedKeys.has(event.key)) {
        numberInputs(event.key);
      }  else if (oppAllowedKeys.has(event.key)){   // For taking simple operation inputs 
        simpleOperationInputs(event.key)
      } else if (event.key === "Enter") {  // for handing enter 
        event.preventDefault();
        setInput((prevInput) => {
          calculateResult(prevInput);
          return prevInput;
        });
      } else if (event.key === "Backspace") { 
        // alert('backSpaced pressed')
        event.preventDefault();   // for handling backspace 
        backspace()
      }  else if (event.key === "Escape") {    // For handling escape 
        clearInput()
      }  else if (event.key === "=") {   // For handling is equal to buttons 
        setInput((prevInput) => {
          calculateResult(prevInput);
          return prevInput;
        });
      }
    };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [performSpecialOperation, input]); 




// -------------------- Handling Backspace & clear opp  --------------------

const clearInput = () => {
  setInput("");
  setDisplayValue(''); 
  setPerformSpecialOperation(false)
};

const backspace = () => {
  if (performSpecialOperation) {
    if (input) {
      setDisplayValue((prevInput) => {
        // If the previous input is empty, just set the new value
        if (!prevInput) return ;
      
        // Split the input into all except the last digit and the last digit
        const allButLast = prevInput.slice(0, -2);
        const lastDigit = prevInput.slice(-1);
      
        // Insert the new value before the last digit and return the updated value
        return allButLast +  lastDigit;
      });
      setInput((prevInput) => prevInput.slice(0, -1));
    } else{
      clearInput()
    }
  }
  else{
    setInput((prevInput) => prevInput.slice(0, -1));
    setDisplayValue((prevInput) => prevInput.slice(0, -1));
  }
}; 

// -------------------- Performing Calculation  --------------------
const calculateResult = (inputValue) => {
  
  if (!performSpecialOperation) {
    let newInputVal
    const operators = ["+", "-", "/", "*"];
    const lastChar = inputValue.slice(-1)
    operators.includes(lastChar) ? newInputVal = inputValue.slice(0,-1) : newInputVal = inputValue
    try {
      const sanitizedInput = newInputVal.replace(/\b0+(\d)/g, "$1");
      const result = eval(sanitizedInput.replace("^", "**"));
      setInput(String(result));
      setDisplayValue(String(result))
    } catch (error) {
      // alert(error)
      setDisplayValue("Error");
      setInput('')
    }
  } else{
    handleSpecialFunction(specialOperationType)
  }
  
};









  // -------------------- Handling Special Operations   --------------------

    // -------------------- Calc Factorial 
  const factorial = (num) => {
    if (num < 0) return "Error";
    if (num === 0) return 1;
    return num * factorial(num - 1);
  };

    // -------------------- Calc Prime Factor
  const primeFactorization = (num) => {
    if (num < 2) return `${num} has no prime factors`;
    const factors = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }
    return factors.join(" x ");
  };

  // -------------------- Calc Scientific Operation 
  const handleSpecialFunction = (func) => {
    try {
      let result;
      switch (func) {
        case "sin":
          result = Math.sin(input);
          break;
        case "cos":
          result = Math.cos(input);
          break;
        case "tan":
          result = Math.tan(input);
          break;
        case "asin":
          result = Math.asin(input);
          break;
        case "acos":
          result = Math.acos(input);
          break;
        case "atan":
          result = Math.atan(input);
          break;
        case "sinh":
          result = Math.sinh(input);
          break;
        case "cosh":
          result = Math.cosh(input);
          break;
        case "tanh":
          result = Math.tanh(input);
          break;
        case "ln":
          result = Math.log(input);
          break;
        case "log10":
          result = Math.log10(input);
          break;
        case "sqrt":
          result = Math.sqrt(input);
          break;
        case "cubeRoot":
          result = Math.cbrt(input);
          break;
        case "exp":
          result = Math.exp(input);
          break;
        case "10^x":
          result = Math.pow(10, input);
          break;
        case "factorial":
          result = factorial(Number(input));
          break;
        case "primeFactorization":
          result = primeFactorization(Number(input));
          break;
        default:
          result = "Error";
      }
      setInput(String(result));
      setDisplayValue(String(result))
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={{ background: "#fff" }} className="calculator-container  ">
      <div className="w-full h-[50px] mb-[10px] p-[10px] text-right text-[1.5rem] border border-gray-300 rounded-[5px] bg-white text-[#111111] font-open-sans ">
        {displayValue || "0"}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 ">
        {/* Additional functionality */}
        <button className="font-black text-xl" onClick={clearInput}>
          AC
        </button>

        {/* Back button  */}
        <button
          className="flex items-center justify-center"
          onClick={backspace}
        >
          {" "}
          <svg
            className="w-8 m-0 p-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M576 64H205.3A64 64 0 0 0 160 82.8L9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3L160 429.3c12 12 28.3 18.8 45.3 18.8H576c35.4 0 64-28.7 64-64V128c0-35.4-28.7-64-64-64zm-84.7 254.1c6.3 6.3 6.3 16.4 0 22.6l-22.6 22.6c-6.3 6.3-16.4 6.3-22.6 0L384 301.3l-62.1 62.1c-6.3 6.3-16.4 6.3-22.6 0l-22.6-22.6c-6.3-6.3-6.3-16.4 0-22.6L338.8 256l-62.1-62.1c-6.3-6.3-6.3-16.4 0-22.6l22.6-22.6c6.3-6.3 16.4-6.3 22.6 0L384 210.8l62.1-62.1c6.3-6.3 16.4-6.3 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6L429.3 256l62.1 62.1z" />
          </svg>
        </button>

        {/* Special functions */}
        {[
          // Prime Factorization
          { label: "Prime Factor", func: "primeFactorization" },
          // Roots & Factorial
          { label: "\u221a", func: "sqrt" },
          { label: "\u221b", func: "cubeRoot" },
          { label: "n!", func: "factorial" },
          // Trigonometric functions
          { label: "sin", func: "sin" },
          { label: "cos", func: "cos" },
          { label: "tan", func: "tan" },
          { label: "arcsin", func: "asin" },
          { label: "arccos", func: "acos" },
          { label: "arctan", func: "atan" },
          { label: "sinh", func: "sinh" },
          { label: "cosh", func: "cosh" },
          { label: "tanh", func: "tanh" },
          // Advance Maths
          { label: "ln", func: "ln" },
          { label: "log", func: "log10" },
          { label: "e^x", func: "exp" },
          { label: "10^x", func: "10^x" },

          // { label: "nthRoot", func: "nthRoot" },
          // { label: "mod", func: "mod" },
        ].map(({ label, func }) => (
          <button
            className=""
            key={func}
            onClick={() => specialOperationInputs(label, func)}
          >
            {label}
          </button>
        ))}

        {/* Number buttons */}
        {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
          <button key={num} onClick={() => numberInputs(num)}>
            {num}
          </button>
        ))}

        {/* Basic Maths Operation  */}
        {["+", "-", "*", "/", "^"].map((op) => (
          <button key={op} onClick={() => simpleOperationInputs(op)}>
            {op}
          </button>
        ))}

        <button className="min-w-[100%]" onClick={()=>calculateResult(input)}>
          Result
        </button>
      </div>
    </div>
  );
};

export default ScientificCalci;
