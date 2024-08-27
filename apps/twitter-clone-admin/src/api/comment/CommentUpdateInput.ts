import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentUpdateInput = {
  authorId?: string | null;
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
