import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface Tweet {
  id: string;
  pseudo: string;
  content: string;
  likes: number;
}

export const useTweetsQuery = () => {
  const { data: tweets } = useQuery<Record<string, Tweet>>({
    queryKey: ["tweets"],
    queryFn: () => fetch("https://errorname.firebaseio.com/titi.json").then((res) => res.json()),
  });

  return tweets || {};
}

export const useTweets = () => {
  const queryClient = useQueryClient();
  const tweets = useTweetsQuery();

  const { mutate } = useMutation({
    mutationFn: async (tweet: Tweet) => {
      await fetch("https://errorname.firebaseio.com/titi.json", {
        method: "POST",
        body: JSON.stringify(tweet),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tweets"]);
    },
  });
  
  const addTweet = (tweet: Tweet) => {
    mutate(tweet);
  }

  return {
    tweets,
    addTweet,
  };
}

export const useTweet = (id: string) => {
  const queryClient = useQueryClient();
  const tweets = useTweetsQuery();

  const { mutate } = useMutation({
    mutationFn: async ({id, tweet}: { id: string, tweet: Partial<Tweet> }) => {
      await fetch(`https://errorname.firebaseio.com/titi/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify(tweet),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tweets"]);
    },
  });

  const likeTweet = () => {
    mutate({
      id,
      tweet: {
        likes: tweets[id].likes + 1,
      }
    });
  }

  return {
    tweet: tweets[id],
    likeTweet,
  }
}
