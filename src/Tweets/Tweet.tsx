import LikeTweet from "./LikeTweet";
import { useTweet } from "./TweetsContext";

function Tweet({ id }: { id: string }) {  
  const { tweet } = useTweet(id);

  return <div style={{border: '1px solid black', margin: '2em'}}>
    <h2>{tweet.pseudo}</h2>
    <p>{tweet.content}</p>
    <LikeTweet id={id} />
  </div> 
}

export default Tweet
