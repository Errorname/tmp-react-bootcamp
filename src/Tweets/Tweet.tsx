import LikeTweet from "./LikeTweet";
import { useTweet } from "./TweetsContext";

function Tweet({ id }: { id: string }) {  
  const { tweet } = useTweet(id);

  return <div style={{border: '1px solid black', margin: '2em'}}>
    <h2>{tweet.pseudo}</h2>
    <img src={tweet.avatar} alt={tweet.pseudo} />
    <p>{tweet.content}</p>
    {tweet.image && <img src={tweet.image} alt=""/>}
    <LikeTweet id={id} />
  </div> 
}

export default Tweet
