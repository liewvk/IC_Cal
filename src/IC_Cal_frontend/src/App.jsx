import React, { useState } from "react";


const App = () => {
  const [result, setResult] = useState(null);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(null);

  const handleCalculate = async (operation) => {
    setError(null);

    try {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);

      if (isNaN(num1) || isNaN(num2)) {
        setError("Please enter valid numbers.");
        return;
      }

      // Call the backend canister methods (mocked here for illustration)
      let res;
      switch (operation) {
        case "add":
          res = num1 + num2; // Replace with backend call
          break;
        case "subtract":
          res = num1 - num2; // Replace with backend call
          break;
        case "multiply":
          res = num1 * num2; // Replace with backend call
          break;
        case "divide":
          if (num2 === 0) {
            setError("Cannot divide by zero.");
            return;
          }
          res = num1 / num2; // Replace with backend call
          break;
        default:
          setError("Invalid operation.");
          return;
      }
      setResult(res);
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>IC Calculator</h1>
      </header>
      <main>
        <div className="container">
          <div className="card">
            <h2>Simple Calculator</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Enter first number"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter second number"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </form>
            <div className="buttons">
              <button onClick={() => handleCalculate("add")}>Add</button>
              <button onClick={() => handleCalculate("subtract")}>
                Subtract
              </button>
              <button onClick={() => handleCalculate("multiply")}>
                Multiply
              </button>
              <button onClick={() => handleCalculate("divide")}>Divide</button>
            </div>
            {error && <p className="error">{error}</p>}
            {result !== null && <p className="result">Result: {result}</p>}
          </div>
        </div>
      </main>
      <footer>
        <p>
          Powered by <a href="https://dfinity.org">Internet Computer</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
