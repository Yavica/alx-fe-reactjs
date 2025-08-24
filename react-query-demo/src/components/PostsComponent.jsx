import { useQuery } from 'react-query';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery('posts', fetchPosts, {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: 'crimson' }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          style={{
            padding: '6px 10px',
            border: '1px solid #ccc',
            background: isFetching ? '#f3f4f6' : 'white',
            cursor: isFetching ? 'not-allowed' : 'pointer',
          }}
        >
          {isFetching ? 'Refreshing…' : 'Refetch'}
        </button>
        <span style={{ fontSize: 12, color: '#666' }}>
          Showing {data?.length ?? 0} posts (cached when fresh)
        </span>
      </div>

      <ul style={{ display: 'grid', gap: 12, listStyle: 'none', padding: 0 }}>
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: 12,
              background: 'white',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 6 }}>{post.title}</div>
            <div style={{ color: '#555', fontSize: 14 }}>{post.body}</div>
            <div style={{ marginTop: 8, fontSize: 12, color: '#888' }}>Post #{post.id}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
