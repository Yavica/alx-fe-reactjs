import { useState } from 'react';
import { QueryClient, QueryClientProvider, useIsFetching } from 'react-query';
import PostsComponent from './components/PostsComponent.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // recent data stays "fresh" for 60s, so returning to the component
      // within this time uses the cache (no network call)
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function GlobalFetchingIndicator() {
  const isFetching = useIsFetching();
  return isFetching ? (
    <div style={{ marginTop: 12, fontSize: 12, opacity: 0.8 }}>
      Refreshing data…
    </div>
  ) : null;
}

export default function App() {
  const [tab, setTab] = useState('posts'); // 'posts' | 'other'

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 16px' }}>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>React Query Demo</h1>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button
            onClick={() => setTab('posts')}
            style={{
              padding: '8px 12px',
              border: '1px solid #ccc',
              background: tab === 'posts' ? '#e8f0fe' : 'white',
              cursor: 'pointer',
            }}
          >
            Posts
          </button>
          <button
            onClick={() => setTab('other')}
            style={{
              padding: '8px 12px',
              border: '1px solid #ccc',
              background: tab === 'other' ? '#e8f0fe' : 'white',
              cursor: 'pointer',
            }}
          >
            Other Page (unmounts Posts)
          </button>
        </div>

        <GlobalFetchingIndicator />

        {tab === 'posts' ? (
          <PostsComponent />
        ) : (
          <div style={{ color: '#555' }}>
            <p>
              You’re on a different page. Go back to <strong>Posts</strong> to
              see cached data load instantly (no network if still fresh).
            </p>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
}
