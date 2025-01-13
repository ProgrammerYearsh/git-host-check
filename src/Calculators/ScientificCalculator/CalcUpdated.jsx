import React, { useState } from 'react';
// import "./ScientificCalculator.css";

const CalcUpdated = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input.replace("^", "**"));
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const factorial = (num) => {
    if (num < 0) return "Error";
    if (num === 0) return 1;
    return num * factorial(num - 1);
  };

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
        case "nthRoot":
          const [base, n] = input.split(",").map(Number);
          result = Math.pow(base, 1 / n);
          break;
        case "exp":
          result = Math.exp(input);
          break;
        case "10^x":
          result = Math.pow(10, input);
          break;
        case "mod":
          const [a, b] = input.split(",").map(Number);
          result = a % b;
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
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {/* Number buttons */}
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
          <button key={num} onClick={() => handleButtonClick(num)}>
            {num}
          </button>
        ))}
        
        {/* Basic operations */}
        {["+", "-", "*", "/", "%", "(", ")", "^", "1/x"].map((op) => (
          <button key={op} onClick={() => handleButtonClick(op)}>
            {op}
          </button>
        ))}

        {/* Special functions */}
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
          { label: "Prime Factorization", func: "primeFactorization" },
        ].map(({ label, func }) => (
          <button key={func} onClick={() => handleSpecialFunction(func)}>
            {label}
          </button>
        ))}

        {/* Additional functionality */}
        <button onClick={clearInput}>AC</button>
        <button onClick={backspace}>Back</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default CalcUpdated;
