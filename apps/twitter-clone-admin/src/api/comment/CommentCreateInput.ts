import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentCreateInput = {
  authorId?: string | null;
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
