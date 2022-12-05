import React from 'react';
import Tweets from './Tweets';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <Tweets />
    </QueryClientProvider>
  </>
}

export default App;
