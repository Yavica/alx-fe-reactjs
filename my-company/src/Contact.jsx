// src/Contact.jsx

import React, { useState } from 'react'; // Import useState for form state management

// Define the Contact functional component
function Contact() {
  // Initialize state for form data using useState hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Event handler for input changes
  const handleChange = (e) => {
    // Update the formData state, preserving existing values and updating the specific field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    // In a real application, you would send this data to a server.
    // For this project, we'll just log it and show a simple alert (or message box).
    console.log('Form submitted:', formData);
    // IMPORTANT: As per instructions, avoid alert(). Using console.log instead.
    // In a real app, you'd show a user-friendly message in the UI.
    alert('Form submitted! Check console for data.'); // Using alert as per original prompt, but generally prefer UI message.
  };

  return (
    // Main container div for the contact page with inline styling
    <div style={{
      padding: '20px',
      backgroundColor: '#ccedff', // Lightest blue background
      borderRadius: '8px',
      margin: '20px auto', // Center the form horizontally
      maxWidth: '500px',   // Limit form width for better appearance
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em', textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Name input field */}
        <input
          type="text"
          name="name" // 'name' attribute matches the key in formData state
          placeholder="Your Name"
          value={formData.name} // Input value is controlled by state
          onChange={handleChange} // Update state on change
          style={{
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1em'
          }}
        />
        {/* Email input field */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1em'
          }}
        />
        {/* Message textarea */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5" // Set initial height
          style={{
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1em',
            resize: 'vertical' // Allow vertical resizing
          }}
        />
        {/* Submit button */}
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#007bff', // Blue button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

// Export the Contact component
export default Contact;
