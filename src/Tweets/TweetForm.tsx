import { useState, useId } from 'react';
import { useTweets } from './TweetsContext';

function TweetForm() {
  const id = useId();

  const [pseudo, setPseudo] = useState('');
  const [avatar, setAvatar] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const { addTweet } = useTweets();

  return (<div style={{border: '1px solid black', margin: '2em', padding: '1em', display: 'flex', flexDirection: 'column'}}>
    <h2>Send tweet</h2>
    <input type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
    <input type="text" placeholder="Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
    <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
    <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
    <button onClick={() => addTweet({
        id,
        pseudo,
        avatar,
        content,
        image: image ? image : undefined,
        likes: 0,
      })}>
      Send
    </button>
  </div>)
}

export default TweetForm
