import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  authorId?: string | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
