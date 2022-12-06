import { useTweet } from "./TweetsService";

function LikeTweet({ id }: { id: string }) {
  const { tweet, likeTweet } = useTweet(id); 

  return <button onClick={likeTweet}>Likes {tweet.likes}</button>
}

export default LikeTweet
