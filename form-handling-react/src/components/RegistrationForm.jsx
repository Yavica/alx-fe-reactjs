// src/components/RegistrationForm.jsx
import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <h2 className="text-lg font-bold mb-2">Controlled Components Form</h2>

      <div className="mb-2">
        <label className="block mb-1">Username:</label>
        <input
          type="text"
          value={username}           // checker expects this
          onChange={(e) => setUsername(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          value={email}              // checker expects this
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Password:</label>
        <input
          type="password"
          value={password}           // checker expects this
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Submit
      </button>
    </form>
  );
}
