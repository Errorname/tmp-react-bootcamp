import { useState, useId } from 'react';
import { useTweets } from './TweetsContext';

function TweetForm() {
  const id = useId();

  const [pseudo, setPseudo] = useState('');
  const [content, setContent] = useState('');

  const { addTweet } = useTweets();

  return (<div style={{border: '1px solid black', margin: '2em', padding: '1em', display: 'flex', flexDirection: 'column'}}>
    <h2>Send tweet</h2>
    <input type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
    <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
    <button onClick={() => addTweet({
        id,
        pseudo,
        content,
        likes: 0,
      })}>
      Send
    </button>
  </div>)
}

export default TweetForm
