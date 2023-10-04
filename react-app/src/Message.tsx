import { useState } from "react";

function Calc() {
  const [number1, setNumber1] = useState(0); 
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  function updateTotal(newTotal) {
    setTotal(newTotal);
  }

  function addTotal() {
    updateTotal(number1 + number2);
  }

  function subtractTotal() {
    updateTotal(number1 - number2);
  }

  function multiplyTotal() {
    updateTotal(number1 * number2);
  }

  function divideTotal() {
   updateTotal(number1 / number2);
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="input-numbers">
        
        <input type="number" placeholder="" value={number1} onChange={(e) => setNumber1(+e.target.value)}/>
        
        <input type="number" placeholder="" value={number2} onChange={(e) => setNumber2(+e.target.value)}/>
      </div>
      <button onClick={addTotal}>Add</button>
      <button onClick={subtractTotal}>Subtract</button>
      <button onClick={multiplyTotal}>Multiply</button>
      <button onClick={divideTotal}>Divide</button>

      <h2>Total: {total}</h2>
    </div>
  );
}

export default Calc;