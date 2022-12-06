import React, { useState } from 'react';
import Tweets, { TweetsContext } from './Tweets';

const rawTweets = [
  {
    id: 'abc',
    pseudo: 'Elon Mus',
    avatar: 'https://picsum.photos/seed/elon/100/100',
    content: 'This is way better than Twitter',
    likes: 0,
  },
  {
    id: 'def',
    pseudo: 'Titi',
    avatar: 'https://picsum.photos/seed/titi/100/100',
    content: 'MPP is too easy for me',
    image: 'https://picsum.photos/id/237/200/300',
    likes: 0,
  },
  {
    id: 'ghi',
    pseudo: 'God',
    avatar: 'https://picsum.photos/seed/god/100/100',
    content: 'I love React',
    likes: 0,
  }
];

function App() {
  const [tweets, setTweets] = useState(rawTweets);

  return <>
    <TweetsContext.Provider value={{tweets, setTweets}}>
      <Tweets />
    </TweetsContext.Provider>
    <Tweets />
  </>
}

export default App;
