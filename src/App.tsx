import React from 'react';
import TweetList from './TweetList';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <TweetList />
    </QueryClientProvider>
  </>
}

export default App;
