import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "authorId";

export const TweetTitle = (record: TTweet): string => {
  return record.authorId?.toString() || String(record.id);
};
