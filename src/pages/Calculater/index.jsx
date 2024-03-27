import React, { useState } from "react";
import "./styles/index.css";
const Index = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [expression, setExpression] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(expression);
        setDisplayValue(result);
        setExpression("");
        setPreviousValue("");
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "C") {
      setDisplayValue("");
      setExpression("");
      setPreviousValue("");
    } else if (expression === "") {
      setPreviousValue(displayValue + value);
      setDisplayValue(displayValue + value);
      setExpression(displayValue + value);
    } else {
      setDisplayValue(displayValue + value);
      setExpression(expression + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" className="display" value={displayValue} disabled />
        <div className="buttons">
          {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, "C", "=", "/"].map(
            (value, index) => (
              <button key={index} onClick={() => handleButtonClick(value)}>
                {value}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
