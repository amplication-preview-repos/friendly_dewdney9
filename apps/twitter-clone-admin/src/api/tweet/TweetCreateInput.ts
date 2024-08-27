import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  authorId?: string | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
