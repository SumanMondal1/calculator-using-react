import "./App.css";
import { useState } from "react";

const operations = ["/", "+", "-", "*"];
function App() {
  const [val, setVal] = useState("");

  const updateVal = (x) => {
    let lastEl = val[val.length - 1];
    console.log(lastEl);
    if (operations.includes(lastEl) && operations.includes(x)) {
      console.log("true");
    } else {
      setVal((prevVal) => prevVal.concat(x));
    }
  };

  const findVal = () => {
    setVal(String(eval(val)));
  };

  const clearVal = () => {
    setVal("");
  };

  return (
    <div className="App">
      <input readOnly value={val} className="textfield" />
      <div className="boxes">
        <button onClick={() => updateVal("7")}>7</button>
        <button onClick={() => updateVal("8")}>8</button>
        <button onClick={() => updateVal("9")}>9</button>
        <button onClick={() => updateVal("/")}>/</button>
      </div>
      <div className="boxes">
        <button onClick={() => updateVal("4")}>4</button>
        <button onClick={() => updateVal("5")}>5</button>
        <button onClick={() => updateVal("6")}>6</button>
        <button onClick={() => updateVal("*")}>x</button>
      </div>
      <div className="boxes">
        <button onClick={() => updateVal("1")}>1</button>
        <button onClick={() => updateVal("2")}>2</button>
        <button onClick={() => updateVal("3")}>3</button>
        <button onClick={() => updateVal("-")}>-</button>
      </div>
      <div className="boxes">
        <button onClick={() => updateVal("0")}>0</button>
        <button onClick={() => updateVal(".")}>.</button>
        <button onClick={findVal}>=</button>
        <button onClick={() => updateVal("+")}>+</button>
      </div>
      <div className="boxes">
        <button onClick={clearVal}>C</button>
      </div>
    </div>
  );
}

export default App;