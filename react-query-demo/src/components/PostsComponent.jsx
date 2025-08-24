// src/components/PostsComponent.jsx
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchPosts = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery(["posts", page], () => fetchPosts(page), {
    staleTime: 1000 * 60 * 5, // data stays fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // inactive data stays in cache for 10 minutes
    refetchOnWindowFocus: false, // don't refetch on window focus
    keepPreviousData: true, // ✅ keep old data while fetching new page
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Posts (Page {page})</h2>
      <ul className="space-y-2 mb-4">
        {data.map((post) => (
          <li
            key={post.id}
            className="border p-2 rounded shadow-sm hover:bg-gray-100"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Next
        </button>
      </div>

      {isFetching && <p className="text-sm text-gray-500 mt-2">Loading...</p>}
    </div>
  );
};

export default PostsComponent;
