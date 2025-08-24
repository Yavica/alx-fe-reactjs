// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts, {
    // React Query caching strategies
    staleTime: 1000 * 60 * 5, // 5 minutes before data is considered stale
    cacheTime: 1000 * 60 * 10, // 10 minutes before inactive data is garbage-collected
    refetchOnWindowFocus: false, // prevent auto-refetch when window regains focus
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="border p-2 rounded shadow-sm hover:bg-gray-100"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
