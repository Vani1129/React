import { useState } from 'react';
import './App.css';

function App() {
  // Initialize counter state with a value of 10
  let [counter, setCounter] = useState(10);

  // Function to increase counter, ensuring it doesn't exceed 20
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  // Function to decrease counter, ensuring it doesn't go below 0
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>React Counter Application</h1>
      </header>

      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Sidebar Menu</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </aside>

        {/* Main Section */}
        <section className="counter-section">
          <h2>Counter</h2>
          <h3>Value: {counter}</h3>

          {/* Add and Remove buttons */}
          <button onClick={addValue} disabled={counter === 20}>
            Add value
          </button>
          <br />
          <button onClick={removeValue} disabled={counter === 0}>
            Remove value
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Footer Content - Current Value: {counter}</p>
      </footer>
    </div>
  );
}

export default App;
