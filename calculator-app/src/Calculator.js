import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "/", "*", "+", "-", "DEL",
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "0", ".", "="
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, i) => {
          if (btn === "DEL") {
            return <button key={i} onClick={handleDelete} className="del">{btn}</button>;
          }
          if (btn === "=") {
            return <button key={i} onClick={calculate} className="equals">{btn}</button>;
          }
          return (
            <button
              key={i}
              onClick={() => btn === "C" ? handleClear() : handleClick(btn)}
              className={["/", "*", "+", "-"].includes(btn) ? "operator" : ""}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calculator;
