import React, { useState } from "react";
import * as math from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [isDegree, setIsDegree] = useState(true);

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "Back") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        let expression = input;
        // Handle degree-radian conversion for trigonometric functions
        if (isDegree) {
          expression = expression.replace(
            /(sin|cos|tan|arcsin|arccos|arctan)\((.*?)\)/g,
            (match, func, angle) => `math.${func}(math.unit(${angle}, "deg"))`
          );
        }
        const result = math.evaluate(expression);
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ["sin", "cos", "tan", "\u03C0", "e"],
    ["sin⁻¹", "cos⁻¹", "tan⁻¹", "x^y", "x³"],
    ["\u221A", "\u221B\u221A", "log", "ln", "e^x"],
    ["n!", "%", "mod", "(", ")"],
    ["7", "8", "9", "/", "Back"],
    ["4", "5", "6", "*", "Ans"],
    ["1", "2", "3", "-", "AC"],
    ["0", ".", "EXP", "+", "="]
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        readOnly
        className="calculator-display"
      />
      <div className="degree-toggle">
        <label>
          <input
            type="radio"
            name="mode"
            checked={isDegree}
            onChange={() => setIsDegree(true)}
          />
          Deg
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            checked={!isDegree}
            onChange={() => setIsDegree(false)}
          />
          Rad
        </label>
      </div>
      <div className="calculator-buttons">
        {buttons.flat().map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn)}
            className="calculator-button"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;