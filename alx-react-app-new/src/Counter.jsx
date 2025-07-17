// src/components/Counter.jsx

// Import the useState hook from React.
// This hook allows functional components to manage and update state.
import { useState } from 'react';

// Define the Counter functional component.
function Counter() {
  // 1. Initialize State using useState:
  // useState returns an array with two elements:
  // - 'count': The current state value (initialized to 0).
  // - 'setCount': A function to update the 'count' state.
  const [count, setCount] = useState(0);

  // 2. Define handler functions for button clicks:

  // Function to increment the count
  const increment = () => {
    setCount(count + 1); // Updates the 'count' state by adding 1
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1); // Updates the 'count' state by subtracting 1
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0); // Resets the 'count' state to 0
  };

  // 3. Render the component's UI (JSX):
  return (
    <div style={{
      textAlign: 'center',
      margin: '40px auto',
      padding: '25px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      maxWidth: '350px',
      backgroundColor: '#f0f8ff', // Light blue background
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    }}>
      {/* Display the current count */}
      <h2 style={{ color: '#333', marginBottom: '15px' }}>Simple Counter</h2>
      <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#007bff', margin: '20px 0' }}>
        Current Count: {count}
      </p>

      {/* Buttons for counter actions */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <button
          onClick={increment} // Call the increment function when clicked
          style={{
            padding: '12px 25px',
            fontSize: '1.1em',
            backgroundColor: '#28a745', // Green button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            flex: '1', // Distribute space evenly
            margin: '0 5px'
          }}
        >
          Increment
        </button>
        <button
          onClick={decrement} // Call the decrement function when clicked
          style={{
            padding: '12px 25px',
            fontSize: '1.1em',
            backgroundColor: '#dc3545', // Red button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            flex: '1',
            margin: '0 5px'
          }}
        >
          Decrement
        </button>
        <button
          onClick={reset} // Call the reset function when clicked
          style={{
            padding: '12px 25px',
            fontSize: '1.1em',
            backgroundColor: '#6c757d', // Gray button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            flex: '1',
            margin: '0 5px'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// Export the Counter component for use in App.jsx
export default Counter;
