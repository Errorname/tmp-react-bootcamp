import React, { useEffect, useId, useState } from 'react';

interface ITweet {
  id: string;
  pseudo: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
}

const rawTweets: ITweet[] = [
  {
    id: 'abc',
    pseudo: 'Titi',
    avatar: 'https://picsum.photos/seed/titi/100/100',
    content: 'MPP is too easy for me',
    likes: 0,
  },
  {
    id: 'def',
    pseudo: 'Elon Mus',
    avatar: 'https://picsum.photos/seed/mus/100/100',
    content: 'This is way better than Twitter',
    image: 'https://picsum.photos/200/300',
    likes: 0,
  },
  {
    id: 'ghi',
    pseudo: 'God',
    avatar: 'https://picsum.photos/seed/god/100/100',
    content: 'I love this app',
    likes: 0,
  }
]

function Tweet({tweet, onLikeTweet}: {tweet: ITweet, onLikeTweet: (tweet: ITweet) => void}) {
  return (
    <div key={tweet.id} style={{border: '1px solid black', margin: '2em', padding: '1em'}}>
      <img src={tweet.avatar} alt={tweet.pseudo} />
      <h2>{tweet.pseudo}</h2>
      <p>{tweet.content}</p>
      {tweet.image && <img src={tweet.image} alt={tweet.pseudo} />}
      <button onClick={() => onLikeTweet(tweet)}>{tweet.likes} likes</button>
    </div>
  );
}

function TweetList({tweets, onLikeTweet}: {tweets: ITweet[], onLikeTweet: (tweet: ITweet) => void}) {
  return (<>
    {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} onLikeTweet={onLikeTweet} />)}
  </>);
}

function TweetForm({onTweet}: {onTweet: (tweet: ITweet) => void}) {
  const id = useId();

  const [pseudo, setPseudo] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  return (<div style={{border: '1px solid black', margin: '2em', padding: '1em'}}>
    <h2>Write a tweet</h2>
    <input type="text" placeholder="Pseudo" value={pseudo} onChange={e => setPseudo(e.target.value)} />
    <input type="text" placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
    <input type="text" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />
    <button onClick={() => onTweet({
      id,
      pseudo,
      avatar: `https://picsum.photos/seed/${pseudo}/100/100`,
      content,
      image: image ? image : undefined,
      likes: 0
    })}>Send tweet</button>
  </div>)
}

function App() {
  const [opened, setOpened] = useState(false);
  const [tweets, setTweets] = useState(rawTweets);

  const likeTweet = (tweet: ITweet) => {
    setTweets(tweets.map((t) => {
      if (t.id === tweet.id) {
        return {...t, likes: t.likes + 1};
      }
      
      return t;
    }));
  }

  const addTweet = (tweet: ITweet) => {
    setTweets([...tweets, tweet]);
  }

  useEffect(() => {
    document.title = `You have ${tweets.length} tweets`;
  }, [tweets]);

  return (<>
    <h1>
      Hello Bootcampers!
    </h1>
    <TweetList tweets={tweets} onLikeTweet={likeTweet}/>
    {opened
      ? <TweetForm onTweet={addTweet}/>
      : <button onClick={() => setOpened(true)}>Add tweet</button>
    }
  </>);
}

export default App;
