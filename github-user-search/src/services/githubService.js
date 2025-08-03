// ✅ src/services/githubService.js
import axios from 'axios';

// 🔹 Basic user search by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// 🔹 Advanced search using location and repo count
export const advancedUserSearch = async (location, minRepos) => {
  const query = `location:${location} repos:>${minRepos}`;
  const encodedQuery = encodeURIComponent(query);
  const url = `https://api.github.com/search/users?q=${encodedQuery}`;

  const response = await axios.get(url);
  return response.data.items;
};
