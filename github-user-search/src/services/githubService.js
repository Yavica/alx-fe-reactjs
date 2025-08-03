// src/services/githubService.js
import axios from 'axios'; // Import Axios for making HTTP requests

// Base URL for the GitHub API
const GITHUB_API_BASE_URL = 'https://api.github.com';

// Get the GitHub Personal Access Token from environment variables
// IMPORTANT: Ensure VITE_APP_GITHUB_API_KEY is set in your .env file
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create an Axios instance with default configurations
const githubApi = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    // Include Authorization header if a token is available
    // This helps with higher rate limits for authenticated requests
    Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : undefined,
    'X-GitHub-Api-Version': '2022-11-28', // Recommended API version
  },
});

/**
 * Fetches basic user data from the GitHub API.
 * @param {string} username The GitHub username to search for.
 * @returns {Promise<Object>} A promise that resolves with the user data.
 * @throws {Error} If the API call fails or user is not found.
 */
export const fetchUserData = async (username) => {
  try {
    // GitHub API endpoint for a single user: https://api.github.com/users/{username}
    const response = await githubApi.get(`/users/${username}`);
    return response.data; // Axios puts the actual response data in .data
  } catch (error) {
    // Log the full error for debugging
    console.error('Error fetching user data:', error.response ? error.response.data : error.message);

    // Handle specific error cases, e.g., user not found (404)
    if (error.response && error.response.status === 404) {
      throw new Error('User not found.');
    } else if (error.response && error.response.status === 403) {
      // Rate limit exceeded or invalid token
      throw new Error('API rate limit exceeded or invalid token. Please try again later or check your token.');
    } else {
      // Generic error message for other issues
      throw new Error('An error occurred while fetching user data. Please try again.');
    }
  }
};