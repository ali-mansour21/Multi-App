import React, { useState, useEffect } from "react";
import "./styles/index.css";
import Header from "../../components/Header.jsx";

const Index = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [expression, setExpression] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      evaluateExpression();
    } else if (value === "c") {
      clearCalculator();
    } else {
      if (displayValue === "0") {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
      setExpression(expression + value);
    }
  };

  const evaluateExpression = () => {
    try {
      const result = eval(expression);
      setDisplayValue(result.toString());
      setExpression("");
      setPreviousValue("");
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const clearCalculator = () => {
    setDisplayValue("0");
    setExpression("");
    setPreviousValue("");
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    const validKeys = /[0-9+\-*/.=]|c|Backspace|Enter/;

    if ((key.length === 1 && validKeys.test(key)) || !/^[Ff]\d+$/.test(key)) {
      if (key === "=" || key === "Enter") {
        evaluateExpression();
      } else if (key === "c" || key === "Backspace") {
        clearCalculator();
      } else {
        if (displayValue === "0") {
          setDisplayValue(key);
        } else {
          setDisplayValue(displayValue + key);
        }
        setExpression(expression + key);
      }
    } else {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="calculator">
          <input
            type="text"
            className="display"
            value={displayValue}
            disabled
          />
          <div className="buttons">
            {[
              "7",
              "8",
              "9",
              "+",
              "4",
              "5",
              "6",
              "-",
              "1",
              "2",
              "3",
              "*",
              "0",
              "c",
              "=",
              "/",
            ].map((value, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(value)}
                onKeyDown={(e) => e.preventDefault()}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
