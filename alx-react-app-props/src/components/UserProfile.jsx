 // src/components/UserProfile.jsx

// Define the UserProfile functional component.
// It accepts a single argument, 'props', which is an object.
// When we use this component, any attributes we pass to it (like name="Alice")
// will become properties on this 'props' object (e.g., props.name).
const UserProfile = (props) => {
  return (
    // This <div> acts as the container for our user profile card.
    // We're adding some inline styles here to make it visually distinct:
    // a light grey border, some internal spacing (padding),
    // external spacing (margin), and slightly rounded corners.
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', maxWidth: '300px', backgroundColor: '00008B' }}>
      {/*
        Display the user's name.
        We access the 'name' property from the 'props' object using {props.name}.
        The curly braces {} in JSX tell React to evaluate the JavaScript expression inside.
      */}
      <h2>{props.name}</h2>

      {/*
        Display the user's age.
        We access the 'age' property from the 'props' object using {props.age}.
      */}
      <p>Age: {props.age}</p>

      {/*
        Display the user's bio.
        We access the 'bio' property from the 'props' object using {props.bio}.
      */}
      <p>Bio: {props.bio}</p>
    </div>
  );
};

// Export the UserProfile component so that it can be imported and used
// in other files, such as App.jsx.
export default UserProfile;
