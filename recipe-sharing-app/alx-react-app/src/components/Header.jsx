// src/components/Header.jsx

// Define a functional component named Header.
// This component will represent the top section of our page.
function Header() {
    return (
        // The <header> HTML tag is used here for semantic meaning,
        // indicating this is the introductory content.
        <header>
            {/* The <h1> tag contains the main title for our application. */}
            <h1>My Favorite Cities</h1>
        </header>
    );
}

// We export this component so that other files (like App.jsx)
// can import and use it.
export default Header;