import React from 'react';

const tweets = [
  {
    id: 'abc',
    pseudo: 'Titi',
    avatar: 'https://picsum.photos/seed/titi/100/100',
    content: 'MPP is too easy for me',
  },
  {
    id: 'def',
    pseudo: 'Elon Mus',
    avatar: 'https://picsum.photos/seed/mus/100/100',
    content: 'This is way better than Twitter',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 'ghi',
    pseudo: 'God',
    avatar: 'https://picsum.photos/seed/god/100/100',
    content: 'I love this app',
  }
];

function App() {
  return (<>
    <h1>
      Hello Bootcampers!
    </h1>
    {
      tweets.map(tweet => (
        <div key={tweet.id} style={{border: '1px solid black', margin: '2em', padding: '1em'}}>
          <img src={tweet.avatar} alt={tweet.pseudo} />
          <h2>{tweet.pseudo}</h2>
          <p>{tweet.content}</p>
          {tweet.image && <img src={tweet.image} alt={tweet.pseudo} />}
        </div>
      ))
    }
  </>);
}

export default App;
