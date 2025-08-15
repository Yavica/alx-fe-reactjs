// src/App.jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <header className="flex items-center gap-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            alt="Vite logo"
            className="w-16 h-16 hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src="/react.svg"
            alt="React logo"
            className="w-16 h-16 animate-spin-slow"
          />
        </a>
      </header>

      {/* Main Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Vite + React + Tailwind
      </h1>

      {/* Card Section */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-200"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-500">
        Click on the logos above to learn more
      <
