import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  followeeId?: SortOrder;
  followerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
