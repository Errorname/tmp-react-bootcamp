import { createContext, useContext } from 'react';

interface Tweet {
  id: string;
  pseudo: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
}

interface ITweetContext {
  tweets: Tweet[];
  setTweets: (tweets: Tweet[]) => void;
}

export const TweetsContext = createContext<ITweetContext>({
  tweets: [],
  setTweets: () => {},
});

export const useTweets = () => {
  const { tweets, setTweets } =  useContext(TweetsContext);

  const addTweet = (tweet: Tweet) => {
    setTweets([tweet, ...tweets]);
  }

  return {
    tweets,
    addTweet,
  };
}

export const useTweet = (id: string) => {
  const { tweets, setTweets } = useContext(TweetsContext);

  const tweet = tweets.find((tweet) => tweet.id === id)!;

  const likeTweet = () => {
    setTweets(tweets.map((tweet) => {
      if (tweet.id === id) {
        return {
          ...tweet,
          likes: tweet.likes + 1,
        };
      }
      return tweet;
    }));
  }

  return {
    tweet,
    likeTweet,
  }
}
