import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [card, setCard] = useState("");

  const validCard = (data) => {
    if (data.length < 10) return "false";
    let digit = data.split("").reverse();
    for (let i = 0; i < digit.length; i++) {
      if (i % 2 !== 0) {
        digit[i] *= 2;
      }
    }
    let luhmSum = digit
      .join("")
      .split("")
      .reduce((x, y) => x + parseInt(y), 0);
    if (luhmSum % 10 === 0) {
      return `Credit Card is Valid!`;
    } else {
      return `Credit Card is Invalid!`;
    }
  };
  useEffect(() => {
    setNumber(validCard(card));
  }, [card]);

  return (
    <div className="App">
      <h1>Luhn Algorithm</h1>
      <h2>Credit Card Check</h2>
      <input className="input" type="text" maxLength="16" value={card} onChange={(e)=>{
          setCard(e.target.value);
      }}>
      </input>
      <h3>{number}</h3>
    </div>
  );
}

export default App;
