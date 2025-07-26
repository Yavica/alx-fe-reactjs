// src/UserContext.js

import React from 'react'; // React is needed to use createContext

// Create a new Context object.
// This context will be used to share user data throughout the component tree.
// The value passed to createContext (null in this case) is the default value
// that a consumer will receive if it's not wrapped by a Provider.
const UserContext = React.createContext(null);

// Export the UserContext. This allows other components to import it
// and either provide data to it (using UserContext.Provider) or
// consume data from it (using useContext(UserContext)).
export default UserContext;
