// src/components/WelcomeMessage.jsx

// Define a functional component named WelcomeMessage.
// In React, components are functions that return JSX.
function WelcomeMessage() {
    return (
        // JSX allows you to write HTML-like syntax directly in JavaScript.
        // A component must return a single root element. Here, it's a <div>.
        <div>
            {/* This is the h1 tag. We will change its text. */}
            <h1>Hello everyone, I am learning React at ALX!</h1>
            {/* This is the first p tag. */}
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
        </div>
    );
}

// 'export default' makes this component available to be imported and used
// in other files, like App.jsx.
export default WelcomeMessage;