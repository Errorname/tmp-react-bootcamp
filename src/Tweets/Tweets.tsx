import { useState, useEffect } from 'react';
import Tweet from './Tweet';
import TweetForm from './TweetForm';
import { useTweets } from './TweetsContext';

function Tweets() {
  const [opened, setOpened] = useState(false);
  
  const { tweets } = useTweets();

  useEffect(() => {
    document.title = `You have ${tweets.length} tweets`;
  }, [tweets])

  return (<>
    <h1>
      Hello Bootcampers!
    </h1>
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} id={tweet.id} />
      ))}
    </div>
    { opened
      ? <TweetForm />
      : <button onClick={() => setOpened(!opened)}>Add tweet</button>
    }
  </>);
}

export default Tweets;
