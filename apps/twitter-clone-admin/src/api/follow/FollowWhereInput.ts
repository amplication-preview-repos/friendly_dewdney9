import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  followeeId?: StringNullableFilter;
  followerId?: StringNullableFilter;
  id?: StringFilter;
};
