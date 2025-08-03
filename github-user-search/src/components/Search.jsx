import { useState } from "react";
import { fetchUserData, advancedUserSearch } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e, searchType) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let results = [];
      if (searchType === "basic") {
        const user = await fetchUserData(username);
        results = [user]; // Basic search returns one user
      } else {
        results = await advancedUserSearch(location, minRepos);
        if (results.length === 0) setError("No users found with those criteria.");
      }
      setUsers(results);
    } catch {
      setError("Unable to find the user(s).");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      {/* Basic Search */}
      <form onSubmit={(e) => handleSearch(e, "basic")} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search Username
        </button>
      </form>

      {/* Advanced Search */}
      <form onSubmit={(e) => handleSearch(e, "advanced")} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Search by Location + Repos
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display Results */}
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id || user.login} className="p-4 border rounded flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
